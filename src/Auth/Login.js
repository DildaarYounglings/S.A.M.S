import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth} from '../Firebase/firebase';
import { sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const initialState = {
  email: '',
  password: ''
}

const Login = () => {

  const [data, setData] = useState(initialState);
    
  const navigate = useNavigate();

  const { email, password} = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e, id) => {
    e.preventDefault();      
    setData({...data})
    if (!email || !password) {
       return alert('All fields are mandatory!');
    }
      try {                 
      const admin = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
                   
        // email verification
        if(admin.user.emailVerified) {
           alert('Email has been verified !');
         
        setData({
          email: "",
          password: "", 
        });

      }else{
        alert('Email not verified !');

        // checking verification
        await sendEmailVerification(auth);
        // signing user out
        await signOut(auth);                     
      }
         
    } catch(err) {
        return alert('Account not found.');
       }
       navigate('/dash')
  };


  return (
  <div className='App'>
    <h1>Login</h1>
    <div class="card " style={{width:'20rem',backgroundColor:'white',marginLeft:'40%',height:'420px',borderRadius:'13px'}}>
       <div class="card-body">
        <h5 class="card-title">
          <img src='https://www.thesouthafrican.com/wp-content/uploads/2020/08/0b33ad49-coat-of-arms-south-africa-2.jpg' alt='img' style={{width:'100px'}}/>
        </h5>
       <h2 class="card-subtitle mb-2 text-body-secondary">South African Municipal Service</h2>

    <div class="card-text">
      <form  onSubmit={handleLogin}>
        <input 
           type="email"
           name='email'
           value={email}
           onChange={handleChange}
           placeholder='Email'         
           />

    {/* <input 
          type="text"
          name='districtCode'
          value={districtCode}
          onChange={handleChange}
          placeholder='District Code'
          />

        <input 
           type="text"
           name='municipleId'
           value={municipalId}
           onChange={handleChange}
           placeholder='Municiple ID'
         /> */}

        <input 
         name='password'
         type='password'
         value={password}
         onChange={handleChange} 
         placeholder='Password'        
         />
         <br/>
         <br/>
      <button style={{color:'white',backgroundColor:'black',width:'200px',height:'50px',borderRadius:'13px'}} type='submit'>Login</button>
    </form>
    <Link to='/signup'>
      To SignUp
    </Link>
    </div>
   
  </div>
</div>
    
  </div>
    
  )
}

export default Login;