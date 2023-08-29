import axios from "axios";

export const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  //add users
export const addUsers = async(newUser) =>{
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser)
        return response.data;
    }
    catch(error) {
        console.log(error);
        return [];
    }
}  