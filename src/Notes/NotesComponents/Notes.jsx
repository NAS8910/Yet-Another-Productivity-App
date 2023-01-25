import React from "react";
import NoteItem from "./NoteItem";

const Notes = ({ notelist, onDelete, onEdit, setForm, query }) => {
  return (
    <div className="p-0 flex flex-wrap">
      <ul className="notes-list-display">
        {notelist.map((e) => (
          <NoteItem
            e={e}
            onDelete={onDelete}
            onEdit={onEdit}
            setForm={setForm}
          />
        ))}
        {/* {!query && (
        <li
          className="add-note-button remove-marker"
          onClick={() => setForm(true)}
        >
          <p className="text-center">Add note</p>
        </li>
        )} */}
      </ul>
    </div>
  );
};

export default Notes;
