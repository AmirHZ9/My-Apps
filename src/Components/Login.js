import React , { useEffect, useState } from 'react';
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
                <div>
                <form>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={data.email} onChange={changehandler} onFocus={focushandler}/>
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={data.password} onChange={changehandler} onFocus={focushandler}/>
                        {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>
                  
                    <div>
                        <label>Accept privacy and policy</label>
                        <input type="checkbox" name="checkbox" value={data.checkbox} onChange={changehandler} onFocus={focushandler}/>
                        {errors.checkbox && touched.checkbox && <span>{errors.checkbox}</span>}
                    </div>
                        <Link to="/SignUp">SignUp</Link>
                        <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;