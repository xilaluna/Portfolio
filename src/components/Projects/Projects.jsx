import React from "react"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"
import data from "../../assets/data/projects.json"
import SectionHeader from "../SectionHeader/SectionHeader"
import Box from "@mui/material/Box"
import ConstructionIcon from "@mui/icons-material/Construction"

const mediumItemStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: "2px solid black",
  },
})

const smallItemStyles = (theme) => ({
  [theme.breakpoints.down("md")]: {
    borderBottom: "2px solid black",
    marginBottom: 2,
    paddingBottom: 2,
  },
})

const borderBottomMediumStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderBottom: "2px solid black",
    paddingBottom: 1,
  },
})

const paddingMediumStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    paddingTop: 2,
  },
})

const Projects = () => {
  return (
    <React.Fragment>
      <Box sx={{ paddingLeft: 2 }}>
        <SectionHeader name={"Projects"} titleIcon={<ConstructionIcon />} />
      </Box>
      <Grid container item>
        <Grid
          item
          xs={12}
          md={6}
          sx={[mediumItemStyles, smallItemStyles, borderBottomMediumStyles]}
        >
          <Project
            title={data[0].title}
            subtitle={data[0].subtitle}
            description={data[0].description}
            image={data[0].image}
            links={data[0].links}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={[borderBottomMediumStyles, smallItemStyles]}
        >
          <Project
            title={data[1].title}
            subtitle={data[1].subtitle}
            description={data[1].description}
            image={data[1].image}
            links={data[1].links}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={[mediumItemStyles, smallItemStyles, paddingMediumStyles]}
        >
          <Project
            title={data[2].title}
            subtitle={data[2].subtitle}
            description={data[2].description}
            image={data[2].image}
            links={data[2].links}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={[paddingMediumStyles]}>
          <Project
            title={data[3].title}
            subtitle={data[3].subtitle}
            description={data[3].description}
            image={data[3].image}
            links={data[3].links}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Projects
