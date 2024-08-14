
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const[isAdmin,setIsAdmin]=useState(false)

  const handleLoginSuccess=()=>{
    setIsLoggedIn(true)
    setIsAdmin(true)
  }
  const handleSignUpSuccess=()=>{
    setIsLoggedIn(true)
  }
  const handleLogin=()=>{
    
  }
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
