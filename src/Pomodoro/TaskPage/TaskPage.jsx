import React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import "./TaskPage.css";

import Task from "../Task/Task";

import { useNavigate } from "react-router-dom";

const TaskPage = () => {
  const [allTasks, setAllTasks] = useState(
    JSON.parse(localStorage.getItem("ALL_TASKS") || "[]")
  );

  const [taskData, setTaskData] = useState({
    _id: Math.floor(Math.random() * 10000),
    title: "",
    description: "",
    time: "",
    isDone: false,
  });

  const [isEditingTask, setIsEditingTask] = useState({
    editing: false,
    editingTaskId: "",
  });

  const [timertoggle, setTimerToggle] = useState(false);
  const [tasktoggle, setTaskToggle] = useState(true);

  // const [blur, setBlur] = useState(false);
  const handleTimer = async () => {
    setTimerToggle(true);
    setTaskToggle(false);
  };

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="TaskPage animate__animated animate__fadeInLeft">
      <button
        className="my-tasks-button"
        onClick={() => {
          setTaskToggle(true);
        }}
      >
        My Tasks
      </button>
      {showAddTaskModal && (
        /* <div className=""> */
        <div className="pomodoro-add-task animate__animated animate__fadeIn">
          <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
            className=""
          >
            <button
              className="close-icon"
              onClick={() => setShowAddTaskModal(false)}
            >
              <CloseIcon fontSize="large" />
            </button>
            <input
              className="add-task-title"
              onChange={(e) =>
                setTaskData({ ...taskData, title: e.target.value })
              }
              value={taskData.title}
              required
              type="text"
              name=""
              id=""
              placeholder="Add Title"
            />
            <textarea
              className=""
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              value={taskData.description}
              required
              name=""
              id=""
              cols="34"
              rows="10"
              placeholder="Add Description"
            ></textarea>
            <input
              className=""
              required
              onChange={(e) =>
                setTaskData({ ...taskData, time: e.target.value })
              }
              value={taskData.time}
              type="number"
              name=""
              id=""
              placeholder="Add Time in Minutes"
            />
            <div className="add-pomodoro-buttons">
              <button
                onClick={() => {
                  setShowAddTaskModal(false);
                  setTaskData({
                    title: "",
                    description: "",
                    time: "",
                    isDone: false,
                  });
                }}
                className=""
              >
                Cancel
              </button>
              {isEditingTask.editing ? (
                <button type="submit" className="">
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAddTaskModal(false);
                    setTaskData({
                      title: "",
                      description: "",
                      time: "",
                      isDone: false,
                    });
                    setAllTasks([...allTasks, taskData]);
                    localStorage.setItem(
                      "ALL_TASKS",
                      JSON.stringify([...allTasks, taskData])
                    );
                  }}
                  className=""
                >
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
        /* </div> */
      )}
      {tasktoggle ? (
        <div className={`pomodoro-tasks ${showAddTaskModal ? "blur" : ""}`}>
          <p className="pomodoro-task-count">
            You have {allTasks.length} tasks for today, All the Best!
          </p>

          <div className="task-list-container px-4 py-12 bg-serene-white rounded-xl my-8 mx-12 animate__animated animate__fadeInUp">
            <div className="pomodoro-my-tasks">
              <p className="my-tasks-text">My Tasks</p>
              <button
                onClick={() => {
                  setShowAddTaskModal(true);
                  setTaskData({
                    title: "",
                    description: "",
                    time: "",
                    isDone: false,
                  });
                  setIsEditingTask({
                    editing: false,
                    editingTaskId: "",
                  });
                }}
                className="add-icon"
              >
                <AddBoxIcon fontSize="large" />
              </button>
              <button
                className="delete-all-tasks"
                onClick={() => {
                  setAllTasks([]);
                  localStorage.removeItem("ALL_TASKS");
                }}
              >
                Delete All Tasks
              </button>
            </div>
            <div className="task-list flex flex-col gap-6 items-center">
              {allTasks.map((task) => {
                return (
                  <div
                    key={task._id}
                    onClick={() => {
                      localStorage.setItem("ACTIVE_TASK", JSON.stringify(task));
                      // navigate(`/timer`);
                      setTaskToggle(false);
                    }}
                    className="singleTask task-details"
                  >
                    <input
                      onClick={(e) => {
                        e.stopPropagation();
                        task.isDone = !task.isDone;
                      }}
                      type="checkbox"
                      name=""
                      id=""
                      className="task-checkbox"
                      required
                    />
                    <p
                      className={`task-title ${
                        task.isDone ? "line-through" : "no-underline"
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="task-action-buttons">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAddTaskModal(true);
                          setTaskData({
                            title: task.title,
                            description: task.description,
                            time: task.time,
                          });
                        }}
                        className="action-edit-button"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsEditingTask({
                            editing: true,
                          });
                          // deleteTask(task._id);
                        }}
                        className="action-delete-button"
                      >
                        {/* <DeleteIcon /> */}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Task />
      )}
    </div>
  );
};

export default TaskPage;
