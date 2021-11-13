import React , { useEffect, useState } from 'react';
import styles from "../Styles/signup.module.css"
import {Link} from "react-router-dom"
import { validate } from './validate';
const Login = () => {
    const [data, setData] = useState({

        email:"",
        password:"",

        checkbox:false

    })
    const [errors, setErrors] = useState({})
    const [touched, settouched] =useState({})
    useEffect(() => {
        setErrors(validate(data,"login"))
    } ,[data])

    const changehandler = event => {
        if(event.target.name === "checkbox"){
            setData({...data,[event.target.name]:event.target.checked})
        }else{
            setData({...data, [event.target.name]:event.target.value})
        }
    }
    const focushandler = (event) => {
        settouched({...touched, [event.target.name]:true})
    }
    return (
        <div>
                <div className={styles.container}>
                <form>
                    <div className={styles.item}>
                        <label>Email</label>
                        <input type="text" name="email" value={data.email} onChange={changehandler} onFocus={focushandler}/>
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                    <div className={styles.item}>
                        <label>Password</label>
                        <input type="password" name="password" value={data.password} onChange={changehandler} onFocus={focushandler}/>
                        {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>
                  
                     <div className={styles.checkbox}>
                        <div className={styles.checkboxlabel}>
                        <label>Accept privacy and policy</label>
                        <input type="checkbox" name="checkbox" value={data.checkbox} onChange={changehandler} onFocus={focushandler}/>
                        </div>
                        {errors.checkbox && touched.checkbox && <span>{errors.checkbox}</span>}
                    </div>
                    <div className={styles.buttons }>
                        <Link to="/SignUp">SignUp</Link>
                        <button>Login</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;