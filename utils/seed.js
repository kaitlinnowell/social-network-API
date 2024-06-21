const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {users, thoughts} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

//Create each thought then create the user and associate the thought with the user
for (let i in thoughts) {
    const thoughtData = await Thought.create(thoughts[i]);
    await User.create({...users[i], 
      thoughts: [thoughtData._id]
    });
}

//Add a friend for each user
const allUsers = await User.find()
for (const user of allUsers) {
    const newFriend = [allUsers[Math.floor(Math.random()*allUsers.length)]._id]
    const updatedUser = await User.findOneAndUpdate({_id: user._id}, {$addToSet: {friends: newFriend}}, {new:true})
}
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
