import React, { useEffect, useState } from 'react'

const UserList = () => {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState('true');
    const[error,setError]=useState('null');

    useEffect=()=>{
        fetch('https://mmfinfotech.co/machine_test/api/userList?page=1')
    }

  return (
    <div>UserList</div>
  )
}

export default UserList