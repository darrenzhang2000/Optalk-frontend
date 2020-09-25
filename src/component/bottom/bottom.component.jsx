import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      color: 'white',
      '&:hover': {
        backgroundColor: '#0c0900',
        borderColor: '#0062cc',
        boxShadow: 'none',
      }
    }
})(Button);

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#0c0900'
  }
}));

export default function Bottom() {
  const classes = useStyles();
  {/* I will optimize code later*/}
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.header}>
            <Link to='/'>
                <BootstrapButton variant="outlined" color="primary" disableRipple>
                    Site map
                </BootstrapButton>
            </Link>
            <Link to='/'>
                <BootstrapButton variant="outlined" color="primary" disableRipple>
                    Terms
                </BootstrapButton>
            </Link>
            <Link to='/'>
                <BootstrapButton variant="outlined" color="primary" disableRipple>
                    Privacy
                </BootstrapButton>
            </Link>
            <Link to='/'>
                <BootstrapButton variant="outlined" color="primary" disableRipple>
                    Contact us
                </BootstrapButton>
            </Link>
            <Link to='/'>
                <BootstrapButton variant="outlined" color="primary" disableRipple>
                    About us
                </BootstrapButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}