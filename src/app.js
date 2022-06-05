const express = require("express");
const app = express();
import AuthRouer from "./Routes/auth.routes";
import("./Config/database");
import generateRoles from "./Functions/generateRoles";
import dotenv from "dotenv";
import cors from "cors";

//CONFIGURACIONES
app.set("puerto",4000);




//MIDDLEWARES
app.use(express.json());
app.use(cors());
generateRoles();
dotenv.config()




//ROUTES
app.use("/api",AuthRouer);



//SERVER
app.listen(app.get("puerto"),()=>{
console.log("CORRIENDO EN EL PUERTO",app.get("puerto"));
})