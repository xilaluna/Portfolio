import React from "react"
import { Container } from "@mui/material"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </Container>
  )
}

export default App
