import React from "react"
import Typography from "@mui/material/Typography"
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
    <>
      <Typography variant="h4" component="h4" sx={{ textAlign: "center", paddingBottom: 1 }}>
        ✵ PROJECTS ✵
      </Typography>
      <Grid container spacing={2}>
        {projects}
      </Grid>
    </>
  )
}

export default Projects
