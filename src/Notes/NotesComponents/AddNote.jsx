import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const AddNote = ({ isFormShown, setForm, selectNote }) => {
  const handleClick = () => {
    selectNote();
    setForm(!isFormShown);
  };
  return (
    <div className="plus-note-button-container">
      <button className="plus-note-button" onClick={handleClick}>
        {isFormShown ? (
          <CloseIcon style={{ color: "#1c1c1c" }} />
        ) : (
          <AddIcon style={{ color: "#1c1c1c" }} />
        )}
      </button>
    </div>
  );
};

export default AddNote;
