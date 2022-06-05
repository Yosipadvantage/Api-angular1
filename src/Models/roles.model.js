import {Schema,model} from "mongoose";


const roleModel = new Schema({

    role:{
    type:String,
    required:true
    },
})


export default model("roles",roleModel);