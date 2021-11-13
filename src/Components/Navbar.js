import React from 'react';
import styles from "../Styles/navbar.module.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <div className={styles.container}>
                <ul>
                   <Link to="/Calculater"><li>Calculater</li></Link> 
                   <Link to="/Weather"><li>Weather App</li></Link> 
                   <Link to="/TodoApp"><li>todo app</li></Link> 
                   <Link to="/Signup"><li>SignUp</li></Link> 
                   
                </ul>
            </div>
        </div>
    );
};

export default Navbar;