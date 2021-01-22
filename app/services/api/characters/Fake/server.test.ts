import { Character } from '../api.types'
import Server, { ensureNumber, calculateInitiative, ResponseItems } from './server'

describe('Character Fake Server', () => {
  describe('Helper Functions - Stateless Functions', () => {
    describe('ensureNumber()', () => {
      it('returns a number for a string', () => {
        expect(ensureNumber('2')).toEqual(2)
        expect(ensureNumber('a2')).toEqual(0)
        expect(ensureNumber('3+2')).toEqual(3)
        expect(ensureNumber('2324')).toEqual(2324)
      })
      it('returns a number for a number', () => {
        expect(ensureNumber(2.1)).toEqual(2.1)
        expect(ensureNumber(-2)).toEqual(-2)
      })
      it('returns zero for not a string nor number', () => {
        expect(ensureNumber({ })).toEqual(0)
        expect(ensureNumber([])).toEqual(0)
        expect(ensureNumber(undefined)).toEqual(0)
        expect(ensureNumber(NaN)).toEqual(0)
        expect(ensureNumber(null)).toEqual(0)
      })
    })
    describe('calculateInitiative()', () => {
      it('returns expected total for modifiers + roll + dexterity and does not change the property value', () => {
        const character: Character = {
          id: '11111-111111-11111-11111',
          initiative: 15,
          roll: 5,
          dexterity: 12,
          modifiers: 18,
          name: 'Dirby',
          avatar: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
          }
        }
        expect(calculateInitiative(character)).toEqual(35)
        expect(character.initiative).toEqual(15)
      })
    })
  })
  describe('Internal Methods', () => {
    describe('getStorageKey', () => {
      it('defaults', () => {
        const server = new Server()
        expect(server.getStorageKey()).toEqual('@initiative-tree:characters')
      })
      it('suffix', () => {
        const server = new Server('something')
        expect(server.getStorageKey()).toEqual('@initiative-tree:characters-something')
      })
    })
  })
  describe('Interface', () => {
    const server:Server = new Server()
    beforeEach(async () => {
      await server.reset()
    })
    describe('createItem', () => {
      it('creates item (persists and returns in response)', async () => {
        const newItem: Character = {
          id: '0',
          name: 'Intel',
          initiative: 32,
          roll: 1,
          dexterity: 3,
          modifiers: 4,
          avatar: {
            thumbnail: 'http://example.com/avatar/2'
          }
        }
        let response:ResponseItems = await server.createItem(newItem)
        expect(response).toHaveProperty('data')
        const items = response.data
        expect(items).toBeInstanceOf(Array)
        let item = items.find(value => value.name === newItem.name)
        expect(item).toHaveProperty('dexterity', newItem.dexterity)
        expect(item).toHaveProperty('modifiers', newItem.modifiers)
        // See if it persisted
        response = await server.getItems()
        item = response.data.find(value => value.name === newItem.name)
        expect(item).toHaveProperty('dexterity', newItem.dexterity)
        expect(item).toHaveProperty('modifiers', newItem.modifiers)
        expect(item).toHaveProperty('roll', 0)
        expect(item).toHaveProperty('avatar.thumbnail', newItem.avatar.thumbnail)
        expect(item).not.toHaveProperty('id', '0')
        expect(item.initiative).toBeTruthy()
        expect(item.initiative).not.toEqual(newItem.initiative)
      })
    })
    describe('deleteItems', () => {
      it('deletes all items if no specific id is supplied', async () => {
        // Make sure we have items first from warm
        let items:Character[] = await server._getItemsFromStorage()
        expect(items.length).toBeGreaterThan(0)
        // unit to test
        await server.deleteItems([])
        // assert that the storage was updated
        items = await server._getItemsFromStorage()
        expect(items).toHaveLength(0)
      })
      it('deletes specific ones by id', async () => {
        await server.deleteItems([{ id: '11111-111111-11111-11111' }])
        const items:Character[] = await server._getItemsFromStorage()
        expect(items).toHaveLength(1)
        expect(items[0]).toHaveProperty('id', '11111-111111-11111-11112')
      })
    })
    describe('getItems', () => {
      it('gets all items if no specific id is supplied', async () => {
        const response:ResponseItems = await server.getItems()
        expect(response).toHaveProperty('data')
        const items:Character[] = response.data
        expect(items).toHaveLength(2)
      })
      it('get ones by filtering for ids', async () => {
        const response:ResponseItems = await server.getItems({ filters: { ids: '11111-111111-11111-11111' } })
        expect(response).toHaveProperty('data')
        const items:Character[] = response.data
        expect(items).toHaveLength(1)
        expect(items[0]).toHaveProperty('id', '11111-111111-11111-11111')
      })
    })
  })
})
