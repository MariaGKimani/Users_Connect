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

// delete users

export const deleteUsers = async(id) =>{
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
    catch(error){
      console.log(error);
}
};

//update user

export const updateUser = async (id, updatedUserData) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUserData);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error updating user");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
