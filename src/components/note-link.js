import React from "react";
import NoteTitle from "./note-title";

const NoteLink = ({ note, onOpenNote }) => (
  <li className="note-list-item">
    <a href="#" onClick={() => onOpenNote(note.id)}>
      <NoteTitle note={note} />
    </a>
  </li>
);

export default NoteLink;
