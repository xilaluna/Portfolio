import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import ListCard from "./ListCard"
import data from "../../assets/data/about.json"

const cardContentStyles = (theme) => ({
  px: 0,
})

const bioBorder = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: "2px solid black",
  },
  [theme.breakpoints.down("md")]: {
    borderBottom: "2px solid black",
  },
})

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

const bioOrder = (theme) => ({
  [theme.breakpoints.down("md")]: {
    order: 1,
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
      <Grid item md={3.5} sm={6} xs={12} sx={[eduOrder, eduBorder]}>
        <ListCard name={data[0].name} list={data[0].list} />
      </Grid>
      <Grid item md={5} xs={12} sx={[bioBorder, bioOrder]}>
        <Card elevation={0} square sx={{ px: 2 }}>
          <CardContent sx={cardContentStyles}>
            <Typography variant="p" sx={{ fontSize: 19 }}>
              {data[1].description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3.5} sm={6} xs={12} sx={[exOrder]}>
        <ListCard name={data[2].name} list={data[2].list} />
      </Grid>
    </Grid>
  )
}

export default About
