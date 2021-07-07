import { useCallback } from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"

import { Note } from "./components/Note"
import { AddNote } from "./components/AddNote"
import { addNote, removeNote } from "./store/actionCreators"

const App: React.FC = () => {
  const notes: readonly INote[] = useSelector(
    (state: NoteState) => state.notes,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveNote = useCallback(
    (note: INote) => dispatch(addNote(note)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Notes</h1>
      <AddNote saveNote={saveNote} />
      {notes.map((note: INote) => (
        <Note
          key={note.id}
          note={note}
          removeNote={removeNote}
        />
      ))}
    </main>
  )
}

export default App