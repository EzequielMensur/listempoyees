import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor:'#fff',
        transform:'translateZ(0)'
    },
    SearchIput:{
        opacity:'0.6',
        padding: '0px 8px', //${theme.spacing(1)}px
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: '8px' //theme.spacing(1)
        }
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems='center'>
                   <Grid style={{border:'1px solid #fff'}}>
                        <InputBase
                            placeholder='Search topics'
                            startAdornment={<SearchIcon fontSize='small'/>}
                            className={classes.SearchIput}
                        ></InputBase>
                    </Grid>
                    <Grid item sm>
                    </Grid>
                    <Grid  style={{border:'1px solid #000'}}>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize='small'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color='primary'>
                                <ChatBubbleOutlineIcon fontSize='small'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize='small'/>
                        </IconButton>      
                    </Grid>  
                </Grid>
            </Toolbar>

        </AppBar>
    )
}

export default Header
