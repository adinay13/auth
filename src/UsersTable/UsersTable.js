import React from 'react';
import {useSelector} from "react-redux";

const UsersTable = () => {
    const currentUser = useSelector((state)=> state.signIn)
    console.log(currentUser)
    return (
        <div>
            <h2>users page</h2>


        </div>
    );
};

export default UsersTable;