import React from "react"
import Grid from "@mui/material/Grid"
import data from "../../assets/data/skills-data.json"
import Skill from "./Skill/Skill"

const Skills = () => {
  const skills = data.map((obj) => {
    const { name, skills } = obj
    return <Skill name={name} skills={skills} />
  })

  return (
    <Grid container spacing={2}>
      {skills}
    </Grid>
  )
}

export default Skills
