import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core';

export function useForm(initialFvalues){

    const [values,setValues]=useState(initialFvalues);
    const [errors,setErrors]=useState({});
    console.log(errors);

    const handleInputChange = e=> {
        const {name,value}= e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const resetForm =()=>{
        setValues(initialFvalues);
        setErrors({});
    }

    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        resetForm
    }
}

const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }
    }
}))
export function Form(props) {

    
    const classes =useStyles();
    const {childen, ...other} = props;
    console.log(props)

    return (

        <form className={classes.root} autoComplete='off' {...other}>
        {props.children}      
        </form>
    )
}


