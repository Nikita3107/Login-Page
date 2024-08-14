import React, { useState } from 'react'

const SignUp = ({onSignUpSuccess }) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[phone,setPhone]=useState('');
    const[error,setError]=useState('');

    const handleSignUp=()=>{
        if(!email||!password||!phone){
            setError("All fields are required")
            return;
        }
        onSignUpSuccess()
    }
  return (
    <>
    <h2>SignUp</h2>
    <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    <input type='phone' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
<button onClick={handleSignUp}>SignUp</button>
{error && <p style={{color:'red'}}>{error}</p>}
    </>
  )
}

export default SignUp