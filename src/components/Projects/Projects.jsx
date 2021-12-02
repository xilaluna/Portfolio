import React from "react"
import Project from "./Project/Project"
import Grid from "@mui/material/Grid"
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
      <Grid item xs={12} md={6} sx={[borderBottomMediumStyles, smallItemStyles]}>
        <Project
          title={"CoinStamp"}
          subtitle={"Use decentralized currencies to buy and print your postage today."}
          description={
            "CoinStamp is a single session based web application that allows users to buy USPS postage with crypto currencies. Sessions are used instead of direct collections because I wanted to create a quick one stop shop where users dont have to sign up or log in, in return this creates an user environment where privacy is at the utmost priority."
          }
          image={thumbCoinStamp}
          links={[{ name: "GitHub", link: "https://github.com/xiluna/CoinStamp" }]}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={[mediumItemStyles, smallItemStyles, paddingMediumStyles]}>
        <Project
          title={"Python Steganography"}
          subtitle={"Encode and decode images with python"}
          description={
            "This is a personal project of mine in which I created a python script to allow users to encode secret messages into their chosen image. In addition I also allow for the decoding of encoded images. I was able to do this by mainpulaing the least significant bit of the red channel for each pixel. "
          }
          image={thumbPythonStego}
          links={[{ name: "GitHub", link: "https://github.com/xiluna/Python-Steganography" }]}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={[paddingMediumStyles]}>
        <Project
          title={"Breakout OOP"}
          subtitle={
            "A version of Breakout that's based on the MDN 2d Breakout tutorial but restructured into OOP. "
          }
          description={
            "For this project I took the challenge of diving into object oriented programming(OOP) by coding a well known game “Breakout” into this newly learned programming paradigm. I used the MDN 2d Breakout tutorial as a base for restructuring. Additionally I added eslint and bundled the program with webpack."
          }
          image={thumbBreakout}
          links={[{ name: "GitHub", link: "https://github.com/xiluna/Breakout" }]}
        />
      </Grid>
    </Grid>
  )
}

export default Projects
