import connectMongo from "@/app/Database/connection";
import Users from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectMongo();
    const id = req.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await Users.findById(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return NextResponse.json(
      { message: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectMongo();
    const id = req.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }
    const updatedData = await req.json();
    const user = await Users.findByIdAndUpdate(id, updatedData, { new: true });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectMongo();
    const id = req.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }
    const user = await Users.findByIdAndDelete(id);
    
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 }
    );
  }
}
