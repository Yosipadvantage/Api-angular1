import {Schema,model} from "mongoose";


const authModel = new Schema({

    username:{
    type:String,
    required:true
    },

    email:{
    type:String,
    required:true,
    unique:true
    },

    password:{
    type:String,
    required:true
    },

    role:{
    ref:"roles",
    type:Schema.Types.ObjectId,
  
    }

})


export default model("users",authModel);