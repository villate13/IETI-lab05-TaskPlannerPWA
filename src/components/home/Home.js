import React, { Component, Fragment } from 'react';
import { TodoCard } from './TodoCard';
import './Home.css'

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


// GRID
import Grid from '@material-ui/core/Grid';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.isLoggedIn,
            items: JSON.parse(localStorage.items) };
        }

    render() {



       

        if (this.state.isLoggedIn === false || this.state.isLoggedIn === undefined) {
            window.location.replace("/login")
        }


        return (

            <Fragment>
                <div className="div_center">
                    <div className="layout">

                        <Grid container justify="center" spacing={1}>
                            <Button className="button_add" variant="contained" color="primary" component={Link} to="/new">
                                ADD NEW<Icon style={{ fontSize: 45 }}>add_circle</Icon>
                            </Button>
                        </Grid>
                        <br></br>
                        <br></br>

                        <Grid container justify="center" spacing={1}>
                            <TodoCard items={this.state.items} />

                        </Grid>

                        <Fab color="primary" aria-label="add"  component={Link} to="/new">
                            <AddIcon />
                        </Fab>
                    </div>
                </div>


            </Fragment>
        );

    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }


    handleDateChange(date) {
        console.log(date);
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        console.log(this.state.dueDate);
        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default Home;