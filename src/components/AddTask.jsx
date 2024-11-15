import React from 'react'
import { Button, Form,  } from 'react-bootstrap'

const AddTask = () => {
  return (
    <div className='addbar'>
    <h1>To DO List App</h1>
    <form  className="mb-3" style={{width:'900px', display:'flex'}}>
        <Form.Control
          placeholder="Add your task"
        
        />
        <Button variant="info" id="button-addon2">
          Button
        </Button>
      </form>
    </div>
  )
}

export default AddTask
