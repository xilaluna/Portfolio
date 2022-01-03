import React from "react"
import Grid from "@mui/material/Grid"
import ListCard from "./ListCard"
import data from "../../assets/data/eduandexp.json"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"

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

const eduStyles = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    pt: 2,
  },
})

const EduAndExp = () => {
  return (
    <Grid container item>
      <Grid item md={6} sm={6} xs={12} sx={[eduBorder]}>
        <ListCard
          name={data[0].name}
          list={data[0].list}
          titleIcon={<SchoolIcon />}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={12} sx={eduStyles}>
        <ListCard
          name={data[1].name}
          list={data[1].list}
          titleIcon={<WorkIcon />}
        />
      </Grid>
    </Grid>
  )
}

export default EduAndExp
