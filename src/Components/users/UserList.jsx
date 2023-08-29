import React,{useState, useEffect} from "react";
import { fetchUsers } from "../../Utilities/utils";
import  "./style.css";

const Userlist = () =>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetchUsers()
        .then((data)=>{
            setUsers(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

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
        </div>
    )
          }

export  default Userlist
            