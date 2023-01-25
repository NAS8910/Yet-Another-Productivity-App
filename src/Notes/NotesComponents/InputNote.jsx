import React, { useRef, useEffect } from "react";

const InputNote = ({ setNote, setForm, selectedNote, setSelectedNote }) => {
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
    if (selectedNote) {
      titleRef.current.value = selectedNote.title;
      contentRef.current.value = selectedNote.content;
    }
  });

  const generateNote = (title, content) => {
    return {
      id: new Date().getTime(),
      title: title,
      content: content,
      tags: content
        .split(" ")
        .filter((w) => w.startsWith("#"))
        .map((w) => w.substring(1)),
      colorCode: 1,
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (titleRef.current.value && contentRef.current.value) {
      if (selectedNote) {
        setNote((prev) => prev.filter((e) => e !== selectedNote));
      }
      setNote((prev) => [
        ...prev,
        generateNote(titleRef.current.value, contentRef.current.value),
      ]);

      setForm(false);
    } else {
      alert("Add content");
      if (titleRef.current.value === "") {
        titleRef.current.focus();
      } else {
        contentRef.current.focus();
      }
    }

    setSelectedNote();
  };

  const handleTitleDown = (ev) => {
    if (ev.keyCode === 13) {
      contentRef.current.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="add-note-details animate__animated animate__fadeInLeft"
    >
      <input
        ref={titleRef}
        className="add-note-title"
        placeholder="Note Title"
        onKeyDown={handleTitleDown}
        required
      />
      <textarea
        ref={contentRef}
        className="add-note-textarea"
        placeholder="Your Notes here..."
        spellCheck="false"
        cols={10}
        rows={6}
        required
      />
      <div type="submit" className="bg-primary border-0 p-2">
        {selectedNote ? (
          <button className="add-a-note-button">Save</button>
        ) : (
          <button className="add-a-note-button">Add a Note</button>
        )}
      </div>
    </form>
  );
};

export default InputNote;
