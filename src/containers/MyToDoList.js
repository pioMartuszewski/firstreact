import React, { Component } from 'react' ;
import ToDoItem from '../components/MyToDoItem'
import styled from 'styled-components';

const NewToDoForm = (props) =>(
  <div>
    <input type='text' onChange = {props.onChange} value={props.draft} />       
    <button onClick = {props.onSubmit}>Add Task</button>
  </div>     
)
const Container = styled.div`
  background: blueviolet;
  margin: 0 auto;
  max-width : 600px;
  padding : 20px;
  border-radius : 5px;
  border-style : dashed;
  margin-top : 15px;
`
const Header  = styled.h1`


`


export default class MyToDoList extends Component
{
static defaultProps = {
  tasks : [
  {done : true, text : 'Go to My Practise'},
  {done : false, text : 'Lern React props and state'},
  { text : 'buy milk'},
  ],
  title : "My stuff"
}

  state = {
      tasks:this.props.tasks,
      draft:''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addTask = () => {
    const {tasks, draft} = this.state;
    const list = tasks;
    // list.push(draft);
    list.push({text : draft, done: false});
    this.setState({tasks : list, draft : ''});
  }

  removeAll = () =>{
    const list = [];
    this.setState({tasks : list, draft : 'usunieto'});
  }

  render()
  {
    const title = this.props.title;
    const {tasks, draft} = this.state;
    return(
      <Container>
        <Header>{title}</Header>
          {/* {tasks.map(t=> <div><p>{ t}</p></div>)} */}
          {/* {tasks.map(t => <ToDoItem task={t}/>)} */}
          {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
          
        <NewToDoForm 
          onChange={this.updateDraft}
          onSubmit={this.addTask}
          draft={draft}
        />
        <button onClick={this.removeAll} >Delete</button>
      </Container>
      )
  }
}