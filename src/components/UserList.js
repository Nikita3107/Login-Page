import React, { useEffect, useState } from 'react'

const UserList = () => {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState('true');
    const[error,setError]=useState('null');

    useEffect=(()=>{
        fetch('https://mmfinfotech.co/machine_test/api/userList?page=1')
        .then((response)=>response.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false)
        })
        .catch((error)=>{
            setError('failed to fetch user')
            setLoading(false)
        })
    },[])

    if(loading)return<p>Loading...</p>
    if(error)return<p style={{color:'red'}}>{error}</p>

  return (
    <div>UserList</div>
  )
}

export default UserList