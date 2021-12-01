import React from "react"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"
import thumbBoringStocks from "../../assets/images/boringstocks.png"
import thumCoinStamp from "../../assets/images/coinstamp.png"

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
          subtitle={"A minimalistic stock information website for the average trader."}
          description={
            "BoringStocks was a collaboration project where I worked with a team of coders to create a lightweight stock information site that’s designed to be lightning fast. Specifically, I programmed the back-end, connecting the web application to our in house API. Furthermore my team and I wanted to finish the application on a short schedule so we opted to use an agile methodology to ensure our productivity was at its most efficient."
          }
          image={thumbBoringStocks}
          links={[
            { name: "GitHub", link: "https://github.com/BoringStocks/BoringStocks" },
            { name: "|", link: "none" },
            { name: "Live", link: "https://boringstocks.live" },

            { name: "|", link: "none" },

            {
              name: "ProductHunt",
              link: "https://www.producthunt.com/posts/boringstocks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boringstocks",
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ height: "100%" }}>
        <Project
          title={"CoinStamp"}
          subtitle={"Use decentralized currencies to buy and print your postage today."}
          description={
            "For this personal project I wanted to create a single session based web application that allows users to buy USPS postage with crypto currencies. Sessions are used instead of direct collections because I wanted to create a quick one stop shop where users dont have to sign up or log in, in return this creates an user environment where privacy is at the utmost priority."
          }
          image={thumCoinStamp}
          links={[{ name: "GitHub", link: "https://github.com/xiluna/CoinStamp" }]}
        />
      </Grid>
    </Grid>
  )
}

export default Projects
