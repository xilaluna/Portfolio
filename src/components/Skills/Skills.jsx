import React from "react"
import Grid from "@mui/material/Grid"
import Skill from "./Skill/Skill"

const mediumBorderRightStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: "1px solid black",
  },
})

const mediumBorderBottomStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderBottom: "1px solid black",
  },
})

const smallRightBottomStyles = (theme) => ({
  [theme.breakpoints.only("sm")]: {
    borderRight: "1px solid black",
  },
})

const smallBorderBottomStyles = (theme) => ({
  [theme.breakpoints.only("sm")]: {
    borderBottom: "1px solid black",
  },
})

const extraSmallItemStyles = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    borderBottom: "1px solid black",
  },
})

const Skills = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[
          mediumBorderRightStyles,
          mediumBorderBottomStyles,
          smallRightBottomStyles,
          smallBorderBottomStyles,
          extraSmallItemStyles,
        ]}
      >
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
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[
          mediumBorderRightStyles,
          mediumBorderBottomStyles,
          smallBorderBottomStyles,
          extraSmallItemStyles,
        ]}
      >
        <Skill
          name={"Databases"}
          skills={[
            { skill: "MongoDB", level: 100 },
            { skill: "SQLite", level: 84 },
            { skill: "MySQL", level: 67 },
          ]}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[
          mediumBorderBottomStyles,
          smallBorderBottomStyles,
          smallRightBottomStyles,
          extraSmallItemStyles,
        ]}
      >
        <Skill
          name={"Backend"}
          skills={[
            { skill: "Node.js + Express.js", level: 97 },
            { skill: "Flask", level: 75 },
            { skill: "Django", level: 54 },
          ]}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[mediumBorderRightStyles, smallBorderBottomStyles, extraSmallItemStyles]}
      >
        <Skill
          name={"Frontend"}
          skills={[
            { skill: "Handlebars", level: 95 },
            { skill: "JQuery", level: 86 },
            { skill: "React", level: 80 },
            { skill: "Jinja2", level: 80 },
          ]}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[mediumBorderRightStyles, smallRightBottomStyles, extraSmallItemStyles]}
      >
        <Skill
          name={"DevOps"}
          skills={[
            { skill: "Git Version Control", level: 100 },
            { skill: "Heroku", level: 100 },
            { skill: "CapRover", level: 83 },
            { skill: "Docker", level: 78 },
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skill
          name={"Testing"}
          skills={[
            { skill: "Mocha & Chai", level: 80 },
            { skill: "Unit / Integration (Overall Strategy)", level: 67 },
            { skill: "OpSec Testing & Hardening", level: 64 },
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default Skills
