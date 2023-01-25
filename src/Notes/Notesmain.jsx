import React, { useState } from "react";
import Notes from "./NotesComponents/Notes";
import SearchBar from "./NotesComponents/SearchBar";
// import TagsBar from "./NotesComponents/TagsBar";
import EmptyNoteSvg from "./NotesComponents/EmptyNoteSvg";
import initialData from "./NotesUtils/Notesutils";

import AddNote from "./NotesComponents/AddNote";
import InputNote from "./NotesComponents/InputNote";
import Sidebar from "./NotesComponents/Sidebar";
import "./Notes.css";

function Notesmain() {
  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState(initialData);
  const [selectedNote, setSelectedNote] = useState(initialData);
  const [query, setQuery] = useState("");

  const selectNote = (e) => {
    setShowForm(true);
    setSelectedNote(e);
  };

  const deleteNote = (id) => {
    setNote((prev) => prev.filter((e) => e.id !== id));
  };

  let filteredNote = note.filter(
    (e) =>
      e.content.toLowerCase().includes(query) ||
      e.title.toLowerCase().includes(query)
  );

  return (
    <div
      style={{ color: "white" }}
      className="Notes-app animate__animated animate__fadeInLeft"
    >
      <div className="display-notes">
        {showForm && (
          <InputNote
            setNote={setNote}
            setForm={setShowForm}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
        )}
        <header className="flex justify-end sm:justify-between items-center mb-5">
          {/* <TagsBar notes={note} onSetQuery={setQuery} /> */}
          <SearchBar onSetQuery={setQuery} />
        </header>
      </div>
      <div className="notes-saved">
        {filteredNote.length ? (
          <Notes
            notelist={filteredNote}
            onDelete={deleteNote}
            onEdit={selectNote}
            setForm={setShowForm}
            query={query}
          />
        ) : (
          <EmptyNoteSvg setShowForm={setShowForm} note={note} />
        )}
      </div>
      <AddNote
        isFormShown={showForm}
        setForm={setShowForm}
        selectNote={setSelectedNote}
      />
    </div>
  );
}

export default Notesmain;
