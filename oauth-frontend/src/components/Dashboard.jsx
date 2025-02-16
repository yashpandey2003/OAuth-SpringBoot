import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:8080/user-info', {withCredentials: true})
        .then(response=>{
            setUser(response.data);
        })
    }, []);
  return (
    <div>
        <h2>Dashboard</h2>
        {user ?(
        <div>
            <p><strong>Name:</strong>{user.name}</p>
            <p><strong>Email:</strong>{user.email}</p>
        </div>
        ) :(
            <p>Loading user data...</p>
        )}
    </div>
  )
}

export default Dashboard