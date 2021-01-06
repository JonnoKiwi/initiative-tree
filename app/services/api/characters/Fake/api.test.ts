import { FakeApi as Api } from './api'
import { Character } from '../api.types'

describe('CharacterEdit API > Fake', () => {
  describe('Interface', () => {
    describe('Create', () => {
      it('returns standard structure', async () => {
        const api:Api = new Api()
        await api.setup()
        const result = await api.createData({})
        expect(result).toHaveProperty('ok', true)
        expect(result).toHaveProperty('kind', 'ok')
        expect(result).toHaveProperty('data')
      })
      it.skip('responds truthy', async () => {
        // Implement
      })
      it('persists created object', async () => {
        // Setup
        const api:Api = new Api()
        await api.setup()
        const newData:Character = {
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
        // Group1. Check response (should be a separate test)
        // POST /characters/
        // >>> Input
        // <<< Response 201 (no body)
        // This doesn't care about persistence only response data
        let result = await api.createData(newData)
        expect(result).toHaveProperty('data.data')
        let list = result.data.data
        expect(list).toBeInstanceOf(Array)
        let item = list.find(item => item.name === newData.name)
        expect(item).toHaveProperty('name', newData.name)
        expect(item).toHaveProperty('avatar.thumbnail', newData.avatar.thumbnail)
        expect(item).not.toHaveProperty('id', newData.id)

        // Group2. Check that it persists
        // POST /characters
        // GET /characters
        result = await api.getData({})
        expect(result).toHaveProperty('data.data')
        list = result.data.data
        expect(list).toBeInstanceOf(Array)
        item = list.find(item => item.name === newData.name)
        expect(item).toHaveProperty('name', newData.name)
        expect(item).toHaveProperty('dexterity', newData.dexterity)
        expect(item).toHaveProperty('modifiers', newData.modifiers)
        expect(item).toHaveProperty('avatar.thumbnail', newData.avatar.thumbnail)
        expect(item).not.toHaveProperty('id', newData.id)
        expect(item).not.toHaveProperty('roll', newData.roll)
        expect(item).not.toHaveProperty('initiative', newData.initiative)
      })
    })
  })
})
