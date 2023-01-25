import React,{useState} from 'react'
import TodoForm from './TodoForm';

function EditTodo() {

  const [text, setText] = useState();
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState()

  const projects = [
    {id : 1, name: "personal", numOfTodos: 0},
    {id : 2, name: "work", numOfTodos: 4},
    {id : 3, name: "other", numOfTodos: 5}
  ]
  function handleSubmit (e){

  }

  return (
    
    <div className='EditTodo'>
      <div className='header'>
        Edit Todo
      </div>
      <div className='container'>
      <TodoForm 
          handleSubmit={handleSubmit}
          
          text = {text}
          setText= {setText}
          day = {day}
          setDay = {setDay}
          time = {time}
          setTime = {setTime}
          projects= {projects}
          todoProject= {todoProject}
          setTodoProject= {setTodoProject}
         
          />
      </div>
    </div>
  )
}

export default EditTodo