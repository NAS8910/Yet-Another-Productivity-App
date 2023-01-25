import React from 'react'
import AddNewTodo from './AddNewTodo'
import Allprojects from './Allprojects'
import Calender from './Calender'
import User from '../maindashboard/User'

//this is sidebar and i am commenting

function Sidebar({children}) {
  return (
    <div className='Sidebar'>
      {children}
     
    </div>
  )
}

export default Sidebar