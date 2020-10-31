import { Switch, FormControlLabel, withStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./home.css"
import Skype from "./images/skype.png"
import GoogleMeet from "./images/google-meet.png"
import MST from "./images/microsoft-teams.png"
import spoken from '../../../node_modules/spoken/build/spoken.js';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 100,
        height: 50,
        padding: 2,
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

    const [curText , setCurText] = useState('Listening...')


    const startCapture = () => {
        spoken.say("Listening.....")
        setCurText("Listening...")

        spoken.listen({ continuous : true }).then( transcript =>
            {
                spoken.say(transcript)
                setCurText(transcript)}
        ).catch( e => true );

    }

    const continueCapture = async () => {
        await spoken.delay(300);
        if(spoken.recognition.continuous)
            startCapture();
    }

    const stopCapture = () => {
        spoken.recognition.continuous = false;
        spoken.listen.stop();
        setCurText("");
    }

    const onSubmit = () => {
        spoken.listen.on.end(continueCapture);
        spoken.listen.on.error(continueCapture);

        if(voiceChangeSelected){
            startCapture();
        }
        else{
            stopCapture();
        }
    }

    useEffect(() => {
        if(voiceChangeSelected){
            spoken.say("Voice effect turned on!");
            setCurText("Voice effect turned on!")
        }
        else
            spoken.say("Voice effect has been turned off!");

            
        
    },[voiceChangeSelected])




    return <div className="col root">
        <div className="home">
            <p className="activeTitle">Active</p>

            <div className="platform">
                <img src={Skype} className="img" />
                <img src={MST} className="img" />
                <img src={GoogleMeet} className="img" />
            </div>

            <div className="voiceChange">
                <FormControlLabel
                    control={<IOSSwitch checked={voiceChangeSelected} onChange={() => { setVoiceChangeSelected(!voiceChangeSelected) }} name="checkedB" />}
                // label="iOS style"
                />
                <p className="text">Voice Change</p>
            </div>


            
        </div>
    </div>
}

export default Home