import { FormControlLabel,Checkbox as MuiCheckbox,FormControl } from '@material-ui/core';
import React from 'react'

const Checkbox = (props) => {
    const {name,label,value,onChange}=props;

    const convertToDefEventPara = (name,value) =>({
        target:{
            name,value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                name={name}
                color='primary'
                checked={value}
                onChange={e=>onChange(convertToDefEventPara(name, e.target.checked))}/>}
                label={label}
            ></FormControlLabel>
        </FormControl>
    )
}

export default Checkbox
