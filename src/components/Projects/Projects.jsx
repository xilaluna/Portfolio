import React from "react"
import data from "../../assets/data/projects-data.json"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"

const Projects = () => {
  const projects = data.map((obj) => {
    const { title, description, techstack, images } = obj
    return (
      <Project title={title} description={description} techstack={techstack} image={images[0]} />
    )
  })

  return (
    <Grid container spacing={2}>
      {projects}
    </Grid>
  )
}

export default Projects
