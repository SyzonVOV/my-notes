import { useState } from 'react';

type Props = {
  saveNote: (note: INote | any) => void
}

export const AddNote: React.FC<Props> = ({ saveNote }) => {
  const [note, setNote] = useState<INote | {}>()

  const handleNoteData = (e: React.FormEvent<HTMLInputElement>) => {
    setNote({
      ...note,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewNote = (e: React.FormEvent) => {
    e.preventDefault()
    saveNote(note)
  }

  return (
    <form onSubmit={addNewNote} className="Add-note">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleNoteData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleNoteData}
      />
      <button disabled={note === undefined ? true : false}>
        Add note
      </button>
    </form>
  )
}