import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import { yellow } from '@material-ui/core/colors';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        padding: 10,
        margin: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function CardTask({ description, responsible, status, dueDate }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    var toDate = new Date(dueDate);
    var fecha = toDate.getDate() + "/" + toDate.getMonth() + "/" + toDate.getFullYear() + " " + toDate.getHours() +":"+toDate.getMinutes();
    var detallesUser = responsible.name + " (" + responsible.email + ")";

    let iconoStatus;
    console.log(status);
    if(status === "ready"){
        iconoStatus = <CheckCircleIcon style={{ color: green[500] }} />
    } else if (status === "pending") {
        iconoStatus = <InfoIcon style={{ color: yellow[500] }}/>
    } else {
        iconoStatus = <CancelIcon color="secondary"/>
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {detallesUser.substr(0,1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {iconoStatus}
                    </IconButton>
                }
                title={detallesUser}
                subheader={fecha} 
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    );
}