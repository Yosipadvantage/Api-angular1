import rolesModel from "../Models/roles.model";

export default async function generateRoles(){

const count = await rolesModel.estimatedDocumentCount();

        if(count > 0) return 
        await Promise.all([
            new rolesModel({role:"user"}).save(),
            new rolesModel({role:"moderater"}).save(),
            new rolesModel({role:"admin"}).save()
        ])
    
        console.log("ROLES CREADOS");


}