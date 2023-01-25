import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteItem = ({ e, onDelete, onEdit }) => {
  const [btns, setBtns] = useState("block");

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <li
      className="note-item bg-accent text-white m-1 py-6 px-7 relative flex flex-wrap justify-between items-start w-full sm:w-auto sm:m-3"
      key={e.id}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
    >
      <div className="">
        <h2 className="font-bold">{e.title}</h2>
        <p>{e.content}</p>
        {/* <h6 className="flex">
          {e.tags.map((tag) => (
            <p>#{tag}</p>
          ))}
        </h6> */}
      </div>
      {isHovering && (
        <div className="notes-action-buttons animate__animated animate__bounceIn">
          <button onClick={() => onDelete(e.id)}>
            <DeleteIcon style={{ color: "var(--dark-grey)" }} />
          </button>
          <button onClick={() => onEdit(e)} className="notes-edit-button">
            <EditIcon style={{ color: "var(--dark-grey)" }} />
          </button>
        </div>
      )}
    </li>
  );
};

export default NoteItem;
