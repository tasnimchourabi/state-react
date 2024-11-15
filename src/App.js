
import './App.css';
import React, { Component } from 'react'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default class App extends Component {
  state={
    taskstable:[
      {
      id: Math.random(),
      tache:"Learn HTML",
      Done:true,
    },
    {
      id: Math.random(),
      tache:"Learn React",
      Done:true,
    },
    {
      id: Math.random(),
      tache:"Learn Redux",
      Done:false,
    }


  ]
  }
  handleedit=(editedTask)=>{
    this.setState({taskstable:this.state.taskstable.map(el=>el.id===editedTask.id? editedTask:el)})
  }
  handleDelete=(clickedid)=>{
    this.setState({taskstable:this.state.taskstable.filter(el=>el.id !==clickedid)})
  }
  handleComplete=(clickedid)=>{
this.setState({taskstable:this.state.taskstable.map(el=>el.id===clickedid ? {...el, Done:!el.Done}:el)})
  }
  render() {
    return (
      <div className='App'>
        
        <AddTask/>
       
        <TaskList tasks={this.state.taskstable} del={this.handleDelete} edit={this.handleedit} comp={this.handleComplete}/>
      </div>
    )
  }
}
