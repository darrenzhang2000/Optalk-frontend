import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import { storeEmail, storeUserProfile } from '../../redux/redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
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
    },
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


// http://localhost:5000/user/login
const Signin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState();
    const [password, setPass] = React.useState();
    const [success, setSuccess] = React.useState(0);

    /* Use for modal true */
    var subtitle;
    function afterOpenModalTrue() {
    // references are now sync'd and can be accessed.
        subtitle.style.color = 'blue';
    }
    
    function closeModalTrue(){
        setIsOpenTrue(false);
    }
    const [modalIsOpenTrue,setIsOpenTrue] = React.useState(false);
    /****************************************************************/
    /* Use for modal false */
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    
    function closeModal(){
        setIsOpenFalse(false);
    }
    const [modalIsOpenFalse,setIsOpenFalse] = React.useState(false);
    /****************************************************************/

    const onSubmit = () => {
        axios.get('http://localhost:5000/user/login', {params: {
            email: email, 
            password: password
        }}).then(
            _ => {
                dispatch(storeEmail(email));
                axios.get(`http://localhost:5000/user/email/${email}/profile`)
                .then(
                    res => {
                        
                        // if user's profile is set up
                        if(res.data.success){
                            dispatch(storeUserProfile(res.data.profile))
                            setIsOpenTrue(true);
                            setIsOpenFalse(false);
                        }else{ // user's profile isn't set up
                            console.log('user profile is not set up')
                            setIsOpenFalse(true);
                            setIsOpenTrue(false);
                        }
                        console.log(res)
                    }
                )
            }
        ).catch(err => {
            console.log(err);
        })
    }  

    return(
    <div className={classes.mainform}>
        <form className={classes.form}>
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Email'
            name='email'
            required
            autoComplete='email'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            onChange={e=>setEmail(e.target.value)}
            />
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Password'
            name='password'
            required
            autoComplete='current-password'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            onChange={e=>setPass(e.target.value)}
            />
            <div className={classes.button}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </form>
        <div className={classes.newaccount}>
            <Link to='/register' variant="body2" >
                {"Don't have an account? Register"}
            </Link>
        </div>
        
        <Modal
          isOpen={modalIsOpenTrue}
        //   onAfterOpen={afterOpenModalTrue}
        //   onRequestClose={closeModalTrue}
          style={customStyles}
          contentLabel="Modal for succesfully login"
        >

            <h2 ref={_subtitle => (subtitle = _subtitle)}>Congrat, You login successfully. Go to home page!</h2>
            <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'} }>
                <Link to='/home'><Button variant="contained" color="primary">Home page</Button></Link>
            </div>
            
        </Modal>

        <Modal
          isOpen={modalIsOpenFalse}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

            <h2 ref={_subtitle => (subtitle = _subtitle)}>Sorry! Email or Password is not correctly, or you need update your profile.</h2>
            <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'} }>
                <Button onClick={closeModal} variant="contained" color="secondary" style={{height: '40px', marginTop: '15px'}}>close</Button>
                <Link to='/register'><Button variant="contained" color="primary">Register</Button></Link>
                <Link to='/onboarding1'><Button variant="contained" color="primary">Profile</Button></Link>
            </div>
            
        </Modal>

    </div>
    
    )
};
export default Signin;