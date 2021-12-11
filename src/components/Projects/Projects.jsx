import React from "react"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"
import data from "../../assets/data/projects.json"
import thumbBoringStocks from "../../assets/images/boringstocks.png"
import thumbCoinStamp from "../../assets/images/coinstamp.png"
import thumbPythonStego from "../../assets/images/pythonstego.png"
import thumbBreakout from "../../assets/images/breakout.png"

const mediumItemStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: "1px solid black",
  },
})

const smallItemStyles = (theme) => ({
  [theme.breakpoints.down("md")]: {
    borderBottom: "1px solid black",
    marginBottom: 2,
    paddingBottom: 2,
  },
})

const borderBottomMediumStyles = (theme) => ({
  [theme.breakpoints.up("md")]: {
    borderBottom: "1px solid black",
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
    <Grid container>
      <Grid item xs={12} md={6} sx={[mediumItemStyles, smallItemStyles, borderBottomMediumStyles]}>
        <Project
          title={data[0].title}
          subtitle={data[0].subtitle}
          description={data[0].description}
          image={thumbBoringStocks}
          links={data[0].links}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={[borderBottomMediumStyles, smallItemStyles]}>
        <Project
          title={data[1].title}
          subtitle={data[1].subtitle}
          description={data[1].description}
          image={thumbCoinStamp}
          links={data[1].links}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={[mediumItemStyles, smallItemStyles, paddingMediumStyles]}>
        <Project
          title={data[2].title}
          subtitle={data[2].subtitle}
          description={data[2].description}
          image={thumbPythonStego}
          links={data[2].links}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={[paddingMediumStyles]}>
        <Project
          title={data[3].title}
          subtitle={data[3].subtitle}
          description={data[3].description}
          image={thumbBreakout}
          links={data[3].links}
        />
      </Grid>
    </Grid>
  )
}

export default Projects
