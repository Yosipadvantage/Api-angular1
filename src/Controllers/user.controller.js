import res from "express/lib/response";
import jwt from "jsonwebtoken";
import authModel from "../Models/auth.model";
import rolesModel from "../Models/roles.model";

export const RegisterUser = async (req,res) => {

    const {username,email,password,role} = req.body;
    if(!username | !email |!password){
    res.status(200).json({
    result:"",
    error:true,
    message:"No se reciben los datos correspondientes"
    })
    }else{

    try {

    const searchUser = ( await authModel.find({email:{$in:email}})).length > 0;

    if(searchUser){
    res.status(200).json({
    result:"",
    error:true,
    message:"Ese usuario ya existe"
    })

    }else{

    const newUser = new authModel({username,email,password});
    const FoundRole = await rolesModel.findOne({role:{$in:role ? role : "user"}})
    newUser.role = FoundRole._id
    const response = await newUser.save();
    const token = jwt.sign({id:response._id},process.env.TOKEN_KEY,{expiresIn:"2d"});
    res.status(200).json({
    result:token,
    error:false,
    message:""
    })}
           
            
    } catch (error) {
    res.status(200).json({
    result:"",
    error:true,
    message:error
    });
    }}
    }


export const LoginUser = async (req,res) => {
    const {email,password} = req.body;
    if(!email | !password){
    res.status(200).json({
    result:"",
    error:true,
    message:"No se reciben los datos correspondientes"
    });
    }else{

    const response =  await authModel.find({email,password});
    if(response.length){

    const token = jwt.sign({id:response._id},process.env.TOKEN_KEY,{expiresIn:"2d"})
    res.status(200).json({
    result:token,
    error:false,
    message:""
    });
        
    }else{
    res.status(200).json({
    result:"",
    error:true,
    message:"El email o password son incorrectos"
    });
        
    }}
    }


    export const authUser = async (req,res) => {

        const {token} = req.body;
        if(!token){

        res.json({
        result:"",
        error:true,
        message:"No se recibe un token"
        })
        }else{
        try {
        const response = jwt.verify(token,process.env.TOKEN_KEY);
        if(response.iat){
        res.json(true)
        }else{
        res.json(false)
        }
               
        } catch (error) {
        res.json(false)
        }}


    }

