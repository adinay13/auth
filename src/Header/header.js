import React from 'react';
import S from './header.module.css'
import {useSelector} from "react-redux";
const Header = () => {
    const currentUser = useSelector(state => state.signIn.user)

    return (
        <div className={S.header}>
            <h2>Users Table</h2>
            {currentUser ? (<div className={S.text}>Hello, {currentUser.name}</div>
            ):(null)}
        </div>
    );
};

export default Header;