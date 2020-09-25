import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignupStudent from '../../component/signup/signup.component';
const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        padding: '0px 30rem 0px 30rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10rem 0px 10rem'
        }
    },
    mainform: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    option: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
        border: 'ivory'
    }
}));
const Register = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.parent}>
            <div className={classes.mainform}>
                <div className={classes.option}>
                    <Paper square>
                        <Tabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                            aria-label="disabled tabs example"
                            // disableRipple={true}
                            centered
                        >
                            <Tab label="Sign Up" />
                            {/* <Tab label="Recruiter" /> */}
                        </Tabs>
                    </Paper>
                </div>

                <div className={classes.signup}>
                    <SignupStudent />
                </div>

            </div>
        </div>
    )
};
export default Register;