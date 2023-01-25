import React from "react";

const EmptyNoteSvg = ({ note }) => {
  return (
    <div className="h-2/3 mt-12 flex-wrap flex items-center justify-start flex-col">
      {/* <img
        className="h-2/3 w-auto"
        src=
        alt="404"
      /> */}
      <div>
        {note.length ? (
          <div className="empty-svg-div" />
        ) : (
          <div className="addnote-svg-div" />
        )}
      </div>
      {note.length ? (
        <p className="no-notes">{"Oops.. not found"}</p>
      ) : (
        <p className="no-notes">Lets add some notes</p>
      )}
    </div>
  );
};

export default EmptyNoteSvg;
