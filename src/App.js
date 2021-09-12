import React, { useEffect, useState } from 'react'
import './App.css';
import Users from './Users';
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  const getUser = async () => {
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data);
    setUsers(res.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <h2 className="heading">List of Github Users Using API</h2>
      <h4 className="subtitle">Source : https://api.github.com/users</h4>

      <div className="container mt-2">
        <div className="row">
          {
            users?.map((user, i) => (
              <div key={i} className="col-4">
                <Users user={user} />
              </div>
            ))
          }


        </div>
      </div>

    </div>
  );
}

export default App;
