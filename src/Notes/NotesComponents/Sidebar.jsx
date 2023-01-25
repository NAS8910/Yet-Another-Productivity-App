import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={process.env.PUBLIC_URL + "/icons/notebox.svg"} alt="notebox" />
    </div>
  );
};

export default Sidebar;
