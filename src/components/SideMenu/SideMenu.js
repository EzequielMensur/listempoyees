import { makeStyles } from '@material-ui/core'
import React from 'react'


const style =makeStyles({
    sidemenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
      }
})

const SideMenu = () => {

    const classes =style();
    console.log(classes);
    return (
        <div className={classes.sidemenu}>
        </div>
    )
}

export default SideMenu
