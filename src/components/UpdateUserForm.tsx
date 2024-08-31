"use client"
import { useReducer } from "react";
import { toast } from 'react-hot-toast';

const FormReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function UpdateUserForm() {
  const [formData, setFormData] = useReducer(FormReducer, {});
  
    const handleSubmit = ()=>{
    if(Object.keys(formData).length === 0) 
        return toast.error("Form is empty");
        
    console.log(formData,"data");

    }
    
     return (
    <>
      <form className="grid lg:grid-cols-2 gap-4 w-4/6 mx-auto p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            type="text"
            name="firstname"
            onChange={setFormData}
            placeholder="First Name"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={setFormData}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="input-type">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={setFormData}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="input-type">
          <input
            type="date"
            name="dob"
            onChange={setFormData}
            placeholder="Date Of Birth"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="input-type lg:col-span-2">
          <div className="flex gap-5">
            <div className="form-check flex items-center">
              <input
                type="radio"
                value="Active"
                id="radioDefault1"
                name="status"
                onChange={setFormData}
                className="form-check-input rounded-full h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="radioDefault1" className="ml-2 text-gray-800">
                Active
              </label>
            </div>
            <div className="form-check flex items-center">
              <input
                type="radio"
                value="InActive"
                id="radioDefault2"
                onChange={setFormData}
                name="status"
                className="form-check-input rounded-full h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="radioDefault2" className="ml-2 text-gray-800">
                Inactive
              </label>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <button
            type="submit"
            className="text-md w-full lg:w-2/6 px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}
