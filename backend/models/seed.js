const mongoose = require('mongoose');
const User = require('./models/User');
const ScoutProgram = require('./models/ScoutProgram');
const OfficialWear = require('./models/OfficialWear'); // Add the OfficialWear model import
const sampleData = require('../../frontend/data.json');

const insertSampleData = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/scoutTunisian', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database for seeding');

    // Clear the database before seeding
    await User.deleteMany({});
    await ScoutProgram.deleteMany({});
    await OfficialWear.deleteMany({}); // Clear OfficialWear collection

    // Separate user data from program data
    const userData = sampleData.filter((item) => item.email);
    const scoutProgramData = sampleData.filter((item) => item.name && item.participants);

    // Insert users and store the inserted documents
    const users = await User.insertMany(userData);

    // Map participants in programs to user IDs
    const scoutPrograms = scoutProgramData.map((program) => {
      const participantIds = program.participants.map((participant) => {
        const foundUser = users.find((user) => user.email === participant.email);
        return foundUser ? foundUser._id : null;
      }).filter((id) => id != null); // Filter out any nulls in case of missing users

      return {
        name: program.name,
        description: program.description,
        startDate: program.startDate,
        endDate: program.endDate,
        address: program.address,
        participants: participantIds,
      };
    });

    // Insert ScoutPrograms
    await ScoutProgram.insertMany(scoutPrograms);

    // Map official wear data to user IDs
    const officialWearData = sampleData.filter((item) => item.officialWear);
    const officialWears = officialWearData.map((wear) => {
      const userId = users.find((user) => user.email === wear.email)?._id;

      return {
        PullMeasuring: wear.officialWear.PullMeasuring,
        ClothingMeasuring: wear.officialWear.ClothingMeasuring,
        Price: wear.officialWear.Price,
        DatePurchase: wear.officialWear.DatePurchase,
        users: userId ? [{ user: userId, date_entry: Date.now() }] : [],
        commanders: [], // You can add commanders in a similar way if needed
      };
    });

    // Insert OfficialWears
    await OfficialWear.insertMany(officialWears);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Always close the connection after the script is done
    await mongoose.disconnect();
  }
};

insertSampleData();
