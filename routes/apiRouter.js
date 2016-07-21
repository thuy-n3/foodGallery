let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Dish = require('../db/schema.js').Dish //(3) Importing Schema after defining schema 

  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password",function(err, record){
        if(err || !record) return res.json(err)
        let recordWithUpdates = helpers.updateFields(record, req.body)
        recordWithUpdates.save(function(err){
          if(err) return res.json(err) 
          res.json(recordWithUpdates)
        })
      })
    })
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    // Routes for a Model(resource) should have this structure

    //making the post route - this route will create a brand new dish that we will put in the db
  apiRouter.post('dishes', function(request, response){
    let dish = new Dish(request.body) 
    //create a new instance of schema from a MONGOOSE model, request.body is all the information 
    //that we have taken from the client side and we sent it to the body of the request to the server 
    dish.save(function(error){
    	//save to db 
      if(error){
        response.send(error)
      }
      else{
        response.json(dish)
      }
    })
  })

  apiRouter.get('/dishes', function(request, response){
  	Dish.find(request.query, function(error, records){
  			  //some methods live directly on the model, so you don't need to create a new instance 
  	//request.query = parse parmeters at end of url into tag OBJ to filter request from db
  	// - allow to filter any search....if user dont put any parmeters than it be empty to query for everthing
  	if(error){
  		response.send(error)
  	}
  	else{
  		response.json(records)
  	}
  })
})

//get dishes posted by the logged in user 
//I want to get all dishes where the author id matches the current id of the user
apiRouter.get('user/dishes', function(request,response){
	Dish.find({authorId: request.user._id}, function(error, records){ 
		if(error){
			response.send(error)
		}
		else{
			response.json(records)
		}
	})
})

module.exports = apiRouter


























