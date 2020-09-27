import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CancelIcon from '@material-ui/icons/Cancel';
import "./sidedrawer.css"

const Sidedrawer = props => {
  return (
    <div className="sideDrawer" >
      <div className="tab">
        <AccountCircle style={{ color: '#FF6B00' , fontSize:56 }} /><p className="txt">Account</p>
      </div>
      <div className="tab">
        <PeopleAltIcon style={{ color: '#FF6B00', fontSize:56 }} /><p className="txt">Switch Account</p>
      </div>

      <div className="tab">
        <HelpOutlineIcon style={{ color: '#FF6B00', fontSize:56 }} /><p className="txt">Help</p>
      </div>
      <div className="tab">
        <ExitToAppIcon style={{ color: '#FF6B00', transform: "scaleX(-1)", fontSize:56 }} /><p className="txt">Logout</p>
      </div>
      <br></br>
      <div className="cancel">
        <CancelIcon style={{ color: '#FF6B00', fontSize:36 }} />
      </div>


    </div>
  )
}

export default Sidedrawer 