import { Switch , withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import "./home.css"
import Skype from "./images/skype.png"
import GoogleMeet from "./images/google-meet.png"
import MST from "./images/microsoft-teams.png"

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 72,
      height: 36,
      padding: 2,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#FF9043',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#FF9043',
        border: '8px solid #fff',
      },
    },
    thumb: {
      width: 30,
      height: 32,
    },
    track: {
      borderRadius: 56 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

const Home = props => {

    const [voiceCheck , setVoiceCheck] = useState(false);
    const [videoCheck , setVideoCheck] = useState(false);

    const onSubmit = () => {
    
    }

    const handleVoiceChange = () => {
        setVoiceCheck(!voiceCheck);
    }
    const handleVideoChange = () => {
        setVideoCheck(!videoCheck)
    }

    return <div className="home">
        <p className="activeTitle">Active</p>

        <div className="platforms">
            <img src={Skype} className="img" />
            <img src={MST} className="img"/>
            <img src={GoogleMeet} className="img"/>
        </div>

        <div className="voiceChange">
            <IOSSwitch checked={voiceCheck} onChange={handleVoiceChange} />
            <p className="text">Voice Change</p>
        </div>

        <div className="voiceChange">
            <IOSSwitch checked={videoCheck} onChange={handleVideoChange} />
            <p className="text">Video Change</p>
        </div>

        <button className="options">Show more options</button>
        <div >
            <button className="button" onClick={onSubmit}>
                Apply
            </button>
        </div>
    </div>
}

export default Home