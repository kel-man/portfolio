import React from 'react'
import './App.css';
// import NavBar from './components/NavBar'
// import AboutMe from './components/AboutMe'
import { Box, Container, CssBaseline } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import StacksAndExperience from './components/StacksAndExperience'
import AppRouter from './AppRouter'

const styles = theme => ({
  appStyle: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#333',
    minHeight: '100vh',
    width: '100%',
    color: 'beige',
  },
})

const App = ({classes}) => {
  return(
    <>
      <div className={classes.appStyle}>
        {/* <Box marginTop='50px'/> */}
        <CssBaseline/>
        <AppRouter/>
        {/* <NavBar/> */}
        {/* <AboutMe/> */}
        {/* <StacksAndExperience/> */}
      </div>
    </>
  )
}

export default withStyles(styles)(App)
