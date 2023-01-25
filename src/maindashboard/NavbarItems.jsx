import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { ExploreIcon, PlannerIcon, PomodoroIcon, NotesIcon } from "./SVG_Icons";

export default function NavbarItems(navbar) {
  // console.log("this is navlink : " + navbar.navLinkIcon);
  return (
    <div>
      <button className="navbar-links">
        {/* <img src={navbar.icon} alt={navbar.alt} /> */}
        {/* <PlannerIcon width="40" height="40" className="navbar-icon" /> */}
        <p>{navbar.navLinkName}</p>
      </button>
    </div>
  );
}
