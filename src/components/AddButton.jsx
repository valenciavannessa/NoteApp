import React from "react";
import AddForm from "./AddForm";

export default function AddButton({
  onClickAddButton,
  isContentVisible: isContentVisible,
  closeContent: closeContent,
  addNote,
}) {
  return (
    <div>
      <button onClick={onClickAddButton} className="btn-create">
        <img src="add.svg" />
        CREATE NOTE
      </button>

      {isContentVisible ? (
        <AddForm closeForm={closeContent} addNote={addNote} />
      ) : (
        <></>
      )}
    </div>
  );
}
