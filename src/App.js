import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [userData, setUserData] = useState([]);

  const getFecthData = async () => {
    const data = await axios.get(
      'https://random-data-api.com/api/v2/users?size=15&is_xml=true'
    );
    setUserData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getFecthData();
  }, []);
  // first name, last name, email address and the subscription
  return (
    <div>
      <table>
        <tr className="tableHeader">
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>EmailID</th>
          <th>SubcriptionPlan</th>
        </tr>
        {userData.map((user) => {
          return (
            <tr className="tableHeader">
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.subscription.plan}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
