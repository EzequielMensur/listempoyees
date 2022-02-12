import './App.css';
import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import { makeStyles} from '@material-ui/core';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material';
import Employees from './pages/Employees/Employees';
import { createTheme } from '@material-ui/core/styles'



const theme=createTheme({
    palette:{
      primary:{
        main:'#333996',
        light:'#3c44b126'
      },
      secundary:{
        main:'#333996',
        light:'#3c44b126'
      },
    },
    shape:{
      borderRadius:'12px'
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:'translateZ(0)'
        }
      }
    },
    props:{
      MuiIconButton:{
         disableRipple:true
      }
    }
})

const useStyles =makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',
    
  }
})

function App() {
  const classes =useStyles()
  return (
    <ThemeProvider theme={theme}>
    <SideMenu/>
   <div className={classes.appMain}>
     <Header></Header>
     <Employees/>
   </div>
   </ThemeProvider>
  );
  
}

export default App;
