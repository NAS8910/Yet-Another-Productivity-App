import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import User from "./maindashboard/User";
import Allprojects from "./components/Allprojects";
import Calender from "./components/Calender";

import AllTodo from "./components/AllTodo";
import EditTodo from "./components/EditTodo";
import useLocalStorage from "use-local-storage";

// import Main from './components/Main';

// import Sidebar from './components/Sidebar';
// import Parikshit from './components/Parikshit';
import TodoDashboard from "./TodoDashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./components/AuthPages/Login";
import SignUp from "./components/AuthPages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/AuthPages/ProtectedRoute";
import MainDashboard from "./maindashboard/MainDashboard";
import { TodoContextProvider } from "./context";

import WaterRemainder from "./maindashboard/Water Pages/WaterRemainder";
import TaskPage from "./Pomodoro/TaskPage/TaskPage";
import Task from "./Pomodoro/Task/Task";
import Notesmain from "./Notes/Notesmain";
import TodoApp from "./Todo/TodoApp";
import { AppProvider } from "./Todo/context";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "mui"
  );
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/home" element={<MainDashboard/>} /> */}

          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <TodoContextProvider>
                  <TodoDashboard />
                </TodoContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <MainDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/planner"
            element={
              <ProtectedRoute>
                <AppProvider>
                  <TodoApp />
                </AppProvider>
              </ProtectedRoute>
            }
          />

          {/* Added New Path for Water page */}
          {/* <Route path="/water" element={
          <ProtectedRoute>
            <WaterRemainder />
          </ProtectedRoute>
        } /> */}
          <Route
            path="/taskPage"
            element={
              <ProtectedRoute>
                <TaskPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/timer"
            element={
              <ProtectedRoute>
                <Task />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Notesmain />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
