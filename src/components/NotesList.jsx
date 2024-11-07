import React from "react";
import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDelete, onActiveArchived }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          {...note}
          onDelete={onDelete}
          onActiveArchived={onActiveArchived}
        />
      ))}
    </div>
  );
}
