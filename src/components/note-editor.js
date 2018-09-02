import React from "react";
import PropTypes from "prop-types";

const NoteEditor = ({ note, onChangeNote, onCloseNote }) => (
  <div>
    <div>
      <textarea
        className="editor-content"
        autoFocus
        value={note.content}
        onChange={e => onChangeNote(note.id, e.target.value)}
      />
    </div>
    <button className="editor-button" onClick={onCloseNote}>
      Close
    </button>
  </div>
);

NoteEditor.propTypes = {
  note: PropTypes.object.isRequired,
  onChangeNote: PropTypes.func.isRequired,
  onCloseNote: PropTypes.func.isRequired
};

export default NoteEditor;
