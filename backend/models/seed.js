const mongoose = require('mongoose');
const User = require('./User');
const ScoutProgram = require('./ScoutProgram');
const sampleData = require('../../frontend/data.json'); 

const insertSampleData = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/scoutTunisian', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database for seeding');

    // Clear the database before seeding
    await User.deleteMany({});
    await ScoutProgram.deleteMany({});

    // Separate user data from program data
    const userData = sampleData.filter(item => item.email);
    const scoutProgramData = sampleData.filter(item => item.name && item.participants);

    // Insert users and store the inserted documents
    const users = await User.insertMany(userData);

    // Map participants in programs to user IDs
    const scoutPrograms = scoutProgramData.map(program => {
      const participantIds = program.participants.map(participant => {
        const foundUser = users.find(user => user.email === participant.email);
        return foundUser ? foundUser._id : null;
      }).filter(id => id != null); // Filter out any nulls in case of missing users

      return {
        name: program.name,
        description: program.description,
        startDate: program.startDate,
        endDate: program.endDate,
        address: program.address,
        participants: participantIds
      };
    });

    // Insert ScoutPrograms
    await ScoutProgram.insertMany(scoutPrograms);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Always close the connection after the script is done
    await mongoose.disconnect();
  }
};

insertSampleData();
