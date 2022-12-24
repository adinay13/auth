import React, {useState} from 'react';
import S from './SignIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {SignIn} from "../api/auth";
import {useNavigate} from "react-router-dom";
const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch
    const signIn = useSelector(state => state.signIn)
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(SignIn({email, password}))
        setEmail('')
        setPassword('')
        navigate("/logIn")
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
                        <a href="#">Forgot Password</a>
                        <a href="/logUp">Sign Up</a>
                    </div>
                    <button className={S.submit} type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default LogIn;