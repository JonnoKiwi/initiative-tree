import { Api as Users } from './users'
import { Api as Characters } from './characters'
import { HydrogenAPI } from './IHydrogenAPI'

export class Api {
  users: HydrogenAPI
  characters: HydrogenAPI
  constructor() {
    this.users = new Users()
    this.characters = new Characters()
  }

  async setup() {
    await this.users.setup()
    await this.characters.setup()
  }
}
