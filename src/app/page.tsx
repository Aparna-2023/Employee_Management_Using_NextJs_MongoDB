"use client"
import Form from "@/components/form";
import Table from "@/components/table";
import { useState } from "react";
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
const[addEmployee,setAddEmployee] = useState(false)

 const handleClick = ()=>{
  setAddEmployee(!addEmployee)
 }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl font-bold">Employee Management</h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:border-indigo-500 hover:text-gray-800" 
            onClick={handleClick}
            >
            {" "} 
            Add Employee <BiUserPlus size={23} />
          </button>
        </div>
      </div>

      {/* form */}
      <div className="container">
       {addEmployee ? <Form></Form> : <></>} 
      </div>
      
      {/* Listing */}
      <div className="container mx-auto">
        <Table></Table>
      </div>
    </main>
  );
}
