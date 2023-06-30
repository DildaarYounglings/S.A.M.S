import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase/firebase';

const initialState = {
  districtCode: '',
  municipalId: '',
  password: '',
  email: ''
}

const SignUp = () => {
  const [data, setData] = useState(initialState);

  const {districtCode ,municipalId ,password, email} = data;

  let navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setData({...data});
  

    if (!email || !districtCode ||  !municipalId || !password ) {
       return alert('All fields are mandatory!')
    }
      try {              
      const admin = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); 
                   
      await setDoc(doc(db, "Admin", admin.user.uid), {
        uid: admin.user.uid,
        email,      
        municipalId,
        districtCode
      });
      setData({
        email: "",
        password: "", 
        municipalId: "",
        districtCode: ""            
      });    
          
      //  Signing user out
       await signOut(auth);   
        // email verification
     await sendEmailVerification(admin.user)
       alert('Verify your email in order to log in!');
                           
    } catch(err) {
      return alert('Account already exists!!')
    }
    navigate('/')
  };
 

  return (
  <div>
    <h1>SignUp</h1>
    <div class="card " style={{width:'20rem',backgroundColor:'white',marginLeft:'40%',height:'520px',borderRadius:'13px'}}>
       <div class="card-body">
        <h5 class="card-title">
          <img src='https://www.thesouthafrican.com/wp-content/uploads/2020/08/0b33ad49-coat-of-arms-south-africa-2.jpg' alt='img' style={{width:'100px'}}/>
        </h5>
       <h2 class="card-subtitle mb-2 text-body-secondary" style={{fontSize:'30px'}}>South African Municipal Service</h2>

    <div class="card-text">
      <form  onSubmit={handleSignUp}>
        <input 
           type="email"
           name='email'
           value={email}
           onChange={handleChange}
           placeholder='Email'          
           />

       <input 
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
         /> 

        <input 
         name='password'
         type='password'
         value={password}
         onChange={handleChange} 
         placeholder='Password'        
         />
         <br/>
         <br/>
      <button style={{color:'white',backgroundColor:'black',width:'200px',height:'50px',borderRadius:'13px'}} type='submit'>SignUp</button>
    </form>
    <Link to='/'>
      To Login
    </Link>
    </div>
   
  </div>
</div>
</div> 
   
  )
}

export default SignUp;
