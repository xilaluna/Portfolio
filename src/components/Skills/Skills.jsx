import React from "react"
import Grid from "@mui/material/Grid"
import Skill from "./Skill/Skill"
import data from "../../assets/data/skills.json"

const mediumBorderRightStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: "2px solid black",
  },
})

const mediumBorderBottomStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderBottom: "2px solid black",
  },
})

const smallRightBottomStyles = (theme) => ({
  [theme.breakpoints.only("sm")]: {
    borderRight: "2px solid black",
  },
})

const smallBorderBottomStyles = (theme) => ({
  [theme.breakpoints.only("sm")]: {
    borderBottom: "2px solid black",
  },
})

const extraSmallItemStyles = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    borderBottom: "2px solid black",
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
        <Skill name={data[0].name} skills={data[0].skills} />
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
        <Skill name={data[1].name} skills={data[1].skills} />
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
        <Skill name={data[2].name} skills={data[2].skills} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[
          mediumBorderRightStyles,
          smallBorderBottomStyles,
          extraSmallItemStyles,
        ]}
      >
        <Skill name={data[3].name} skills={data[3].skills} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={[
          mediumBorderRightStyles,
          smallRightBottomStyles,
          extraSmallItemStyles,
        ]}
      >
        <Skill name={data[4].name} skills={data[4].skills} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skill name={data[5].name} skills={data[5].skills} />
      </Grid>
    </Grid>
  )
}

export default Skills
