import React from 'react'
import { auth} from '../Firebase/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
 

  let navigate = useNavigate();
   // sign out function    
 const signUserOut = async () => {
    await signOut(auth);   
    navigate('/');
  };
  return (
    <div>
      <h1>You have successfully logged in</h1>
       <br/>
       <br/>
       <button onClick={signUserOut} >Log Out</button>
    </div>
    
  )
}

export default Dashboard