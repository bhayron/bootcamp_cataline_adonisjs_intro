import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Bhayron Klivilan',
        email: 'admin@gmail.com',
        password: 'secret123',
        role: 'admin',
      },
      {
        name: 'normal name',
        email: 'normal@gmail.com',
        password: 'secret123',
        role: 'normal',
      },
    ])
  }
}
