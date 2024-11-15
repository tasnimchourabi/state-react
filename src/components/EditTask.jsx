import React, { Component } from 'react'
import { Button, Form, } from 'react-bootstrap'

export default class EditTask extends Component {
    el=this.props.el;
    state={
        showEdit:false,
        inputvalue:this.el.tache,

    }
handleshow=()=>this.setState({showEdit:!this.state.showEdit});
handlesubmit=(e)=>{
    e.preventDefault();
    const modifiedTask={
        id:this.el.id,
        done:this.el.done,
        tache:this.state.inputvalue,
    }
    if (this.state.inputvalue.trim()!==""){
        this.props.edit(modifiedTask)
    } else(alert("can not submit an empty value "))
   



}
  render() {
    return (
      <div>
       <Button style={{margin:"5px",width:"100px"}} variant="secondary" onClick={()=>this.setState({showEdit:!this.state.showEdit})}>Edit</Button> 
      
       {
        this.state.showEdit ?  <form  onSubmit={this.handlesubmit} className="mb-3" style={{display:'flex'}}>
        <Form.Control
          placeholder="Edit task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={this.state.inputvalue}
          onChange={(e)=>this.setState({inputvalue :e.target.value})}
        />
        <Button variant="success" id="button-addon2" type='submit'>
          Submit
        </Button>
      </form>:null
       }
      </div>
    )
  }
}
