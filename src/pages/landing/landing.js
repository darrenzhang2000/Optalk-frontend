import { Button } from '@material-ui/core'
import React, {useState} from 'react'
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

    </div>
}

export default Landing