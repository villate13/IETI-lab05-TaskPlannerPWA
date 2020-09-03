import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function handleLogout() {
    console.log("Entro a cerrar sesion");
    if (localStorage.isLoggedIn) {
        localStorage.clear();
        window.location.replace("/")

    } else {
        console.log("Sin iniciar");
    }

};


export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar
                            alt="AVATAR"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            className={classes.large}
                        />
                    </ListItemAvatar>
                    <ListItemText primary="ECI" secondary="eci@escuela.co" />

                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button component={Link} to="/home">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={handleLogout.bind(this)}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div >
    );

    let buttons;
    if (localStorage.isLoggedIn) {
        buttons = <div>
            <Button color="inherit" onClick={toggleDrawer("right", true)}><MenuIcon color="inherit" /></Button>
            <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                {list("right")}
            </Drawer>
        </div>;
    } else {
        buttons = <Button component={Link} to="/login" color="inherit">Login</Button>
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.menuButton}>
                        TASK PLANNER APP
                    </Typography>

                    <div className={classes.title}></div>

                    {buttons}
                </Toolbar>
            </AppBar>

        </div>
    );

   
}
