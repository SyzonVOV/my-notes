//A reducer is a pure function that receives the state of the store and an action as parameters and then returns the updated state.
import { nanoid } from 'nanoid'
import * as actionTypes from "./actionTypes"

const initialState: NoteState = {
  notes: [
    {
      id: nanoid(10),
      title: "note 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: nanoid(10),
      title: "note 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

const reducer = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const newNote: INote = {
        id: nanoid(10),
        title: action.note.title,
        body: action.note.body,
      }
      return {
        ...state,
        notes: state.notes.concat(newNote),
      }
    case actionTypes.REMOVE_NOTE:
      const updatedNotes: INote[] = state.notes.filter(
        note => note.id !== action.note.id
      )
      return {
        ...state,
        notes: updatedNotes,
      }
  }
  return state
}

export default reducer