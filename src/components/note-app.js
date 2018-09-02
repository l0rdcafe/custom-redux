import React from "react";
import NoteList from "./note-list";
import NoteEditor from "./note-editor";
import PropTypes from "prop-types";

const NoteApp = ({ notes, openNoteId, onAddNote, onChangeNote, onOpenNote, onCloseNote }) => (
  <div>
    {openNoteId ? (
      <NoteEditor note={notes[openNoteId]} onChangeNote={onChangeNote} onCloseNote={onCloseNote} />
    ) : (
      <div>
        <NoteList notes={notes} onOpenNote={onOpenNote} />
        <button className="editor-button" onClick={onAddNote}>
          New Note
        </button>
      </div>
    )}
  </div>
);

NoteApp.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  openNoteId: PropTypes.number.isRequired,
  onAddNote: PropTypes.func.isRequired,
  onChangeNote: PropTypes.func.isRequired,
  onOpenNote: PropTypes.func.isRequired,
  onCloseNote: PropTypes.func.isRequired
};

export default NoteApp;
