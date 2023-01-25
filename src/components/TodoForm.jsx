import React from 'react'

import {Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons'
import {DatePicker, TimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'

import DateFnsUtils from '@date-io/moment'


function TodoForm({
    handleSubmit,
    heading =false,
    text, setText,
    day, setDay,
    todoProject, setTodoProject,
    time, setTime,
    projects,
    showButtons = false,
    setShowModal = false
}) 

{


  return (
   
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit} className="TodoFormcdv">
          <div className='text'>
          {
            heading &&
            <h3>{heading}</h3>}
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder = "To do..."
              autoFocus
              />
          </div>

          <div className='remind'>
            <Bell />
            <p>Remind Me!</p>
          </div>

          <div className='pick-day'>
            <div className='title'>
              <CalendarDay />
              <p>Choose a Day</p>
            </div>
            <DatePicker 
              value={day}
              onChange={day => setDay(day)}
            />
          </div>

          <div className='pick-time'>
            <div className='title'>
              <Clock />
              <p>Choose a time</p>
            </div>
            <TimePicker value={time}
              onChange={time =>setTime(time)}
            />
          </div>

          <div className='pick-project'>
            <div className='title'>
              <Palette/>
              <p>Choose a project</p>
            </div>



           <div className='projects'> 

            {
               projects.length > 0 ? 
               projects.map(project => 
                    <div 
                      className={`project ${todoProject === project.name ? "active" : ""}` }
                      key={project.id}
                      onClick={()=> setTodoProject(project.name)}
                    >
                        {project.name}
                    </div>
                )
                :
                <div style={{color: "red"}}>
                  Please add project before proceeding!
                </div>
            }
          

           </div>
          </div>

        {
            showButtons &&
            <div>
                <div className='cancel' onClick={() => setShowModal(false)}>
                    <X size="40"/>
                </div>
                <div className='confirm'>
                    <button> + Add To Do</button>
                </div>
            </div>
        }


          

        </form>
    </MuiPickersUtilsProvider>
    
  )
}

export default TodoForm