import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserState = (props) => {
    const navigate = useNavigate();
    const host = process.env.REACT_APP_SERVER_URL;

    const [userData, setuserData] = useState([]);

    const storeData = async()=>{
        const token = localStorage.getItem('token');
        // console.log(token);
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':token
            }
        })
        const json = await response.json();
        console.log(json);
        if (json.name) {
            setuserData(json);
        } else {
            // warning alert
        }
    }

    const signup = async (name, email, phone, password,) => {
        console.log(name, email, phone, password);
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, password })
        })
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // redirect to home page
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('type', 'user');
            storeData();
            navigate("/");
        } else {
            // warning alert
        }
    }

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
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('type', 'user');
            storeData();
            navigate("/");
        } else {
            // warning alert
        }
    }
    const logout = () => {
        console.log("Logout");
        localStorage.clear();
        setuserData([]);
    }

    return (
        <UserContext.Provider value={{ login, signup, logout, userData,storeData}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
