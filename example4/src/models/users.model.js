// Please don't change the pre-written code
// Import the necessary modules here
import axios from "axios";

export const userModel = async () => {
  // Write your code here
  try {
    // Fetching data from the API
    const response = await axios.get('https://dummyjson.com/users');
    // Returning only the users array
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }

};
