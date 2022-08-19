import connectToDb from './database.js'
import mongoose from 'mongoose'
import seedingData from './seedingData.js'
import destinationModel from '../Model/destinations.js'
import userModel from '../Model/user.js'

const seed = async () => {

  await connectToDb()
  console.log('Database connect')
  await mongoose.connection.db.dropDatabase()


  const dbDestinations = await destinationModel.create(seedingData.destination)
  console.log(`${dbDestinations.length} countries have been created sucessfully in the database`)

  const dbUsers = await userModel.create([
    seedingData.users.admin,
    seedingData.users.user
  ])
  console.log(`${dbUsers.length} users have been created in the database.`)


  console.log(`Going to disconnect from db ${mongoose.connection.name}`)
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }

  console.log('All done. Database has been reset')

}

seed()