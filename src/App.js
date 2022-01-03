import React from "react"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import EduAndExp from "./components/EduAndExp/EduAndExp"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"
import Grid from "@mui/material/Grid"

const sectionStyles = {
  borderTop: `2px solid black`,
  py: 2.5,
}

const App = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={15}>
        <Header />
        <Grid container>
          <Grid container item sx={sectionStyles}>
            <Hero />
          </Grid>
          <Grid container item sx={sectionStyles}>
            <EduAndExp />
          </Grid>
          <Grid container item sx={sectionStyles}>
            <Projects />
          </Grid>
          <Grid container item sx={sectionStyles}>
            <Skills />
          </Grid>
        </Grid>
        <Footer />
      </Paper>
    </Container>
  )
}

export default App
