import { createNote, closeNote, updateNote, openNote } from "../actions/actionCreators";
import NoteApp from "./note-app";
import connect from "../custom-redux/connect";

const mapStateToProps = state => ({
  notes: state.notes,
  openNoteId: state.openNoteId
});

const mapDispatchToProps = dispatch => ({
  onAddNote: () => dispatch(createNote()),
  onChangeNote: (id, content) => dispatch(updateNote(id, content)),
  onOpenNote: id => dispatch(openNote(id)),
  onCloseNote: () => dispatch(closeNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteApp);
