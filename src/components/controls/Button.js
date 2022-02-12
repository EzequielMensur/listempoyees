import { Button as Muibutton, makeStyles } from '@material-ui/core';
import React from 'react'


const useStyles =makeStyles(theme =>({
    root:{
        margin:theme.spacing(0.5)
    },
    label:{
        textTransform:'nome'
    }
}))



const Button = (props) => {

    const {text,size,color,variant,onClick, ...other}=props;
    const classes =useStyles();

    return (
        <Muibutton
        variant={variant || 'contained'}
        size={size || 'large'}
        color={color || 'primary'}
        onClick={onClick}
        {...other}
        classes={{root:classes.root, label:classes.label}}
        >
            {text}
        </Muibutton>
    )
}

export default Button
