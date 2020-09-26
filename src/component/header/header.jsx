import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import logo from './images/logoiprofile.png';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import "./header.css"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background:  '#FF6B00' }}>
        <Toolbar className={classes.header}>

            <Link to='/home'>
                <IconButton>
                  <MenuIcon style={{ color: 'white' }}/>                    
                </IconButton>
            </Link>
            <div style={{display: 'flex', justifyContent: 'right'}}>
            <Link to='/notifications'>
                <Button >
                    <NotificationsNoneIcon style={{ color: 'white'}}/>
                </Button>
            </Link>

            <Link to='/settings'>
                <Button>
                    <SettingsIcon style={{ color: 'white' }}/>
                </Button>
            </Link>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}