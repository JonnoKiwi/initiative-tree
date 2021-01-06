import { Character } from '../api.types'
import Server, { ensureNumber, calculateInitiative } from './server'

describe('Character Fake Server', () => {
  describe('Standalone Methods', () => {
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
  describe('Interface', () => {
    describe('create', () => {
      it('persists item', async () => {
        const server = new Server()
        await server.warm()
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
      })
    })
  })
})
