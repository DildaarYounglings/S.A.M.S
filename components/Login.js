import '../components/Login.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import shesha from './images/shesha.png';
import sheshalogin from './images/sheshalogin.png';



const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();



    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            //implentation
            // console.log('proceed');
            fetch("https://zero1-june-2023-test-shesha-backend.onrender.com/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        usenavigate('/home')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let results = true;
        if (username === '' || username === null) {
            results = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            results = false;
            toast.warning('Please Enter Password');
        }
        return results;
    }
    return (


        <div className="container0">
            <img src={sheshalogin} alt="sheshalogin.png" className="image2" style={{position:"relative", left:"50%", width: "50%",  top: "-1px",height: "650px",}} />

            <form onSubmit={ProceedLogin} className="form1">
                <img src={shesha} alt="shesha.png" style={{position:"relative", left:"2%",top: "15px",}}/>

                <div>
                    <div>

                        <h2> Login</h2>
                    </div>
                    <div className="row1">
                        <div className="form-group">
                            <input type="text" placeholder="Username" value={username} onChange={e => usernameupdate(e.target.value)} ></input>

                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Password" value={password} onChange={e => passwordupdate(e.target.value)} className="input1" ></input>
                        </div>

                        <div>
                            <p><Link className="text" to={'/forgot'} style={{position:"relative", left:"43%",}}>Forgot Password</Link></p>
                            <button type="submit" className="login">Login</button>

                            <p className="p1" style={{position:"relative", top:"290px",}}><Link className="text" to={'/register'}><span>Don't have an account?</span></Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>



    );
}

export default Login;