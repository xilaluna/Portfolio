import React from "react"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import Bar from "./Bar"

const Skill = (props) => {
  const { name, skills } = props

  const bars = skills.map((obj) => {
    const { skill, level } = obj
    return <Bar key={skill} name={skill} level={level} />
  })
  return (
    <Card elevation={0} square sx={{ px: 2 }}>
      <CardContent sx={{ px: 0, paddingTop: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
          {name}
        </Typography>
        {bars}
      </CardContent>
    </Card>
  )
}

export default Skill
