import { Paper } from '@material-ui/core'
import React from 'react'
import HumanAvatar from './images/human.png'
import RobotAvatar from './images/robot.png'
import "./settings.css"

const Settings = props => {
    return <div>
        <p>Voice preference</p>
        
        <Paper className="row">
            <div>TEMP CIRCLE</div>
            <p>Robot</p>
        </Paper>

        <Paper className="row">
            <div>TEMP CIRCLE</div>
            <p>Mary</p>
        </Paper>

        <Paper className="row">
            <div>TEMP CIRCLE</div>
            <p>Tom</p>
        </Paper>

        <p>Voice preference</p>
        <div className="row">
            <img src={HumanAvatar}/>
            <img src={RobotAvatar}/>
        </div>
    </div>
}

export default Settings