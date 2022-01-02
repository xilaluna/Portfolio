import React from "react"
import Paper from "@mui/material/Paper"
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
  fontWeight: "bold",
}

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 3, mb: 5 }}>
      <Paper elevation={15}>
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
          <Container
            sx={[sectionStyles, { borderBottom: `2px solid black` }]}
            disableGutters
          >
            <Typography variant="h4" component="h4" sx={headingStyles}>
              ✵ SKILLS ✵
            </Typography>
            <Skills />
          </Container>
        </main>
        <Footer />
      </Paper>
    </Container>
  )
}

export default App
