import { useCallback } from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  note: INote
  removeNote: (note: INote) => void
}

export const Note: React.FC<Props> = ({ note, removeNote }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteNote = useCallback(
    (note: INote) => dispatch(removeNote(note)),
    [dispatch, removeNote]
  )

  return (
    <div className="Note">
      <div>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
      </div>
      <button onClick={() => deleteNote(note)}>Delete</button>
    </div>
  )
}