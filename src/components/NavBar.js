import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Box, Button, Typography, Drawer } from '@material-ui/core'
import { withRouter } from 'react-router-dom'


const styles = theme => ({
  container: {
    height: '50px',
    display: 'flex',
    flexFlow: 'row',
    background: '#004d40',
    justifyContent: 'space-between',
  },
  welcome: {
    alignSelf: 'center',
    justifySelf: 'flex-start',
    marginLeft: '20px',
    color: 'beige',
  },
  buttons: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: 'beige',
  },
})

const NavBar = ({classes, history}) => {

  return(
    <>
      <Drawer variant="permanent" anchor="top">
        <Box className={classes.container}>
          <Typography className={classes.welcome}>Kelen Yafuso: Full Stack Web Developer</Typography>
          <div className={classes.buttons}>
            <Button color="inherit" edge="start" >
              Scroll to Top
            </Button>
            <Button color="inherit" onClick={() => history.push('/_/AboutMe')}>
              About Me
            </Button>
            <Button color="inherit" onClick={() => history.push('/_/StacksAndExperience')}>
              Stacks & Experience
            </Button>
            <Button color="inherit" >
              Projects
            </Button>
            <Button color="inherit" >
              Non-tech Experience
            </Button>
            <Button color="inherit" >
              Personal
            </Button>
            <Button color="inherit" >
              Contact Me
            </Button>
          </div>
        </Box>
      </Drawer>
    </>
  )
}

export default withStyles(styles)(withRouter(NavBar))
