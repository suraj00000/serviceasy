import SPContext from "./SPContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SPState = (props) => {
    const navigate = useNavigate();
    const host = process.env.REACT_APP_SERVER_URL;
    const login = async (email, password) => {
        const response = await fetch(`${host}/api/auth/serviceProvider/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        if (json.success) {
            console.log(json);
            localStorage.setItem('SPtoken', json.authToken);
            navigate("/SPhome");
        } else {
            // warning alert
        }

    }
    
    return (
        <SPContext.Provider value={{ login }}>
            {props.children}
        </SPContext.Provider>
    )
}
export default SPState;