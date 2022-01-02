import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import ListCard from "./ListCard"
import data from "../../assets/data/about.json"

const cardContentStyles = (theme) => ({
  px: 0,
  py: 0,
})

const mediumBorderRightStyles = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    borderRight: "2px solid black",
  },
})

const orderStyles = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    borderRight: "2px solid black",
  },
})

const About = () => {
  return (
    <Grid container>
      <Grid item md={3.5} sm={4} xs={12} sx={[mediumBorderRightStyles]}>
        <ListCard name={data[0].name} list={data[0].list} />
      </Grid>
      <Grid item md={5} sm={4} xs={12} sx={[mediumBorderRightStyles]}>
        <Card elevation={0} square sx={{ px: 2 }}>
          <CardContent sx={cardContentStyles}>
            <Typography variant="p" sx={{ fontSize: 18 }}>
              {data[1].description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3.5} sm={4} xs={12}>
        <ListCard name={data[2].name} list={data[2].list} />
      </Grid>
    </Grid>
  )
}

export default About
