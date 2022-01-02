import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

const ListCard = (props) => {
  const { name, list } = props

  const listItems = list.map((obj) => {
    const { name, description, date } = obj
    return (
      <ListItem sx={{ paddingTop: 0 }}>
        <ListItemText primary={name} secondary={date} />
      </ListItem>
    )
  })
  return (
    <Card elevation={0} square sx={{ px: 2 }}>
      <CardContent sx={{ px: 0, py: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {name}
        </Typography>
        <List sx={{ py: 0 }}>{listItems}</List>
      </CardContent>
    </Card>
  )
}
export default ListCard
