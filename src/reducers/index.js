import { CREATE_NOTE, CLOSE_NOTE, UPDATE_NOTE, OPEN_NOTE } from "../actions/actionCreators";

const initialState = {
  nextNoteId: 1,
  notes: {},
  openNoteId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      if (!action.id) {
        return {
          ...state,
          isLoading: true
        };
      }
      const newNote = {
        id: action.id,
        content: ""
      };
      return {
        ...state,
        isLoading: false,
        openNoteId: action.id,
        notes: {
          ...state.notes,
          [action.id]: newNote
        }
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.id]: {
            ...state.notes[action.id],
            content: action.content
          }
        }
      };
    case OPEN_NOTE:
      return {
        ...state,
        openNoteId: action.id
      };
    case CLOSE_NOTE:
      return {
        ...state,
        openNoteId: null
      };
    default:
      return state;
  }
};

export default reducer;
