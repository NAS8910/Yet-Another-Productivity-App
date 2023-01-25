import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Yapa-Logo import
// import yapaLogo from "./images/Yapa-LOGO-T.svg"
import { YapaLogo } from "./SVG_Icons";

import NavbarItems from "./NavbarItems";
import { ExploreIcon, PlannerIcon, PomodoroIcon, NotesIcon } from "./SVG_Icons";
import { Home } from "./images/Home.svg";

import User from "./User";
import Quotes from "./Quotes";

// import { Ocards, VideoCards } from "./Cards";

import "./maindashboard-styles.css";

import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";
import WaterRemainder from "./Water Pages/WaterRemainder";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";

//MUI Imports
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "./BasicMenu";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
} from "./Avatar";

import Youtube from "./Youtube/Youtube";

import useLocalStorage from "use-local-storage";
import TaskPage from "../Pomodoro/TaskPage/TaskPage";
import Notesmain from "../Notes/Notesmain";

export default function MainDashboard() {
  // states
  const [toggle, setToggle] = useState(false);
  const [plantoggle, setPlantoggle] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [pomotoggle, setPomoToggle] = useState(false);
  const [exploretoggle, setExploreToggle] = useState(true);
  const [notestoggle, setNotesToggle] = useState(false);
  const [planner, setPlanner] = useState([
    {
      text: "",
      project: "",
    },
  ]);

  //react route dom
  const navigate = useNavigate();

  //get current logged in user info
  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async () => {
    // Toggle Current State (if true then false and viceversa)
    setIsShown((current) => !current);
    // setexploreToggle((current) => !current);
    // setPomoToggle((current) => !current);
  };

  const handlePomo = async () => {
    setPomoToggle(true);
    setExploreToggle(false);
    setNotesToggle(false);
  };

  const handleExplore = async () => {
    setPomoToggle(false);
    setExploreToggle(true);
    setNotesToggle(false);
  };

  const handleNotes = async () => {
    setPomoToggle(false);
    setExploreToggle(false);
    setNotesToggle(true);
  };

  //reading subcollection from this function
  const getUser = async () => {
    const q = query(collection(db, "users", user.uid, "planner"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      console.log(doc.data().project);
      setPlanner((prev) => {
        return [
          ...prev,
          {
            text: doc.data().text,
            project: doc.data().project,
          },
        ];
      });
    });
  };

  //callling the function
  // getUser();

  const handlePlanners = () => {
    setPlantoggle((prev) => !prev);
    getUser();
    console.log("the planner is : " + planner);

    planner.map((e) => {
      return <>{e.project}</>;
    });
  };

  function successNotification() {
    addNotification({
      title: "Success",
      subtitle: "You have successfully submitted",
      message: "Welcome to GeeksforGeeks",
      theme: "light",
      closeButton: "X",
      backgroundTop: "green",
      backgroundBottom: "yellowgreen",
    });
  }

  function pushNotification() {
    const date = new Date();
    const time = date.getHours();
    var checkTime;
    console.log("Time: " + time);

    Notification.requestPermission().then((perm) => {
      // alert(perm);
      if (perm === "granted") {
        const notification = new Notification("Water Break", {
          body: "Time to drink some water.",
        });
        setTimeout(() => {
          pushNotification();
          checkTime = time + 2;
        }, 4000000);
        notification.addEventListener("click", (e) => {
          setToggle((prev) => !prev);
          setTimeout(() => {
            setToggle((prev) => !prev);
          }, 15000);
        });
      } else {
        alert("Please provide the notification permission");
      }
    });
  }
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "mui" : "dark"
  );

  const switchTheme = () => {
    var newTheme;
    newTheme = theme === "mui" ? "dark" : "mui";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme} className="Main-dashboard-bg">
      <div className="main-dashboard">
        <div className="navbar">
          <div className="yapa-logo-dash">
            <YapaLogo />
          </div>
          <div
            className="nav-link"
            onClick={() => handleExplore()}
            tabIndex="1"
          >
            <ExploreIcon />
            <NavbarItems
              navLinkName="Explore"
              navLinkIcon="ExploreIcon"
              navLinkTooltip="Want motivating content?"
            />
          </div>
          <div className="nav-link" onClick={() => handlePomo()} tabIndex="2">
            <PomodoroIcon />
            <NavbarItems
              navLinkName="Pomodoro"
              navLinkIcon="PomodoroIcon"
              // function={() => {
              //   navigate("/taskPage");
              // }}
              navLinkTooltip="Lets Focus"
            />
          </div>
          <div
            className="nav-link"
            onClick={() => navigate("/planner")}
            tabIndex="3"
          >
            <PlannerIcon />
            <NavbarItems
              navLinkName="Planner"
              navLinkIcon="PlannerIcon"
              // function={() => navigate("/todo")}
              navLinkTooltip="Plan your agenda📅"
            />
          </div>
          <div className="nav-link" onClick={() => handleNotes()} tabIndex="4">
            <NotesIcon />
            <NavbarItems
              navLinkName="Notes"
              navLinkIcon="NotesIcon"
              navLinkTooltip="Write some notes📝"
            />
          </div>
        </div>
        <div className="dash-main">
          <div className="dashboard-center">
            <User />

            {/* Explore Section Begins */}

            {exploretoggle && (
              <div className="quotes-container animate__animated animate__fadeInLeft">
                <Quotes />
                <div>
                  <Youtube />
                </div>
              </div>
            )}

            {/* Pomodoro Section Begins */}

            {pomotoggle && <TaskPage />}
            {notestoggle && <Notesmain />}
          </div>
        </div>
        <div className="dashboard-popups animate__animated animate__fadeInRight">
          {toggle && <WaterRemainder />}
        </div>
        <div className="dashboard-account">
          <BasicMenu />
          <button className="theme-changer" onClick={switchTheme}>
            <WbSunnyIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

/* <div className="account-avatar">
  <button onClick={handleClick}>
    <Avatar9 width="60" height="60" />
  </button>
</div>
{isShown && (
  <div className="account-options">
    <button onClick={handleLogout}>Logout</button>
  </div>
)} */

// Should we use StrictMode or not.
// https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625#:~:text=The%20reason%20why%20this%20happens,effects%20in%20the%20render%20phase.
