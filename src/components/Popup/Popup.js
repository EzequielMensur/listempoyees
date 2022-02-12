import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import React from 'react'
import Controls from '../controls/Controls'

const Popup = (props) => {

    const {title,children,openPopup,setOpenPopup}=props
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
            <div style={{display:'flex'}}>
                <Typography variant='h6' component='div'style={{flexGrow:1}}>{title}</Typography>
                <Controls.Button
                    color='secondary'
                    text='X'
                    onClick ={()=>{setOpenPopup(false)}}
                ></Controls.Button>
            </div>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    )
}

export default Popup
