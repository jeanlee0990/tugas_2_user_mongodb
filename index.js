const mongoose = require('mongoose');
const User = require('./models/User');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern_tutorial');
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const seedUsers = async () => {
  try {
    await connectDB();

    const users = [
      {
        username: 'admin_user',
        email: 'admin@example.com',
        password: 'password123',
        role: 'admin',
      },
      {
        username: 'regular_user',
        email: 'user@example.com',
        password: 'password123',
        role: 'user',
      },
    ];

    await User.deleteMany({});
    await User.insertMany(users);

    console.log('Users added successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding users:', error);
    mongoose.connection.close();
  }
};

seedUsers();
