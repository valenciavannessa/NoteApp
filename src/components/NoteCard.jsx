import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/index";

export default function NoteCard({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onActiveArchived,
}) {
  return (
    <div className="note-item">
      <NoteItem
        id={id}
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
        archived={archived}
        onDelete={onDelete}
        onActiveArchived={onActiveArchived}
      />
    </div>
  );
}
