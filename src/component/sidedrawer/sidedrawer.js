import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CancelIcon from '@material-ui/icons/Cancel';
import "./sidedrawer.css"

const Sidedrawer = props => {
  return (
    <nav className="side-drawer" style={{justifyItems:'center'}}>
      <div>
        <AccountCircle style={{ color: '#FF6B00' }} /><p>Account</p>
      </div>
      <div>
        <PeopleAltIcon style={{ color: '#FF6B00' }} /><p>Switch Account</p>
      </div>

      <div>
        <HelpOutlineIcon style={{ color: '#FF6B00' }} /><p>Help</p>
      </div>
      <div>
        <ExitToAppIcon style={{ color: '#FF6B00', transform: "scaleX(-1)" }} /><p>Logout</p>
      </div>
      <br></br>
      <div class="cancel"><CancelIcon style={{ color: '#FF6B00' }} />
      </div>


    </nav>
  )
}

export default Sidedrawer 