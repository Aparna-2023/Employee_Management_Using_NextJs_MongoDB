import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    salary: Number,
    dob: String,
    status: String  
})
const Users= models.user || model('user',userSchema)

export default Users;