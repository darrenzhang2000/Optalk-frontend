import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
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

const SignupStudent = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

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
            console.log('onsub clicked');
            const body = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
                student: true
            }
            axios.post('http://localhost:5000/user/register', body).then(
                res => {
                    // if user's profile is set up
                    if(res.data.success){
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
    return(
    <div className={classes.mainform}>
        <form className={classes.form} >
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='First name'
            name='firstName'
            required
            autoComplete='First name'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            onChange={e=>setFirstName(e.target.value)}
            value={firstName}
            />
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Last name'
            name='lastName'
            required
            autoComplete='Last name'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            onChange={e=>setLastName(e.target.value)}
            value={lastName}
            />
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
            onChange={e=>{setEmail(e.target.value); console.log(email)}}
            value={email}
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
            onChange={e=>setPassword(e.target.value)}
            value={password}
            />
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Confirm password'
            name='confirmpassword'
            required
            autoComplete='Confirm password'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            value={password}/>
            <div className={classes.button}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </form>
        <div className={classes.newaccount}>
            <Link to='/' variant="body2" >
                {"Have an account? Login"}
            </Link>
        </div>

        <Modal
          isOpen={modalIsOpenTrue}
        //   onAfterOpen={afterOpenModalTrue}
        //   onRequestClose={closeModalTrue}
          style={customStyles}
          contentLabel="Modal for succesfully login"
        >

            <h2 ref={_subtitle => (subtitle = _subtitle)}>Congrat, You register successfully. Go to Login page!</h2>
            <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'} }>
                <Link to='/'><Button variant="contained" color="primary">Login</Button></Link>
            </div>
            
        </Modal>

        <Modal
          isOpen={modalIsOpenFalse}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

            <h2 ref={_subtitle => (subtitle = _subtitle)}>Your account has existed already.</h2>
            <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'center'} }>
                <Link to='/'><Button variant="contained" color="primary">Login</Button></Link>
            </div>
            
        </Modal>
    </div>
    )
};
export default SignupStudent;