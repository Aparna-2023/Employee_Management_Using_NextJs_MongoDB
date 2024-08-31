/* controller */

import Users from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function getUsers(req:NextRequest,res: any) {
    try{
        const users = Users.find()
        res.status(200).json({user: "get Request"})
    }catch(error){
        res.status(404).json({error: "Error while fetching the data"})
    }

}