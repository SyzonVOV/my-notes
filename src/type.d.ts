// The type.d.ts file that holds the TypeScript types, which can be used now in other files without importing.

interface INote {
  id: string
  title: string
  body: string
}

type NoteState = {
  notes: INote[]
}

type NoteAction = {
  type: string
  note: INote
}

type DispatchType = (args: NoteAction) => NoteAction