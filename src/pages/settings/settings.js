import { Paper } from '@material-ui/core'
import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import HumanAvatar from './images/human.png'
import RobotAvatar from './images/robot.png'
import "./settings.css"

const Settings = props => {
    return (
            <div className="wrapper">
                <p className="ttl">Voice preference</p>
                
                <Paper className="row">
                    <RadioButtonCheckedIcon/>
                    <p className="txt"> Robot</p>
                </Paper>

                <Paper className="row">
                <RadioButtonUncheckedIcon/>
                    <p className="txt">Mary</p>
                </Paper>

                <Paper className="row">
                <RadioButtonUncheckedIcon/>
                    <p className="txt">Tom</p>
                </Paper>

                <p className="ttl">Video preference</p>
                <div className="row">
                    <img src={HumanAvatar}/>
                    <img src={RobotAvatar}/>
                </div>
            </div>
    )
}

export default Settings