import { FakeApi as Api } from './api'

describe('CharacterEdit API > Fake', () => {
  describe('Interface', () => {
    describe('Create', () => {
      it('returns successful', async () => {
        const api:Api = new Api()
        await api.setup()
        const result = await api.createData({})
        expect(result).toHaveProperty('ok', true)
        expect(result).toHaveProperty('kind', 'ok')
        expect(result).toHaveProperty('data')
      })
    })
  })
})
