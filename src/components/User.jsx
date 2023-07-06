'use client'

import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setUsers(data.results);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          {user.name.first} {user.name.last}
        </div>
      ))}
    </div>
  );
};

export default FetchData;