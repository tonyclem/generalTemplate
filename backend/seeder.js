const dotenv = require('dotenv');
const express = require('express');
const users = require('./data/users.js');
const products = require('./data/products.js');
const User = require('./models/userModel.js');
const Product = require('./models/productModel.js');
const connectDB = require('./config/db.js');

dotenv.config();

connectDB();

const importData = express.Router();
importData.get('/', async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log(createdUsers);

    const adminUser = createdUsers[0]._id;
    console.log('is adminUser', adminUser);

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
});

module.exports = importData;

// const destroyData = async () => {
//   try {
//     await Product.deleteMany();
//     await User.deleteMany();

//     console.log('Data Destroyed!');
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === '-d') {
//   destroyData();
// } else {
//   importData();
// }
