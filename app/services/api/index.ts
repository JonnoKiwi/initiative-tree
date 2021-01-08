import { Api as Users } from './users'
import * as Characters from './characters'
import { HydrogenAPI } from './IHydrogenAPI'

export class Api {
  users: HydrogenAPI
  characters: HydrogenAPI
  constructor({ useLiveAPIForCharacters = false }) {
    this.users = new Users()
    this.characters = useLiveAPIForCharacters ? new Characters.Api() : new Characters.FakeApi()
  }

  async setup() {
    await this.users.setup()
    await this.characters.setup()
  }
}
