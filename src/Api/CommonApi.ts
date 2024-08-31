import API from "./Api";

export async function getUsers() {
    try {
        const response = await API.get('/users',false);
        console.log(response,'response');
        return response
    } catch (error) {
        console.error('Failed to fetch users:', error);
    }
}

export async function addUser(userData: {
    name: string;
    email: string;
    salary: number;
    dob: string;
    status: string;
  }) {
    try {
      const response = await API.post("/users", false, userData);
      return response; // Return the response data
    } catch (error) {
      console.error("Failed to add user:", error);
      throw error; // Rethrow the error for handling in the component
    }
  }