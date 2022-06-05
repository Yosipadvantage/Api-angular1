import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin_angular:angular123@cluster0.cdtmz.mongodb.net/angular?retryWrites=true&w=majority")
.then(()=>{console.log("CONECTADO A LA BASE DE DATOS")
}).catch((e)=>{console.log("ERROR EN LA CONEXION: ",e)});