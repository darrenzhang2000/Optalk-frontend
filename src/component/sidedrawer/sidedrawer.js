import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CancelIcon from '@material-ui/icons/Cancel';
import "./sidedrawer.css"

const Sidedrawer = props => {
    return <div>
        <div className="row">
            <AccountCircle/>
            <p>Account</p>
        </div>

        <div className="row">
            <PeopleAltIcon/>
            <p>Switch Account</p>
        </div>

        <div className="row">
            <HelpOutlineIcon/>
            <p>Help</p>
        </div>

        <div className="row">
            <ExitToAppIcon/>
            <p>Logout</p>
        </div>

        <CancelIcon/>
    </div>
}

export default Sidedrawer 