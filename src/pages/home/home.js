import { Switch } from '@material-ui/core'
import React from 'react'
import "./home.css"
import Skype from "./images/skype.png"
import GoogleMeet from "./images/google-meet.png"
import MST from "./images/microsoft-teams.png"

const Home = props => {

    const onSubmit = () => {
    
    }

    return <div className="col root">
        <p>Active</p>

        <div className="platforms">
            <img src={Skype} />
            <img src={MST} />
            <img src={GoogleMeet} />
        </div>

        <div className="voice-change row">
            <Switch size="large" />
            <p className="text">Voice Change</p>
        </div>

        <div className="video-change row">
            <Switch />
            <p className="text">Video Change</p>
        </div>

        <button>Show more options</button>
        <div >
            <button className="button" onClick={onSubmit}>
                Apply
                </button>
        </div>
    </div>
}

export default Home