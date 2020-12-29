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
 * A Character is a many to one with the User
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
