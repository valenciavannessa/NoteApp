import React from "react";

export default function Navbar({ onSearch }) {
  return (
    <div className="navbar-container">
      <h1>NOTES APP</h1>
      <div>
        <form>
          <input
            id="searchNoteTitle"
            type="text"
            placeholder="Search by Title"
            onChange={onSearch}
          />
        </form>
      </div>
    </div>
  );
}
