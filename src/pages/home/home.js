import { Switch, FormControlLabel, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import "./home.css"
import Skype from "./images/skype.png"
import GoogleMeet from "./images/google-meet.png"
import MST from "./images/microsoft-teams.png"

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 100,
        height: 50,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(52px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#FF6B00',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#FF6B00',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 48,
        height: 48,
    },
    track: {
        borderRadius: 48 / 2,
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
    const [voiceChangeSelected, setVoiceChangeSelected] = useState(false)
    const [videoChangeSelected, setVideoChangeSelected] = useState(false)

    const [voiceCheck, setVoiceCheck] = useState(false);
    const [videoCheck, setVideoCheck] = useState(false);

    const onSubmit = () => {

    }


    return <div className="col root">
        <div className="home">
            <p className="activeTitle">Active</p>

            <div className="platforms">
                <img src={Skype} className="img" />
                <img src={MST} className="img" />
                <img src={GoogleMeet} className="img" />
            </div>

            <div className="voice-change row">
                <FormControlLabel
                    control={<IOSSwitch checked={voiceChangeSelected} onChange={() => { setVoiceChangeSelected(!voiceChangeSelected) }} name="checkedB" />}
                // label="iOS style"
                />
                <p className="text">Voice Change</p>
            </div>

            <div className="video-change row">
                <FormControlLabel
                    control={<IOSSwitch checked={videoChangeSelected} onChange={() => { setVideoChangeSelected(!videoChangeSelected) }} name="checkedB" />}
                // label="iOS style"
                />
                <p className="text">Video Change</p>
            </div>

            <button className="options">Show more options</button>
            <div >
                <button className="button" onClick={onSubmit}>
                    Apply
            </button>
            </div>
        </div>
    </div>
}

export default Home