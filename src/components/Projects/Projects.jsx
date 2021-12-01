import React from "react"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"
import thumbBoringStocks from "../../assets/images/boringstocks.png"
import thumPopcorn from "../../assets/images/popcorn-main.png"

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

const Projects = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={[mediumItemStyles, smallItemStyles]}>
        <Project
          title={"BoringStocks"}
          description={
            "Boring Stocks is a minimalistic stock information website for the average trader. I worked collaboratively with a team of coders and always communicated clearly to maintain an efficient workspace. Specifically, I programmed the back-end, connecting the web application to our API. "
          }
          image={thumbBoringStocks}
          links={[
            { name: "GitHub", link: "https://github.com/BoringStocks/BoringStocks" },
            {
              name: "ProductHunt",
              link: "https://www.producthunt.com/posts/boringstocks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boringstocks",
            },
            { name: "Live", link: "https://boringstocks.live" },
          ]}
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
          links={[
            { name: "GitHub", link: "https://github.com/BoringStocks/BoringStocks" },
            {
              name: "ProductHunt",
              link: "https://www.producthunt.com/posts/boringstocks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boringstocks",
            },
            { name: "Live", link: "https://boringstocks.live" },
          ]}
          techstack={["Bootstrap", "Flask/Jinja2", "SQLite", "Python"]}
        />
      </Grid>
    </Grid>
  )
}

export default Projects
