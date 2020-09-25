import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import logo from './images/logoiprofile.png';

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
            <Link to='/'>
                <IconButton>
                    <Avatar alt="Iprofile" src={logo} className={classes.large}/>
                </IconButton>
            </Link>
            <Link to='/home'>
                <Button variant="contained" color="primary">
                    Home
                </Button>
            </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}