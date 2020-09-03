import React, { Component, Fragment } from 'react';
import { TodoCard } from './TodoCard';
import './Home.css'




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: localStorage.isLoggedIn,
        items:[
            {
                "description": "Implement login view ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "ready",
                "dueDate": 156464645646
            },
            {
                "description": "Implement login controller",
                "responsible": {
                    "name": "ECI",
                    "email": "seci@gmail"
                },
                "status": "error",
                "dueDate": 156464645646
            },
            {
                "description": "Facebook integration ",
                "responsible": {
                    "name": "Sergio",
                    "email": "sergi@mail"
                },
                "status": "pending",
                "dueDate": 156464645646
            }

        ]};
    }

    render() {

        

        // GUARDANDO DATOS
        localStorage.setItem('items', JSON.stringify(this.props.items));
        



        return (
            <Fragment>
                <div className="layout">
                    <TodoCard items={this.state.items} />
                </div>
            </Fragment>
        );

    }

}

export default Home;