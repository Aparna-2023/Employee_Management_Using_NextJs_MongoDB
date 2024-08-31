"use client";
import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

export default function Form() {
  const flag = true
  return (
    <>
    {flag ? <AddUserForm></AddUserForm> : <UpdateUserForm></UpdateUserForm>}
  
    </>
  );
}
