import './Register.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import shesha from './images/shesha.png';
import shesharegister from './images/shesharegister.png';

const Register = () => {


    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in :';

        if (id === null || name === '') {
            isproceed = false;
            errormessage += ' Name ;';
        }
        if (id === null || password === '') {
            isproceed = false;
            errormessage += ' Password ;';
        }

        if (id === null || email === '') {
            isproceed = false;
            errormessage += ' Email ';
        }


        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }

    const handlesubmit = (e) => {

        e.preventDefault();
        let regob = { id, name, password, email,};
        if (isValidate()) {
            console.log(regob);

            fetch("https://zero1-june-2023-test-shesha-backend.onrender.com/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regob)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }

    }

    return (
        <div className="container3">
            <img src={shesharegister} alt="shesharegister.png" className="image1"  style={{position:"relative", left:"50%", width: "50%",top: "-1px",  height: "650px", }} />

            <form onSubmit={handlesubmit}>
                <img src={shesha} alt="shesha.png" style={{position:"relative", left:"5%",   top: "15px", }}/>

                <h2>Sign Up</h2>
                <div className="row">
                    <div className="form-group">
                        <input type="text" placeholder="Username" value={id} onChange={e => idchange(e.target.value)} className="input3" ></input>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Name" value={name} onChange={e => namechange(e.target.value)} ></input>
                    </div>

                    <div className="form-group">
                        <input type="password" placeholder="Password" value={password} onChange={e => passwordchange(e.target.value)} className='input1' ></input>
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="Email" value={email} onChange={e => emailchange(e.target.value)} className='input2' ></input>
                    </div>
                </div>
                <div>



                    <button type="submit" className="login-btn">Sign Up</button>
                    <p style={{position:"relative",left:"10%",}}> Already have an account ? <NavLink to="/Login">Log In</NavLink></p>
                </div>
            </form>
        </div>



    );
}

export default Register;