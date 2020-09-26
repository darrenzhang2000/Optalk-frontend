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
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.header}>

            <Link to='/home'>
                <IconButton>
                  <MenuIcon/>                    
                </IconButton>
            </Link>
            
            <Link to='/notifications'>
                <Button variant="contained" color="primary">
                    <NotificationsNoneIcon/>
                </Button>
            </Link>

            <Link to='/settings'>
                <Button variant="contained" color="primary">
                    <SettingsIcon/>
                </Button>
            </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}