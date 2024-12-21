import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = (props) => {
  const { _id, name, gmail, age, address } = props.user || {}; // Ensure props.user exists
  const history = useNavigate();

  const deleteHandler = async ()=> {
   await axios.delete(`http//localhost:5000/user/${_id}`)
   .then(res=>res.data)
   .then(() =>history("/"))
   .then(()=>history("/userdetails"))
  }
  
  return (
    <div>
      <h1>User Display</h1>
      <h2>ID: {_id || "Not Available"}</h2>
      <h2>Name: {name || "Not Available"}</h2>
      <h2>Gmail: {gmail || "Not Available"}</h2>
      <h2>Age: {age || "Not Available"}</h2>
      <h2>Address: {address || "Not Available"}</h2>
      
      {/* Use Link for navigation */}
      <Link to={`/userDetails/${_id}`}>
        <button>View Details</button>
      </Link>
      <button>Update</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default AddUser;
