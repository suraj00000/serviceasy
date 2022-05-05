import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserState = (props) => {
    const navigate = useNavigate();
    const host = process.env.REACT_APP_SERVER_URL;

    const login = async (email, password) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // redirect to home page
            localStorage.setItem('token', json.authToken);
            navigate("/");
        } else {
            // warning alert
        }
    }

    return (
        <UserContext.Provider value={{ login }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
