import React, { Component, Fragment } from 'react';
import './Home.css'

import moment from "moment";
import DatePicker from 'react-datepicker';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';


// SELECT
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';S
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class NewTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.isLoggedIn,
            items: '',
            description: '',
            responsible: localStorage.user + ' (' + localStorage.email + ')',
            status: '',
            dueDate: ''
        };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        

    render() {



        

        if (this.state.isLoggedIn === false || this.state.isLoggedIn === undefined) {
            window.location.replace("/login")
        } else {
            this.state.items = JSON.parse(localStorage.items);
        }

        // const responsible = localStorage.user + " (" + localStorage.email + ")"

        return (

            <Fragment>
                <div className="div_center">
                    <form onSubmit={this.handleSubmit} className="todo-form">
                        <Card className="">
                                <Typography gutterBottom variant="h5" component="h2">
                                    ADD NEW TASK
                            </Typography>
                                <div className="div_portada">
                                    {/* <img src="https://fondosmil.com/fondo/1705.jpg" ></img> */}
                                </div>


                                <CardContent>

                                    <Typography variant="body2" color="textSecondary" component="h2" >
                                        <p>
                                            <TextField
                                                required
                                                id="description"
                                                label="Description"
                                                variant="outlined"
                                                onChange={this.handleDescriptionChange}
                                                value={this.state.description} />
                                        </p>
                                        <p>
                                            <TextField
                                                required
                                                
                                                variant="outlined"
                                                
                                                value={this.state.responsible} />
                                        </p>
                                        <p>
                                            <FormControl variant="outlined" className="select_status">
                                                <InputLabel required id="status-label">Status</InputLabel>
                                                <Select
                                                    labelId="status-label"
                                                    id="status"
                                                    value={this.state.status}
                                                    onChange={this.handleStatusChange}
                                                    label="Status"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="ready">Ready</MenuItem>
                                                    <MenuItem value="progress">In Progress</MenuItem>
                                                    <MenuItem value="done">Done</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </p>
                                        <p>
                                            <DatePicker
                                                id="due-date"
                                                selected={this.state.dueDate}
                                                placeholderText="Due date"
                                                onChange={this.handleDateChange} />

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
                                    Add #{this.state.items.length + 1}
                                </Button>
                            </CardActions>
                        </Card>

                    </form>
                </div>


            </Fragment>
        );

    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }


    handleStatusChange(e) {
        this.setState({
            status: e.target.value
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
        console.log(this.state.items);
        e.preventDefault();

        if (!this.state.description.length || !this.state.responsible.length || !this.state.status || !this.state.dueDate)
            return;

        
        const newItem = {
            description: this.state.description,
            responsible: {
                name: localStorage.user,
                email: localStorage.email
            },
            status: this.state.status,
            dueDate: new Date(this.state.dueDate).getTime(),

        };

        console.log(newItem);

        this.state.items.push(newItem);
        console.log(this.state.items);

        // GUARDANDO DATOS
        localStorage.setItem('items', JSON.stringify(this.state.items));
        // localStorage.items = this.state.items;
        
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            responsible: '',
            status: '',
            dueDate: ''
        }));


        window.location.replace("/home")
    }

}

export default NewTask;