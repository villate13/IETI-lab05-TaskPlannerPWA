import React, { Component, Fragment } from 'react';
import './UserProfile.css'


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';




class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.isLoggedIn,
            items: '',
            name: localStorage.name,
            email: localStorage.email,
            pass: '',
            pass2: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlePass2Change = this.handlePass2Change.bind(this);
    }


    render() {





        if (this.state.isLoggedIn === false || this.state.isLoggedIn === undefined) {
            window.location.replace("/login")
        } else {
            this.state.items = JSON.parse(localStorage.items);
        }


        return (

            <Fragment>
                <div className="div_center">
                    <form onSubmit={this.handleSubmit} className="todo-form">
                        <Card className="">
                            <Typography gutterBottom variant="h5" component="h2">
                                EDIT YOUR PROFILE
                            </Typography>
                            <div className="div_portada">
                                {/* <img src="https://fondosmil.com/fondo/1705.jpg" ></img> */}
                            </div>


                            <CardContent>

                                <Typography variant="body2" color="textSecondary" component="h2" >
                                    <p>
                                        <TextField
                                            required
                                            id="name"
                                            label="Full Name"
                                            variant="outlined"
                                            onChange={this.handleNameChange}
                                            value={this.state.name} />
                                    </p>
                                    <p>
                                        <TextField
                                            required
                                            id="email"
                                            label="Email"
                                            variant="outlined"
                                            onChange={this.handleEmailChange}
                                            value={this.state.email} />
                                    </p>
                                    <p>
                                        <TextField
                                            required
                                            type="password"
                                            id="pass"
                                            label="Password"
                                            variant="outlined"
                                            onChange={this.handlePassChange}
                                            value={this.state.pass} />
                                    </p>

                                    <p>
                                        <TextField
                                            required
                                            type="password"
                                            id="pass2"
                                            label="Confirm Password"
                                            variant="outlined"
                                            onChange={this.handlePass2Change}
                                            value={this.state.pass2} />
                                    </p>


                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    className=""
                                    startIcon={<SaveIcon />}
                                    onClick={this.handleSubmit}
                                >
                                    SAVE
                                </Button>
                            </CardActions>
                        </Card>

                    </form>
                </div>


            </Fragment>
        );

    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }


    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassChange(e) {
        this.setState({
            pass: e.target.value
        });
    }

    handlePass2Change(e) {
        this.setState({
            pass2: e.target.value
        });
    }




    handleSubmit(e) {

        e.preventDefault();


        if (this.state.name !== undefined || this.state.email !== undefined || this.state.pass !== undefined || this.state.pass2 !== undefined)
            return;

        if (!this.state.name.length || !this.state.email.length || !this.state.pass.length || !this.state.pass2.length)
            return;
            
        if (this.state.pass !== this.state.pass2)
            return;


        if (localStorage.pd !== this.state.pass)
            return;

        // GUARDANDO DATOS
        localStorage.email = this.state.email;
        localStorage.name = this.state.name;


        this.setState(prevState => ({
            name: '',
            email: '',
            pass: '',
            pass2: ''
        }));


        window.location.replace("/home")
    }

}

export default UserProfile;