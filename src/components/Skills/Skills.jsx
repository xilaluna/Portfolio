import React from "react"
import Grid from "@mui/material/Grid"
import Skill from "./Skill/Skill"

const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Skill
        name={"Languages"}
        skills={[
          { skill: "Python", level: 100 },
          { skill: "JavaScript", level: 100 },
          { skill: "HTML & XML", level: 100 },
          { skill: "CSS", level: 85 },
          { skill: "Solidity", level: 62 },
        ]}
      />
      <Skill
        name={"Databases"}
        skills={[
          { skill: "MongoDB", level: 100 },
          { skill: "SQLite", level: 84 },
          { skill: "MySQL", level: 67 },
        ]}
      />
      <Skill
        name={"Backend"}
        skills={[
          { skill: "Node.js + Express.js", level: 97 },
          { skill: "Flask", level: 75 },
          { skill: "Django", level: 54 },
        ]}
      />
      <Skill
        name={"Frontend"}
        skills={[
          { skill: "Handlebars", level: 95 },
          { skill: "JQuery", level: 86 },
          { skill: "React", level: 80 },
          { skill: "Jinja2", level: 80 },
        ]}
      />
      <Skill
        name={"DevOps"}
        skills={[
          { skill: "Git", level: 100 },
          { skill: "Heroku", level: 100 },
          { skill: "CapRover", level: 83 },
          { skill: "Docker", level: 78 },
        ]}
      />
      <Skill
        name={"Testing"}
        skills={[
          { skill: "Mocha & Chai", level: 80 },
          { skill: "Unit / Integration (Overall Strategy)", level: 67 },
          { skill: "OpSec Testing & Hardening", level: 64 },
        ]}
      />
    </Grid>
  )
}

export default Skills
