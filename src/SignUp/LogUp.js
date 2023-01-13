import React, {useState} from 'react';
import S from './SignUp.module.css'
import {useDispatch} from "react-redux";
import {SignUp} from "../api/auth";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LogUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        // dispatch(SignUp({email: email,password: password, name: name, age: age}))
        axios.post('https://users-auth-api.onrender.com/api/signup', {email, password, name, age}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => navigate("/"))
    }
    return (
        <div className={S.box}>
            <div className={S.form}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className={S.inputBox}>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required="required"/>
                        <span>E-mail</span>
                        <i></i>
                    </div>
                    <div className={S.inputBox}>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required="required" minLength={8}/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className={S.inputBox}>
                        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" required="required" />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className={S.inputBox}>
                        <input onChange={(e)=>setAge(e.target.value)} value={age} type="number" required="required" />
                        <span>Age</span>
                        <i></i>
                    </div>
                    <button className={S.btnn} type="submit">Log Up</button>
                </form>
            </div>

        </div>
    );
};

export default LogUp;