import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const styles = theme => ({
  aboutMeContainer: {
    color: 'beige',
    width: '100%',
    margin: 'none',
  },
  title: {
    height: '100px',
    fontSize: '5rem',
  },
  body: {
    fontSize: '1.5rem',
  }
})

const AboutMe = ({classes}) => {
  return(
    <>
      <Container
        className={classes.aboutMeContainer}
      >
        <Typography className={classes.title}>About me:</Typography>
        <Typography className={classes.body}>
          I have always had an affinity for machines. Growing up as a gamer, I believe my older brother said it best:
          Programming is the ultimate videogame. I am Kelen Yafuso, a full-stack web developer based in San Diego,
          CA. I've gathered a range of skills over my years and travels, all of which have helped me process the
          world around me as well as my growing expertise in the technical field.
        </Typography>
        <Typography className={classes.body}>
          As a developer, I focus on reusable, scalable, and legible code. I enjoy using open-source tools and
          exploring the realm of plugins and libraries. This site in itself is built with Material-UI, a
          beautiful open-source React library for clean, functional components. I am always open to learning and
          adapting to new structures and environments, and I find the process leading to understanding to be one
          of the most rewarding experiences one can have.
        </Typography>
      </Container>
    </>
  )
}

export default withStyles(styles)(AboutMe)
