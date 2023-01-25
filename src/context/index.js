import React, {createContext, useState} from 'react'
import { useProjects, useTodos } from '../hooks';

const TodoContext = createContext()


//this is index file to context directory. 

function TodoContextProvider({children}) 
{

  const defaultProject = 'today'  
  const [selectedProject, setSelectedProject ] = useState(defaultProject);

  const todos = useTodos()
  const projects = useProjects(todos)

  return (
    <TodoContext.Provider 
        value={
           { 
                selectedProject,
                setSelectedProject,
                todos,
                projects
            }
        }
    >
        {children}
    </TodoContext.Provider>
  )
}

export {TodoContextProvider, TodoContext}
