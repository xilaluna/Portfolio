import React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"

const sectionStyles = {
  borderTop: `2px solid black`,
  my: [1, 1],
  py: [2, 2],
}

const headingStyles = {
  textAlign: "center",
  paddingBottom: 1,
  fontFamily: "Vast Shadow",
}

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Container component="main" sx={{ borderBottom: "2px solid black" }} disableGutters>
        <Container sx={sectionStyles}>
          <Hero />
        </Container>
        <Container sx={sectionStyles}>
          <Typography variant="h4" component="h4" sx={headingStyles} disableGutters>
            ✵ PROJECTS ✵
          </Typography>
          <Projects />
        </Container>
        <Container sx={sectionStyles}>
          <Typography variant="h4" component="h4" sx={headingStyles} disableGutters>
            ✵ SKILLS ✵
          </Typography>
          <Skills />
        </Container>
      </Container>
      <Footer />
    </Container>
  )
}

export default App
