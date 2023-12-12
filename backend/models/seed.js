const { db } = require("./index.js");
const User = require('./User');
const ScoutProgram = require('./ScoutProgram');
const sampleData = require('../../frontend/data.json');

const insertSampleData = async () => {
  try {
    // Insert users
    const users = await User.create(sampleData.filter(item => item.email));

    // Extract scout programs with participants
    const scoutProgramsWithParticipants = sampleData.filter(item => item.name);

    // Insert ScoutPrograms
    await ScoutProgram.create(scoutProgramsWithParticipants.map(program => ({
      name: program.name,
      description: program.description,
      startDate: program.startDate,
      endDate: program.endDate,
      address: program.address,
      participants: users.filter(user => program.participants.some(participant =>
        participant.email === user.email)).map(user => user._id),
    })));

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    db.close();
  }
};

// Call the function to insert sample data
insertSampleData();
