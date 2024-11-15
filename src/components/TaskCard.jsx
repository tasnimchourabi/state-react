import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import EditTask from './EditTask';
const TaskCard = ({el,index,del,edit,comp}) => {
  return (
    <div className='card'>
     <Card style={{width:"900px",margin:"15px"}}> 
      <Card.Header as="h5">Task number {index+1}</Card.Header>
      <Card.Body>
        <Card.Title className={el.Done===true ? "termine":"encours"}>{el.tache}</Card.Title>
        <Card.Text>
          This task is {el.Done===true ? "Already completed ":"Not Done Yet"} 
        </Card.Text>
        <Button onClick={()=>comp(el.id)} style={{margin:"5px",width:"100px"}} variant="info">Complete</Button>
        <Button onClick={()=>del(el.id)} style={{margin:"5px",width:"100px"}} variant="danger">Delete</Button>
        <EditTask el={el} edit={edit} />
      </Card.Body>
    </Card> 
    </div>
  )
}

export default TaskCard
