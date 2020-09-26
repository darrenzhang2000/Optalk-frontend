import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import Modal from 'react-modal';

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato'
        },
        '& label': {
            color: '#FF6B00'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FF6B00'
            },
            '&:hover fieldset': {
                borderColor: '#FF6B00'
            },
            '& .Mui-focused fieldset': {
                borderColor: '#FF6B00'
            }
        },
        width: 310
    }
})(TextField);

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'column'
    },
    button: {
        marginTop: '10px',
        width: '211px',
        height: '45px',

        background: '#FF6B00',
        borderRadius: '25px',
        marginLeft: '54px'
    },
    newaccount: {
        marginTop: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    }
}));


const Signup = props => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    const onSubmit = () => {
        console.log('onsub clicked');
        // const body = {
        //     email: email,
        //     password: password,
        // }
        // axios.post('http://localhost:5000/user/register', body).then(
        //     res => {
        //         // if user's profile is set up
        //         if (res.data.success) {
        //             setIsOpenTrue(true);
        //             setIsOpenFalse(false);
        //         } else { // user's profile isn't set up
        //             console.log('user profile is not set up')
        //             setIsOpenFalse(true);
        //             setIsOpenTrue(false);
        //         }
        //         console.log(res)
        //     }
        // )
    }

    return <div>
        <form className={classes.form}>
            <InputField
                className={classes.input}
                label='Email'
                name='email'
                required
                autoComplete='email'
                variant='outlined'
                margin='dense'
                size='medium'
                inputProps={{ style: { color: 'black' } }}
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <InputField
                className={classes.input}
                label='Password'
                name='password'
                required
                autoComplete='password'
                variant='outlined'
                margin='dense'
                size='medium'
                inputProps={{ style: { color: 'black' } }}
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <InputField
                className={classes.input}
                label='Confirm Password'
                name='confirmPassword'
                required
                autoComplete='Confirm Password'
                variant='outlined'
                margin='dense'
                size='medium'
                inputProps={{ style: { color: 'black' } }}
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <div >
                <div >
                    <button className={classes.button} onClick={onSubmit}>
                        Submit
                </button>
                </div>
            </div>
        </form>
    </div>
}

export default Signup