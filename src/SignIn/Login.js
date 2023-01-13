import React, {useState} from 'react';
import S from './SignIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {SignIn} from "../api/auth";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        // axios.post('https://users-auth-api.onrender.com/api/signin', {email, password}, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        dispatch(SignIn({email: email, password: password})).then(()=> navigate('/users'))
        setEmail('')
        setPassword('')
    }
    const handleMail = (e)=> setEmail(e.target.value)
    const handlePassword = (e)=> setPassword(e.target.value)
    return (
        <div className={S.box}>
            <div className={S.form}>
                <form onSubmit={handleSubmit} className={S.form}>
                    <h2>Sign In</h2>
                    <div className={S.inputBox}>
                        <input onChange={handleMail} type="email" required="required" value={email}/>
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className={S.inputBox}>
                        <input onChange={handlePassword} type="password" required="required" value={password} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className={S.links}>

                        <a href="/logUp">Sign Up</a>
                    </div>
                    <button className={S.submit} type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default LogIn;