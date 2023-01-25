import React from "react";
import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PauseIcon from "@mui/icons-material/Pause";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const BreakTimer = ({
  remainingTime,
  isBreak,
  setIsBreak,
  setIsPaused,
  setCurrentTime,
  time,
}) => {
  const [breakCurrentTime, setBreakCurrentTime] = useState(300);
  const [isPausedBreak, setIsPausedBreak] = useState(true);

  useEffect(() => {
    if (!isPausedBreak) {
      const breakIntervalId = setInterval(() => {
        if (breakCurrentTime > 0) {
          setBreakCurrentTime((second) => second - 1);
        }
      }, 1000);
      return () => clearInterval(breakIntervalId);
    }
  }, [breakCurrentTime, isPausedBreak]);

  return (
    <div className="BreakTimer flex flex-col items-center">
      {/* <div className="timer-container w-2/3">
        <CircularProgressbar
          value={breakCurrentTime}
          maxValue={300}
          minValue={0}
          text={remainingTime(breakCurrentTime)}
          styles={buildStyles({
            pathColor: "#F1B814",
            textColor: "#F1B814",
            textSize: "10px",
          })}
        />
      </div> */}

      <div className="timer-container">
        <CircularProgressbar
          value={breakCurrentTime}
          maxValue={300}
          minValue={0}
          strokeWidth={8}
          counterClockwise={true}
          text={remainingTime(breakCurrentTime)}
          styles={buildStyles({
            pathColor: "var(--limited)",
            textColor: "var(--text-primary)",
            textSize: "12px",
            pathTransitionDuration: 1,
            trailColor: "var(--background2)",
          })}
        />
      </div>
      <div className="timer-action-buttons-container flex gap-8 items-center mt-8">
        {isPausedBreak ? (
          <button
            onClick={() => setIsPausedBreak(false)}
            className="timer-action-button"
          >
            <PlayArrowIcon
              style={{ color: "rgb(26,26,26)" }}
              fontSize="large"
            />
          </button>
        ) : (
          <button
            onClick={() => setIsPausedBreak(true)}
            className="timer-action-button"
          >
            <PauseIcon style={{ color: "rgb(26,26,26)" }} fontSize="large" />
          </button>
        )}
        <button
          onClick={() => {
            setIsPausedBreak(true);
            setBreakCurrentTime(300);
          }}
          className="timer-action-button"
        >
          <RestartAltIcon style={{ color: "rgb(26,26,26)" }} fontSize="large" />
        </button>
      </div>

      {/* <div className="timer-play-buttons-container flex gap-8 items-center mt-8">
        {isPausedBreak ? (
          <button
            onClick={() => setIsPausedBreak(false)}
            className="text-5xl text-serene-yellow"
          >
            <FaPlayCircle />
          </button>
        ) : (
          <button
            onClick={() => setIsPausedBreak(true)}
            className="text-5xl text-serene-yellow"
          >
            <FaPauseCircle />
          </button>
        )}
        <button
          onClick={() => {
            setIsPausedBreak(true);
            setBreakCurrentTime(300);
          }}
          className="text-xl bg-serene-yellow text-serene-text-primary px-3 py-3 rounded-full"
        >
          <VscDebugRestart />
        </button>
      </div> */}

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

      {/* <div className="restart-btn-container mt-4">
        {isBreak ? (
          <button
            onClick={() => setIsBreak(false)}
            className=" font-semibold rounded-lg px-5 py-2 border-2 border-serene-yellow text-serene-yellow"
          >
            Work
          </button>
        ) : (
          <button
            onClick={() => {
              setIsBreak(true);
            }}
            className=" font-semibold rounded-lg px-5 py-2 border-2 border-serene-yellow text-serene-yellow"
          >
            Break
          </button>
        )}
      </div> */}
    </div>
  );
};

export default BreakTimer;
