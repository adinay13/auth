import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import user from "./Users.module.css"
import {getAllUsers} from "../api/users";

const UsersTable = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.signIn.user)
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    const allUsers = useSelector(state => state.users.data)
    console.log(allUsers)

    return (
        <>
            <div className={user.page}>
                <div className={user.text}><h2>users page</h2></div>
                {allUsers.map((user)=>(
                    <ul>
                        <li className={user.item} key={user.id}> <span>name:</span> {user.name} <span>age:</span> {user.age} <span>email:</span> {user.email}</li>

                    </ul>
                ))}



            </div>
        </>
    );
};

export default UsersTable;