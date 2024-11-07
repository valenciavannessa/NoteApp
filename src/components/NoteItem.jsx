import React from "react";

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onActiveArchived,
}) {
  return (
    <div>
      <div className="note-item-content">
        <h2 className="note-item-title">{title}</h2>
        <p className="note-item-date">{createdAt}</p>
        <p className="note-item-body">{body}</p>
      </div>
      <div className="btn-icon-group">
        <button
          className="note-item-delete-button"
          onClick={() => onDelete(id)}
        >
          <img src="delete.svg" />
        </button>
        {archived ? (
          <button
            className="note-item-archive-button"
            onClick={() => onActiveArchived(id)}
          >
            <img src="unarchive.svg" />
          </button>
        ) : (
          <button
            className="note-item-archive-button"
            onClick={() => onActiveArchived(id)}
          >
            <img src="archive.svg" />
          </button>
        )}
      </div>
    </div>
  );
}
