import React from "react"
import LinkIcon from "@mui/icons-material/Link"
import LanguageIcon from "@mui/icons-material/Language"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"

function getFeature(str, link) {
  switch (str) {
    case "GitHub":
      return <Button href={link}>GitHub</Button>
    case "Live":
      return <Button href={link}>Website</Button>
    case "ProductHunt":
      return <Button href={link}>Product Hunt</Button>
    default:
      return <Button href={link}>Link ?</Button>
  }
}

const Links = (props) => {
  const { name, link } = props
  const button = getFeature(name, link)
  return <React.Fragment>{button}</React.Fragment>
}

export default Links
