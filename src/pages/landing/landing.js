import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import SignIn from '../../component/signin/signin'
import Signup from '../../component/signup/signup'
import Logo from './images/logo.png'
import "./landing.css"

const Landing = props => {
    // login or sign up page
    const [onLogin, setOnLogin] = useState(true) 

    return <div>
        <img src={Logo}/>
        <div className="login-signup">
            <Button onClick={()=>setOnLogin(true)}>Login</Button>
            <Button onClick={()=>setOnLogin(false)}>Sign Up</Button>
        </div>
        {onLogin ? <SignIn/> : <Signup/>}
    </div>
}

export default Landing