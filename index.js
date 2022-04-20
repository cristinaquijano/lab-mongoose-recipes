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
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTodopogy: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then((result) => {
   return Recipe.insertMany(data)
  })
  .then((result) => {
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}, {new:true})
  })
  .then((result) => {
    return Recipe.findByIdAndDelete({title:"Carrot Cake"})
  })
  .then((result) => {
    return mongoose.connection.close()
  })
    .catch(error => {
    console.error('Error connecting to the database', error);
  });
