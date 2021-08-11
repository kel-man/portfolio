import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Box } from '@material-ui/core'
import AboutMe from './components/AboutMe'
import StacksAndExperience from './components/StacksAndExperience'
import NavBar from './components/NavBar'

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Box marginTop='50px'/>
        <Switch>
          <Route path="/" component={AboutMe}/>
          <Route path="/_/AboutMe" component={AboutMe} />
          <Route path="/_/StacksAndExperience" component={StacksAndExperience} />
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter

