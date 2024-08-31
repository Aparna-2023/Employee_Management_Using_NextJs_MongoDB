"use client"
import { BiEdit, BiTrash } from "react-icons/bi";
import data from "../database/data.json";
import { getUsers } from "@/Api/CommonApi";
import { useQuery } from "react-query";

export default function Table() {

const {isLoading,isError,data,error} = useQuery("alluser",getUsers)

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Date Of Birth</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data?.map((obj: any,index: number)=><Tr {...obj} key={index}/>)}
      </tbody>
    </table>
  );
}
function Tr({ id, name, email, salary, status, dob }: {
  id: number;
  name: string;
  email: string;
  salary: number;
  status: string;
  dob: string;
}){
  return (
    <tr>
      <td className="px-16 py-2">
        <span>{name}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary}</span>
      </td>
      <td className="px-16 py-2">
        <span>{dob}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
        <span className={`${status== "Active" ? "bg-green-500": "bg-rose-500" } text-white px-5 py-1 rounded-full`}>
            {status}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button className="cursor">
          <BiTrash size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}
