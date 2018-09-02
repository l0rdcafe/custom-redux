import api from "../api/fake-api";

const CREATE_NOTE = "CREATE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const OPEN_NOTE = "OPEN_NOTE";
const CLOSE_NOTE = "CLOSE_NOTE";

const createNote = () => ({ dispatch }) => {
  dispatch({
    type: CREATE_NOTE
  });
  api.createNote().then(({ id }) => {
    dispatch({
      type: CREATE_NOTE,
      id
    });
  });
};

const updateNote = (id, content) => ({
  type: UPDATE_NOTE,
  id,
  content
});

const openNote = id => ({
  type: OPEN_NOTE,
  id
});

const closeNote = () => ({
  type: CLOSE_NOTE
});

export { CREATE_NOTE, UPDATE_NOTE, OPEN_NOTE, CLOSE_NOTE, createNote, updateNote, openNote, closeNote };
