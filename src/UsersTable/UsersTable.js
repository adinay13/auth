import React from 'react';
import {useSelector} from "react-redux";
import user from "./Users.module.css"

const UsersTable = () => {
    const currentUser = useSelector(state => state.signIn.user)
    console.log(currentUser)

    return (
        <div className={user.page}>
            <div className={user.text}><h2>users page</h2></div>
            <div className={user.text}>Email: {currentUser.email}</div>
            <div className={user.text}>Name: {currentUser.name}</div>
            <div className={user.text}>Age: {currentUser.age}</div>



        </div>
    );
};

export default UsersTable;