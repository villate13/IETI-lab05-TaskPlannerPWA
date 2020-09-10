 
import React from 'react';
import CardTask from './CardTask';
import { Grid } from '@material-ui/core';


export class TodoCard extends React.Component  {
    render() {
        // console.log(this.props.items);
        const todos = this.props.items;
        const cards = todos.map((item)=>
            {
                // console.log(item);
                return <CardTask description={item.description} 
                    responsible={item.responsible} 
                    status={item.status}
                    dueDate={item.dueDate}
                     />;
            }
        );
        return <Grid container item xs={12} spacing={1}>{cards}</Grid>
    }
}