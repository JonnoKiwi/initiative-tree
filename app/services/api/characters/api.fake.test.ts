import { calculateInitiative, ensureNumber } from './api.fake'
import { Character } from './api.types'

describe('Character API > Fake', () => {
  describe('Methods', () => {
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
})
