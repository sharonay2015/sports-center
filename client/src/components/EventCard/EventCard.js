import React from 'react'
import { Card } from 'semantic-ui-react'

// const items = [
//   {
//     header: 'Event',
//     description: 'Event 1 in the mountains riding cool bikes.',
//     meta: '4/15/2018',
//   },
//   {
//     header: 'Event',
//     description: 'Event 2 at the big gym doing stuff.',
//     meta: '3/30/2018',
//   },
//   {
//     header: 'Event',
//     description: 'Competition to see who can do stuff better than other people.',
//     meta: '3/30/2018',
//   }
// ]

// const EventCard = () => (
//   <Card.Group centered items={items} />
// )

const EventCard = ({ id, location, event, link, date, details }) => (

  <Card color='teal'> 
    <Card.Content>
      <Card.Header>{event}</Card.Header>
      <Card.Meta>{date}</Card.Meta>
      <Card.Description>{details} </Card.Description>
      <Card.Content href ={link}>More Information</Card.Content>
      
     
        
      </Card.Content>
    </Card>
)

export default EventCard

