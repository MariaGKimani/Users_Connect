import React,{useState, useEffect} from "react";
import { addUsers, fetchUsers } from "../../Utilities/utils";
import  "./style.css";

const Userlist = () =>{
    const [users,setUsers] = useState([]);
    const [newUser, setNewUser] = useState({name: "",username: "",email:"",phone: "",company: "",address:""})


    useEffect(()=>{
        fetchUsers()
        .then((data)=>{ 
            setUsers(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const handleAddUser = (e) =>{
      e.preventDefault();
      addUsers(newUser)
      .then((response) =>{
        setUsers([...users, response]);
        setNewUser({ name: "", username: "", email: "",phone: "",company: "",address:""});
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

            </li>
          ))}
        </ul>
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
        </div>
    )
          }

export  default Userlist
            