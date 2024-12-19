import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import User from '../User/User'; // Ensure this import exists and points to the correct file.

const URL = "http://localhost:5000/users";

// Function to fetch data from API
const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { users: [] }; // Return an empty array in case of error.
  }
};

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users || [])); // Handle undefined `data.users`.
  }, []);

  return (
    <div>
      <Nav />
      <h1>User Display</h1>
      <div>
        {users.length > 0 ? (
          users.map((user, i) => (
            <div key={i}> {/* Use a unique identifier instead of `i` if possible */}
              <User user={user} />
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
