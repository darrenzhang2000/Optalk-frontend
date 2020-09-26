import { Paper } from '@material-ui/core'
import React from 'react'
import "./account.css"
import Skype from './images/skype.png'
import MST from './images/microsoft-teams.png'
import GoogleMeet from './images/google-meet.png'
import Back from './images/back.png'

const Account = props => {
    return <div className="root">

        <div className="row">
            <img src={Back}/>
            <p>Linked Accounts</p>
        </div>

        <Paper className="row">
            <img src={Skype} className="img" />
            <p>Skype</p>
        </Paper>

        <Paper className="row">
            <img src={MST} className="img" />
            <p>Microsoft Teams</p>
        </Paper>

        <Paper className="row">
            <img src={GoogleMeet} className="img" />
            <p>Google Meet</p>
        </Paper>

        <button>Add New Accounts</button>

    </div>
}

export default Account