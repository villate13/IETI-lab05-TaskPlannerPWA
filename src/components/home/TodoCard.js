 
import React from 'react';
import CardTask from './CardTask';
import { List } from '@material-ui/core';


export class TodoCard extends React.Component  {
    render() {
        console.log(this.props.items);
        const todos = this.props.items;
        const cards = todos.map((item)=>
            {
                console.log(item);
                return <CardTask description={item.description} 
                    responsible={item.responsible} 
                    status={item.status}
                    dueDate={item.dueDate}
                     />;
            }
        );
        return <List>{cards}</List>
    }
}