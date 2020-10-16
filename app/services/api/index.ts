import { Api as Users } from './users'
import { HydrogenAPI } from './IHydrogenAPI'

export class Api {
  users: HydrogenAPI
  constructor() {
    this.users = new Users()
  }

  async setup() {
    await this.users.setup()
  }
}
