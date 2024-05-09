import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { FaUser, FaLock } from "react-icons/fa";
import "./Style.css";
import { login_image } from "../../utils/images";

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data
        try {
          const {data} = await axios.post('/login', {
            email,
            password
          });
          if(data.error) {
            toast.error(data.error)
          } else {
            setData({});
            navigate('/')
          }
        } catch (error) {
          
        }
    }

  return (
    <section
        className="section sc-login d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${login_image}) center/cover no-repeat`,
        }}
      >
    <div className="wrapper">
      <form onSubmit={loginUser}>
        <h1>Login</h1>
        <div className="input-box">
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <FaUser className="icon"/>
        </div>
        <div className="input-box">
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="login-link">
          <p>Don't have an account?<a href="/register">Register</a></p>
        </div>
      </form>
    </div>
    </section>
  )
}

