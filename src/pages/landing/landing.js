import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import SignIn from '../../component/signin/signin'
import Signup from '../../component/signup/signup'
import Logo from './images/logo.png'
import "./landing.css"

const Landing = props => {
    // login or sign up page
    const [onLogin, setOnLogin] = useState(true) 
    

    return <div className="auth">
        <img src={Logo}/>
        <div className="login-signup">
            <button className={onLogin ? "on-focus" : "off-focus"} onClick={()=>setOnLogin(true)}><p className="word">Login</p></button>
            <button className={!onLogin ? "on-focus" : "off-focus"} onClick={()=>setOnLogin(false)}>Sign Up</button>
        </div>
        {onLogin ? <SignIn/> : <Signup/>}
    </div>
}

export default Landing