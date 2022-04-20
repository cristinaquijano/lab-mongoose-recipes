const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

let newRecipe = {
 title: "Burritos",
 level: "Easy peasy",
 ingledients: ["burrito", "tomate", "avocado", "cheese"],
 cuisine: "Mexican",
 dishType: "Dinner",
 image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG",
 duration: 10,
 creator: "Cris",
}

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
