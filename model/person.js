const mongoose =require ("mongoose");
const { Schema,model  } = mongoose;

const personPrototype = new Schema({
  name:{
    type:String,
    required:true,
  },
  age:{
    type:number
  },
  favoriteFood:{
    type:[string]
  }
});
const Person= model("person",personPrototype);

module.exports=Person