import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NotesList";
import Navbar from "./Navbar";
import AddButton from "./AddButton";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      activeNotes: notes.filter((note) => note.archived === false),
      archivedNotes: notes.filter((note) => note.archived === true),
      isContentVisible: false,
      searchQuery: "",
    };

    this.onClickAddButtonHandler = this.onClickAddButtonHandler.bind(this);
    this.onCloseButtonHandler = this.onCloseButtonHandler.bind(this);
    this.onCreateNoteEventHandler = this.onCreateNoteEventHandler.bind(this);
    this.onClickDeleteButtonHandler =
      this.onClickDeleteButtonHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onClickAddButtonHandler() {
    this.setState({ isContentVisible: true });
  }

  onCloseButtonHandler() {
    this.setState({ isContentVisible: false });
  }

  onCreateNoteEventHandler({ title, body }) {
    this.setState((state) => {
      const newNote = {
        id: +new Date(),
        title: title,
        body: body,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      const newNotes = [...state.notes, newNote];

      return {
        notes: newNotes,
        activeNotes: newNotes.filter((note) => note.archived === false),
        archivedNotes: newNotes.filter((note) => note.archived === true),
      };
    });
  }

  onClickDeleteButtonHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);

    this.setState({
      notes: newNotes,
      activeNotes: newNotes.filter((note) => note.archived === false),
      archivedNotes: newNotes.filter((note) => note.archived === true),
    });
  }

  onActiveHandler(id) {
    const newNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );

    this.setState({
      notes: newNotes,
      activeNotes: newNotes.filter((note) => note.archived === false),
      archivedNotes: newNotes.filter((note) => note.archived === true),
    });
  }

  onArchiveHandler(id) {
    const newNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );

    this.setState({
      notes: newNotes,
      activeNotes: newNotes.filter((note) => note.archived === false),
      archivedNotes: newNotes.filter((note) => note.archived === true),
    });
  }

  onSearchEventHandler(event) {
    const searchQuery = event.target.value.toLowerCase();

    this.setState((state) => {
      const filteredNotes = state.notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery)
      );

      return {
        searchQuery: searchQuery,
        activeNotes: filteredNotes.filter((note) => note.archived === false),
        archivedNotes: filteredNotes.filter((note) => note.archived === true),
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <header>
          <Navbar onSearch={this.onSearchEventHandler} />
        </header>
        <main>
          <AddButton
            onClickAddButton={this.onClickAddButtonHandler}
            isContentVisible={this.state.isContentVisible}
            closeContent={this.onCloseButtonHandler}
            addNote={this.onCreateNoteEventHandler}
          />
          <h2 className="status-note-title">ACTIVE NOTES</h2>
          {this.state.activeNotes.length === 0 ? (
            <h4 className="notes-list-empty-message">Note Empty</h4>
          ) : (
            <NoteList
              notes={this.state.activeNotes}
              onDelete={this.onClickDeleteButtonHandler}
              onActiveArchived={this.onArchiveHandler}
            />
          )}

          <h2 className="status-note-title">ARCHIVED NOTES</h2>
          {this.state.archivedNotes.length === 0 ? (
            <h4 className="notes-list-empty-message">Note Empty</h4>
          ) : (
            <NoteList
              notes={this.state.archivedNotes}
              onDelete={this.onClickDeleteButtonHandler}
              onActiveArchived={this.onActiveHandler}
            />
          )}
        </main>
      </div>
    );
  }
}

export default NotesApp;
