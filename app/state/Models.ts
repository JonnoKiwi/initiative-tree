import { User as _User } from '../services/api/users'

export type Combat = {
  startDate: string
  completedDate: string
  result: any
}

export type Avatar = {
  thumbnail: string
}

/**
 * A CharacterEdit is a many to one with the User
 */
export type Character = {
  id: string
  initiative: number
  roll: number
  name: string
  modifiers: number
  dexterity: number
  avatar: Avatar
}

export type User = _User

/**
 * Character Factory
 */
export const createCharacter = ():Character => {
  return {
    id: '',
    dexterity: 0,
    modifiers: 0,
    name: '',
    initiative: 0,
    roll: 0,
    avatar: {
      thumbnail: ''
    }
  }
}
