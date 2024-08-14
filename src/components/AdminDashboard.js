import React, { useState } from 'react'
import DashboardCount from './DashboardCount';
import UserList from './UserList';

const AdminDashboard = () => {
    const[selectTab , setSelectTab]=useState('dashboard');

  return (
    <>
    <h2>AdminDashboard</h2>
    <div>
        <button onClick={()=>setSelectTab('dashboard')}>Dashboard Count</button>
        <button onClick={()=>setSelectTab('userlist')}>User List</button>
        </div>
        {selectTab==='dashboard'&&<DashboardCount/>}
        {selectTab==='userlist'&&<UserList/>}

    </>
  )
}

export default AdminDashboard