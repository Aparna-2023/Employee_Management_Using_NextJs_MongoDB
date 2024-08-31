import connectMongo from "@/app/Database/connection";
import Users from "@/model/user";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
      await connectMongo();
      const users = await Users.find({});
      return NextResponse.json(users);
    } catch (error) {
      console.error("Database connection failed:", error);
      return NextResponse.json({ message: "Error while fetching the data" }, { status: 500 });
    }
  }

  export async function POST(req: NextRequest) {
    try {
      await connectMongo();
  
      const { name, email, salary, dob, status } = await req.json();
      const newUser = await Users.create({ name, email, salary, dob, status });
  
      return NextResponse.json(newUser);
    } catch (error) {
      console.error("Error adding employee:", error);
      return NextResponse.json({ message: "Failed to add employee" }, { status: 500 });
    }
  }