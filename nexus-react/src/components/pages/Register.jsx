import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./Style.css";
import { login_image } from "../../utils/images";

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data
        try{
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login Successful. Welcome!')
                navigate('/login')
            }
        }catch (error) {
            console.log(error)
        }
    }

  return (
    <section
        className="section sc-register d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${login_image}) center/cover no-repeat`,
        }}
      >
    <div className="wrapper">
        <form onSubmit={registerUser}>
        <h1>Register</h1>
            <div className="input-box">
            <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
            <FaUser className="icon"/>
            </div>
            <div className="input-box">
            <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            <FaEnvelope className="icon"/>
            </div>
            <div className="input-box">
            <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            <FaLock className="icon"/>
            </div>
            <button type='submit'>Submit</button>
            <div className="register-link">
            <p>Already have an account?<a href="/login">Login</a></p>
            </div>
        </form>
    </div>
    </section>
  )
}
