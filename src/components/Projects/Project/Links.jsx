import React from "react"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

function getFeature(str, link) {
  switch (str) {
    case "GitHub":
      return <Link href={link}>GitHub</Link>
    case "Live":
      return <Link href={link}>Website</Link>
    case "ProductHunt":
      return <Link href={link}>Product Hunt</Link>
    case "Docs":
      return <Link href={link}>Docs</Link>
    case "|":
      return <Typography>|</Typography>
    default:
      return <Link href={link}>Link</Link>
  }
}

const Links = (props) => {
  const { name, link } = props
  const button = getFeature(name, link)
  return <React.Fragment>{button}</React.Fragment>
}

export default Links
