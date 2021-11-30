import React from "react"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"
import thumbBoringStocks from "../../assets/images/boringstocks-main.png"
import thumPopcorn from "../../assets/images/popcorn-main.png"

// const gridItemStyles = (theme) => ({
//   [theme.breakpoints.up("md")]: {
//     borderRight: "1px solid black",
//   },
// })

const Projects = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Project
          title={"BoringStocks"}
          description={
            "Boring Stocks is a minimalistic stock information website for the average trader. I worked collaboratively with a team of coders and always communicated clearly to maintain an efficient workspace. Specifically, I programmed the back-end, connecting the web application to our API. "
          }
          image={thumbBoringStocks}
          techstack={["Bootstrap", "Chart.js", "HTML/CSS/JavaScript"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Project
          title={"Popcorn"}
          description={
            "Popcorn, a movie-sharing web application that connects film lovers and tv show enthusiasts alike in an interactive online community. This project challenged me to conquer new programming skills where I became proficient in utilizing databases to create seamless authentication and authorization. "
          }
          image={thumPopcorn}
          techstack={["Bootstrap", "Flask/Jinja2", "SQLite", "Python"]}
        />
      </Grid>
    </Grid>
  )
}

export default Projects
