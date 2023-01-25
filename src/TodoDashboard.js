
import './App.css';
import AddNewTodo from './components/AddNewTodo';
import User from './maindashboard/User';
import Allprojects from './components/Allprojects';
import Calender from './components/Calender';

import AllTodo from './components/AllTodo';
import EditTodo from './components/EditTodo';


import Main from './components/Main';

import Sidebar from './components/Sidebar';
import Parikshit from './components/Parikshit';
import { useNavigate } from 'react-router-dom';

function TodoDashboard() {

  const navigate = useNavigate();

  return (
    <div className="App">
    
      <Sidebar>
          {/* <User /> */}
          <button onClick={() => navigate("/home")}>Go back</button>
          <AddNewTodo />
          <Calender />
          <Allprojects/>
      </Sidebar>
        <Main>
          <AllTodo />
          <EditTodo />
          <Parikshit />
        </Main>
   
    </div>
  );
}

export default TodoDashboard;
