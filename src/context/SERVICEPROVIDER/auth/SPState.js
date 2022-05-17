import SPContext from "./SPContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SPState = (props) => {
    const navigate = useNavigate();
    const host = process.env.REACT_APP_SERVER_URL;
    const [SPdata, setSPdata] = useState([]);


    const storeData = async () => {
        const response = await fetch(`${host}/api/auth/serviceProvider/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('SPtoken')
            }
        })
        const json = await response.json();
        // console.log(json);
        if (json.type=="SP") {
            setSPdata(json);
        } else {
            logout();
            // warning alert
        }
    }



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
            localStorage.setItem('SPtoken', json.authToken);
            storeData();
            navigate("/");
        } else {
            return json;
        }

    }
    const signup = async (owner_name,email, organization_name, address, password) => {
        console.log(owner_name,email, organization_name, address, password);
        const response = await fetch(`${host}/api/auth/serviceProvider/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ owner_name,email, organization_name, address, password })
        })
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // redirect to home page
            localStorage.setItem('SPtoken', json.authToken);
            storeData();
            navigate("/");
        } else {
            return json
        }
    }
    const logout = ()=>{
        localStorage.clear();
        setSPdata([]);
    }

    return (
        <SPContext.Provider value={{ login, SPdata, storeData, logout, signup }}>
            {props.children}
        </SPContext.Provider>
    )
}
export default SPState;