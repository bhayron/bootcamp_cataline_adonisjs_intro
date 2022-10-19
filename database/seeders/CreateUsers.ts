import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        password: 'secret123',
        role: 'admin',
      },
      {
        email: 'normal@gmail.com',
        password: 'secret123',
        role: 'normal',
      },
    ])
  }
}
