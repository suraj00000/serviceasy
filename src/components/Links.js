import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import SPContext from '../context/SERVICEPROVIDER/auth/SPContext';
import UserContext from '../context/USER/auth/UserContext';

const Links = (props) => {
    const userContext = useContext(UserContext);
    const sPContext = useContext(SPContext);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            userContext.storeData();
            console.log("Data stored");
        }
        if(localStorage.getItem('SPtoken') ){
            sPContext.storeData();
        }
    }, [])


    if (userContext.userData.type=='user') {
        return (
            <ul className="navbar-nav  mb-2 mb-lg-0 ml-5">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {userContext.userData.name}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><Link className="dropdown-item" to="#">Orders</Link></li>
                        <li><Link className="dropdown-item" to="#">Fav</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-danger" onClick={userContext.logout} to="#">Logout</Link></li>
                        {/* <li><Link className="dropdown-item text-danger" onClick={userContext.logout} to="#">Logout</Link></li> */}
                    </ul>
                </li>
            </ul>
        );
    } else if (sPContext.SPdata.type=='SP') {
        return (
            <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/#">
                        Earning
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/#">
                        Orders
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {sPContext.SPdata.organization_name}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><Link className="dropdown-item" to="#">Orders</Link></li>
                        <li><Link className="dropdown-item" to="#">Fav</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-danger" onClick={sPContext.logout} to="#">Logout</Link></li>
                        {/* <li><Link className="dropdown-item text-danger" onClick={userContext.logout} to="#">Logout</Link></li> */}
                    </ul>
                </li>
            </ul>
        )

    }
    return (
        <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">
                    Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/SPlogin">
                    Become a partner
                </Link>
            </li>
        </ul>
    )
}

export default Links