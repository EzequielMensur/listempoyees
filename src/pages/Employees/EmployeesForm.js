import { Grid} from '@material-ui/core';
import {useForm,Form} from '../../components/useForm/useForm';
import Controls from '../../components/controls/Controls';
import * as employeeService from '../../services/employeeService'
import React, {useState,useEffect} from 'react';


const genderItems=[
       {id:'male',title:'Male'},
       {id:'female',title:'Female'},
       {id:'outher',title:'Outher'}
]

const initialFvalues ={
     id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'',
    departmentId:'',
    hireDate: new Date(),
    isPermanent: false,
}

const EmployeesForm = (props) => {

    const {addorEdit,recordsForEdit}=props;
    

    const validate= () =>{
        let temp ={}
        console.log (temp);
        temp.fullName = values.fullName ? '' :'This fiel is required.'
        temp.email=(/$^|.+@.+..+/).test(values.email) ? '' : 'Email is not valid.'
        temp.mobile = values.mobile.length>9 ?'' : 'Minimun 10 numbers required.'
        temp.departmentId=values.departmentId.length != 0 ? '' : 'This field is required.'
        setErrors({
            ...temp
            
        })
        return Object.values(temp).every(x => x == '')
        };
    
    const {values,setValues,handleInputChange,errors,setErrors,resetForm}=useForm(initialFvalues);
    
    
        const handleSubmit=(e)=>{
                e.preventDefault()
                if(validate()){
                    addorEdit(values,resetForm);
      }
}
    useEffect(()=>{
        if(recordsForEdit != null);
            setValues({
                ...recordsForEdit
            })

    },[recordsForEdit])


   return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name='fullName'
                        label='Full Name'
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    {values.fullName &&(<Controls.Input
                    name='mobile'
                    label='Mobile' 
                    value={values.mobile}
                    onChange={handleInputChange}
                    error={errors.mobile}
                    />)}
                    {values.mobile &&(<Controls.Input
                    name='city'
                    label='City' 
                    value={values.city}
                    onChange={handleInputChange}
                    error={errors.city}
                    />)}
                    {values.city &&(<Controls.Input
                    name='email'
                    label='Email' 
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    />)}
                </Grid>
                <Grid item xs={6}>
                {values.email&&(<Controls.RadioGroup 
                 row  
                 label='Gender'
                 name='gender'
                 value={values.gender}
                 onChange={handleInputChange}
                 items={genderItems}
                />)}
                {values.gender&&(<Controls.Select
                    name='departmentId'
                    label='department'
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                />)}
                {values.departmentId&&(<Controls.Checkbox
                name='isPermanent'
                label='Permanent Employee'
                value={values.isPermanent}
                onChange={handleInputChange}
                />)}
                {values.isPermanent&&(<Controls.DatePicker
                    name='hireDate'
                    label='Hire Date'
                    value={values.hireDate}
                    onChange={handleInputChange}         
                />)}
               {values.hireDate&&( <div>
                    <Controls.Button
                        text='Submit'
                        type='submit'
                    ></Controls.Button>
                    <Controls.Button
                        text='Reset'
                        color='default'
                        onClick={resetForm}
                    ></Controls.Button>
                </div>)}
                </Grid>
            </Grid>
        </Form>
        
    )
}

export default EmployeesForm
