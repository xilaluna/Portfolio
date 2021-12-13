import React from "react"
import Link from "@mui/material/Link"

const Links = (props) => {
  const { name, link } = props

  return (
    <Link href={link} sx={{ paddingRight: 2 }}>
      {name}
    </Link>
  )
}

export default Links
