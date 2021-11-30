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
      <main>
        <Container sx={sectionStyles} disableGutters>
          <Hero />
        </Container>
        <Container sx={sectionStyles} disableGutters>
          <Typography variant="h4" component="h4" sx={headingStyles}>
            ✵ PROJECTS ✵
          </Typography>
          <Projects />
        </Container>
        <Container sx={[sectionStyles, { borderBottom: `2px solid black` }]} disableGutters>
          <Typography variant="h4" component="h4" sx={headingStyles}>
            ✵ SKILLS ✵
          </Typography>
          <Skills />
        </Container>
      </main>
      <Footer />
    </Container>
  )
}

export default App
