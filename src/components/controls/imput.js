import { TextField } from '@material-ui/core';
import React from 'react'

const Input = (props) => {

    const {name,label,value,onChange,error=null}=props;

    console.log(error)
    return (
        <TextField
        variant='outlined'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...(error && {error:true,helperText:error})}
         
        ></TextField>
    )}

export default Input
