import { List, ListItem, ListItemText, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await axios.get<Activity[]>('https://localhost:5001/api/activities')
      setActivities(response.data)
    }
    fetchActivities()
  }, [])

  return (
    <>
      <Typography variant='h3'>Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
