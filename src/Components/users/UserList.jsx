import React,{useState, useEffect} from "react";
import { addUsers, deleteUsers, fetchUsers, updateUser } from "../../Utilities/utils";
import  "./style.css";


const deleteUserList = (users,id) =>{
  return users.filter((user) => user.id !== id);
};
const updateUsersList = (users, updatedUser) => {
  return users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
};


const Userlist = () =>{
    const [users,setUsers] = useState([]);
    const [newUser, setNewUser] = useState({name: "",username: "",email:"",phone: "",company: "",address:""})
    const [editingUser, setEditingUser] = useState(null);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);


    useEffect(()=>{
      setLoading(true);
        fetchUsers()
        .then((data)=>{ 
            setUsers(data);
        })
        .catch((err)=>{
            console.log(err);
        }) .finally(() => {
          setLoading(false); 
        });

    },[])

    const handleAddUser = (e) =>{
      e.preventDefault();
      setLoading(true);
      addUsers(newUser)
      .then((response) =>{
        setUsers([...users, response]);
        setNewUser({ name: "", username: "", email: "",phone: "",company: "",address:""});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); 
      });
      
  };
  const handleDeleteUser = (id) =>{
    setLoading(true);
    deleteUsers(id)
    .then(() =>{
      setUsers(deleteUserList(users,id))
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const updatedUserData = {
      id: editingUser.id,
      name: e.target.name.value,
      username: e.target.username.value,
      email: editingUser.email,
      phone: editingUser.phone,
      company: {
        name: e.target.company.value,  
      },
      address: {
        street: e.target.address.value, 
      },
    };

    updateUser(editingUser.id, updatedUserData)
      .then((updatedUser) => {
        setUsers(updateUsersList(users, updatedUser));
        setEditingUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <div className="user-list">
        <h1 className="title">User Management</h1>
        <ul className="user-ul">
          <li className="user-heading">
            <p className="user-info">Name</p>
            <p className="user-info">Username</p>
            <p className="user-info">email</p>
            <p className="user-info">Phone number</p>
            <p className="user-info">Company</p>
            <p className="user-info">Street</p>        
            <p className="user-actions">Actions</p>
          </li>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-info">
                <span className="user-name">{user.name}</span>
              </div>
              <div className="user-info">
                <span className="user-username">{user.username}</span>
              </div>
              <div className="user-info">
                <span className="user-username">{user.email}</span>
              </div>
              <div className="user-info">
                <span className="user-username">{user.phone}</span>
              </div>
              <div className="user-info">
                <span className="user-username">{user.company.name}</span>
              </div>  
              <div className="user-info">
                <span className="user-">{user.address.street}</span>
              </div>
              <div className="user-actions">
              <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <button className="edit-button" onClick={() => handleEditUser(user)}>Edit</button>
              </div>

             
            </li>
          ))}
        </ul>
        {editingUser && (
         <form onSubmit={handleUpdateUser} className="edit-form">
         <div className="form-group">
           <label htmlFor="name">Name:</label>
           <input type="text" name="name" id="name" defaultValue={editingUser.name} className="form-input" />
         </div>
         <div className="form-group">
           <label htmlFor="username">Username:</label>
           <input type="text" name="username" id="username" defaultValue={editingUser.username} className="form-input" />
         </div>
         <div className="form-group">
           <label htmlFor="company">Company:</label>
           <input type="text" name="company" id="company" defaultValue={editingUser.company.name} className="form-input" />
         </div>
         <div className="form-group">
           <label htmlFor="address">Address:</label>
           <input type="text" name="address" id="address" defaultValue={editingUser.address.street} className="form-input" />
         </div>
         <button type="submit" className="update-button">Update</button>
       </form>
       
        )}
        <form  onSubmit={handleAddUser} className="add-form">
          <h2 className="addh2">Add user Form</h2>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
           <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
          <input 
          type="text" 
          name="name" 
          placeholder="email" 
          value={newUser.email} 
          onChange={(e) => setNewUser({...newUser,email: e.target.value})}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          />
          <input
            type="text"
            name="name"
            placeholder="company"
            value={newUser.company}
            onChange={(e) => setNewUser({ ...newUser, company: e.target.value })}
          />
             <input
            type="text"
            name="company"
            placeholder="adress"
            value={newUser.address}
            onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
          />
  
         <input type="submit" value="Add User" className="add-button" />
        </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
        </div>
    )
          }

export  default Userlist