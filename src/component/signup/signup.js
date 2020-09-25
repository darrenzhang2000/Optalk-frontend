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
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '& .Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }
    }
})(TextField);

const useStyles = makeStyles((theme) => ({ 
    form: {
        display: 'column'
    },
    button: {
        marginTop: '10px'
    },
    newaccount: {
        marginTop: '10px'
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
        <form>
            <InputField
                // className={classes.input}
                fullWidth={true}
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
                // className={classes.input}
                fullWidth={true}
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
                // className={classes.input}
                fullWidth={true}
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
                {/* <div className={classes.button}> */}
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </form>
    </div>
}

export default Signup