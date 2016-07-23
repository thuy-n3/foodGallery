const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})


//STEP ONE - this is where you start by establishing properties for the db - for the backend
const dishSchema = new Schema ({ // establish the properties that we will use for the data
    description: {type: String, required: false}, //some are required to fill out and others have defaults set
    rating: {type: Number, min:1, max:5, default:0},
    likes: {type: [String], default: []},
    location: {type: String, required: true},
    title: {type: String, required: true},
    authorEmail: {type: String, required: true},
    imageUrl: {type: String, required: true},
    tags: {type: [String], default: []},
    authorId: {type: String, required: true}

})

module.exports = { //STEP TWO (export model)
  User: createModel('User', usersSchema),

  Dish: createModel('Dish', dishSchema) 

}

