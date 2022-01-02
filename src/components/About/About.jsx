import React from "react"
import Grid from "@mui/material/Grid"

import ListCard from "./ListCard"
import data from "../../assets/data/about.json"

const eduBorder = (theme) => ({
  [theme.breakpoints.only("sm")]: {
    borderRight: "2px solid black",
  },
  [theme.breakpoints.up("md")]: {
    borderRight: "2px solid black",
  },
  [theme.breakpoints.only("xs")]: {
    borderBottom: "2px solid black",
  },
})

const eduOrder = (theme) => ({
  [theme.breakpoints.down("md")]: {
    order: 2,
  },
})

const exOrder = (theme) => ({
  [theme.breakpoints.down("md")]: {
    order: 3,
  },
})

const About = () => {
  return (
    <Grid container>
      <Grid item md={6} sm={6} xs={12} sx={[eduOrder, eduBorder]}>
        <ListCard name={data[0].name} list={data[0].list} />
      </Grid>
      <Grid item md={6} sm={6} xs={12} sx={[exOrder]}>
        <ListCard name={data[1].name} list={data[1].list} />
      </Grid>
    </Grid>
  )
}

export default About
