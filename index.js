const express = require("express");
const app = express();
import AuthRouer from "./src/Routes/auth.routes";
import("./src/Config/database");
import generateRoles from "./src/Functions/generateRoles";
import dotenv from "dotenv";
import cors from "cors";

//CONFIGURACIONES
app.set("puerto",4000 || process.env.PORT);




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