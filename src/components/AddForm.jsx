import React from "react";

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (this.state.title.length < this.state.maxChar) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onAddNoteHandler(event) {
    event.preventDefault();

    const newNote = {
      title: this.state.title,
      body: this.state.body,
    };

    if (newNote.title && newNote.body) {
      this.props.addNote(newNote);

      this.setState({ title: "", body: "" });

      this.props.closeForm();
    }
  }

  render() {
    return (
      <div className="form-add">
        <form onSubmit={this.onAddNoteHandler}>
          <h3>CREATE NOTE</h3>
          <p className="note-input-title-char-limit">
            Sisa karakter: {this.state.maxChar - this.state.title.length}
          </p>
          <input
            id="title"
            type="text"
            placeholder="Add Title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            id="body"
            type="text"
            placeholder="Fill Notes"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <div className="btn-group">
            <button className="btn-add" type="submit">
              Create
            </button>
            <button className="btn-close" onClick={this.props.closeForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
