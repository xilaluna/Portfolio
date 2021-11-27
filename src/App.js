import React from "react"
import Container from "@mui/material/Container"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"

const sectionStyles = {
  borderTop: `2px solid black`,
  borderBottom: `2px solid black`,
  my: [1, 1],
  py: [5, 5],
}

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <main>
        <Container sx={sectionStyles}>
          <Hero />
        </Container>
        <Container sx={sectionStyles}>
          <Projects />
        </Container>
        <Container sx={sectionStyles}>
          <Skills />
        </Container>
      </main>
      <Footer />
    </Container>
  )
}

export default App
