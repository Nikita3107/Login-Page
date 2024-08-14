// UserList.js
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch
    setTimeout(() => {
      setUsers(["User1", "User2", "User3"]);
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
