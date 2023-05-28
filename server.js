const express = require("express");
require ('dotenv').config()
const connectDB=require("./config/connectDB")

const PORT = process.env.PORT || 5050;
const app=express();

const {createPerson,createPersons} = require('./data/data')
const Person = require("./model/person")
connectDB()
createPerson()
createPersons()

// app.listen(PORT,(err)=>{
   // err?
    //console.log(err)
    //:console.log("server is running on port",PORT)}) 


//model.find() to Search Your Database
  
Person.find({ name: "Fatma" }, function (err, data) {
    console.log(data);
  });
  
  //model.findOne() to Return a Single Matching Document from Your Database
  
  function searchByFood(search) {
    Person.findOne({ favoriteFoods: { $regex: search } }, function (err, docs) {
      console.log(docs);
    });
  }
  searchByFood("Lasagna");
  
  //model.findById() to Search Your Database By _id
  
  function findByPersonId(personId) {
    Person.findById(personId, function (err, docs) {
      console.log(docs);
    });
  }
  findByPersonId("62e5e2d85a8a179caf2a5a20");
  
  //Perform Classic Updates by Running Find, Edit, then Save
  
  function findPersonAndUpdate(personId) {
    Person.findById(personId, function (err, docs) {
      docs.favoriteFoods.push("Meat");
      docs.save().then((doc) => {
        console.log(doc);
      });
    });
  }
  
  findPersonAndUpdate("662e5e2d85a8a179caf2a5a21");
  
  //Perform New Updates on a Document Using model.findOneAndUpdate()
  
  function findPersonAndUpdate(name) {
    Person.findOneAndUpdate(
      { name },
      { age: 33 },
      {
        new: true,
      }
    ).then((doc) => {
      console.log(doc);
    });
  }
  findPersonAndUpdate("Mourad");
  
  //Delete One Document Using model.findByIdAndRemove
  
  function findPersonAndRemove(personId) {
    Person.findByIdAndRemove(personId).then((doc) => {
      console.log(doc);
    });
  }
  findPersonAndRemove("62c3468526e16a554e5fabc2");
  
  //MongoDB and Mongoose - Delete Many Documents with model.remove()
  
  Person.remove({ name: "Samia" }).then((data) => {
    console.log(data.deletedCount);
  });
  
  //Chain Search Query Helpers to Narrow Search Results
  
  function done(err, data) {
    console.log(data);
  }
  Person.find({ favoriteFoods: { $regex: "Burger" } })
    .sort({ name: 1 })
    .limit(2)
    .select("-age")
    .exec(done);




app.listen(port,()=>{console.log("port is running",port)})