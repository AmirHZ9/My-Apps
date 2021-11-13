import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { validate } from './validate';
import styles from "../Styles/signup.module.css"
const SignUpForm = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:'',
        checkbox:false

    })
    const [errors, setErrors] = useState({})
    const [touched, settouched] =useState({})
    useEffect(() => {
        setErrors(validate(data,"signup"))
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
                        <label>Name</label>
                        <input type="text" name="name" value={data.name}  onChange={changehandler} onFocus={focushandler}/>
                        {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>
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
                    <div className={styles.item}>
                        <label>Confirm-password</label>
                        <input type="password" name="confirmpassword" value={data.confirmpassword} onChange={changehandler} onFocus={focushandler}/>
                        {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}
                    </div>
                    <div className={styles.checkbox}>
                        <div className={styles.checkboxlabel}>
                        <label>Accept privacy and policy</label>
                        <input type="checkbox" name="checkbox" value={data.checkbox} onChange={changehandler} onFocus={focushandler}/>
                        </div>
                        {errors.checkbox && touched.checkbox && <span>{errors.checkbox}</span>}
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/Login">Login</Link>
                        <button>SignUp</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;