import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PauseIcon from "@mui/icons-material/Pause";

import "./Task.css";
import BreakTimer from "../BreakTimer/BreakTimer";

const Task = () => {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("ACTIVE_TASK") || "")
  );
  const [time, setTime] = useState(Number(task.time) * 60);
  const [currentTime, setCurrentTime] = useState(time);
  const [isPaused, setIsPaused] = useState(true);
  const [isBreak, setIsBreak] = useState(false);

  console.log(task);

  const remainingTime = (seconds) => {
    const remainingMinutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${remainingMinutes}m : ${remainingSeconds}s`;
  };

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        if (currentTime > 0) {
          setCurrentTime((second) => second - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [currentTime, isPaused]);

  return (
    <div className="Task animate__animated animate__fadeInUp">
      <div className="task-container bg-serene-red-light px-24 pt-16 pb-16 mx-8 my-4">
        <div className="my-task-container grid grid-cols-2 rounded-2xl bg-serene-white border-serene-yellow">
          <div className="task-timer-container px-4 pt-16 pb-4 flex flex-col items-center">
            {isBreak ? (
              <BreakTimer
                time={time}
                setCurrentTime={setCurrentTime}
                setIsPaused={setIsPaused}
                isBreak={isBreak}
                setIsBreak={setIsBreak}
                remainingTime={remainingTime}
              />
            ) : (
              <div className="flex flex-col items-center">
                <div className="timer-container">
                  <CircularProgressbar
                    value={currentTime}
                    maxValue={time}
                    minValue={0}
                    strokeWidth={8}
                    counterClockwise={true}
                    text={remainingTime(currentTime)}
                    styles={buildStyles({
                      pathColor: "var(--accent2)",
                      textColor: "var(--text-primary)",
                      textSize: "12px",
                      pathTransitionDuration: 1,
                      trailColor: "var(--background2)",
                    })}
                  />
                </div>
                <div className="timer-action-buttons-container flex gap-8 items-center mt-8">
                  {isPaused ? (
                    <button
                      onClick={() => setIsPaused(false)}
                      className="timer-action-button"
                    >
                      <PlayArrowIcon
                        style={{ color: "#1c1c1c" }}
                        fontSize="large"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsPaused(true)}
                      className="timer-action-button"
                    >
                      <PauseIcon
                        style={{ color: "#1c1c1c" }}
                        fontSize="large"
                      />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsPaused(true);
                      setCurrentTime(time);
                    }}
                    className="timer-action-button"
                  >
                    <RestartAltIcon
                      style={{ color: "#1c1c1c" }}
                      fontSize="large"
                    />
                  </button>
                </div>
                <div className="timer-break-buttons-container mt-4">
                  {isBreak ? (
                    <button
                      onClick={() => setIsBreak(false)}
                      className="timer-break-button"
                    >
                      Work
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsBreak(true)}
                      className="timer-break-button"
                    >
                      Break
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="task-details-container px-4 pt-16 pb-4">
            <p className="task-details-title">{task.title}</p>
            <p className="task-details-description">{task.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
