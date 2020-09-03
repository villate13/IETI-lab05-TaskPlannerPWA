import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import './Login.css'


class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }


    

    render() {
        if(localStorage.isLoggedIn) {
            window.location.replace("/home")
        }
        
        return (
            <Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="h2">Task Planner</Typography>
                        <AssignmentIndIcon style={{ fontSize: 150 }} />

                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Username</InputLabel>
                                <Input id="username" name="username" autoComplete="username" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleLogin}
                            >
                                Sign in
                            </Button>
                            <br></br>
                            <br></br>
                            <Typography >Create Account </Typography>
                        </form>
                    </Paper>
                </main>
            </Fragment>
        );
    }

    handleLogin() {
        console.log("Entro a iniciar");
        if (document.getElementById("username").value === localStorage.user && document.getElementById("password").value === localStorage.pd) {
            this.props.funct(true);

        } else {
            console.log("Error");
            this.props.funct(false);
        }

    }

}

export default Login;