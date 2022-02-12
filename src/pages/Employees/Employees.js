import React,{useState} from 'react'
import EmployeesForm from './EmployeesForm'
import PageHeader from '../../components/PageHeader.js/PageHeader';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Paper,makeStyles, TableBody, TableRow, TableCell, Toolbar,Button} from '@material-ui/core';
import useTable from '../../components/useTable/useTable';
import * as employeeService from '../../services/employeeService'
import Controls from '../../components/controls/Controls'; 
import AddIcon from '@mui/icons-material/Add';
import Popup from '../../components/Popup/Popup';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';



const useStyles = makeStyles(theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    newButton:{
        position:'absolute',
        right:'10px'
    }
}))

const {setOpenPopup}=Popup;

const headCells = [
     {id:'fullName',label:'Employee Name'},
     {id:'email',label:'Emal Address(Personal)'},
     {id:'mobile',label:'Mobile Number'},
     {id:'department',label:'Department'},
     {id:'actions', label:'Actions', disableSorting:true}
]

const Employees = () => {

    const classes= useStyles();
    const [records,setRecords]=useState(employeeService.getAllEmployees())
    const [recordsForEdit,setRecordsForEdit]=useState(null)
    const [filterFn,setFilterFn]=useState({fn:items =>{return items;}})
    const [openPopup,setOpenPopup]=useState(false)

    const addorEdit = (employee, resetForm) =>{
        if(employee.id == 0)
             employeeService.insertEmployee(employee)
            else
            employeeService.updateEmployee(employee)
        resetForm()
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const {TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting}=useTable(records,headCells,filterFn);

    const handleSearch = e =>{
        let target=e.target;
        setFilterFn({
            fn:items => {
                if(target.value =='')
                    return items;
                else
                    return items.filter(x =>x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const openInPopup= item =>{
        setRecordsForEdit(item);
        setOpenPopup(true)
    }

    return (
        <>
        <PageHeader
       title ='New Employee'
       subTitle='Form design with validation'
       icon={<PersonSearchIcon fontSize='large '/>}>
         </PageHeader>
         <Paper className={classes.pageContent}>
        <Toolbar>
        <Controls.Input
            label='Search employees'
            onChange={handleSearch}
        />
        <Controls.Button
            text= 'Add new'
            variant ='outlined'
            startIcon={<AddIcon/>}
            className={classes.newButton}
            onClick={()=>{setOpenPopup(true);setRecordsForEdit(null);}}
        />
        </Toolbar>
         <TblContainer>
             <TblHead/>   
             <TableBody>
                 {
                     recordsAfterPagingAndSorting().map(item =>
                        ( <TableRow key={item.id}>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.mobile}</TableCell>
                            <TableCell>{item.department}</TableCell>
                            <TableCell>
                                <Button color='primary'
                                        onClick={()=>{openInPopup(item)}}
                                >
                                        <EditIcon fontSize='small'
/>
                                </Button>
                                <Button color='secondary'>
                                        <CloseIcon fontSize='small'/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        )
                     )
                 }
             </TableBody>
         </TblContainer>
         <TblPagination/>
         </Paper>
         <Popup
            title='Employee Form'
            openPopup={openPopup}
            setOpenPopup={setOpenPopup} 
            ><EmployeesForm
                 addorEdit={addorEdit}
                 recordsForEdit={recordsForEdit}
            />
         </Popup>
        </>
    )
}

export default Employees
