
import { Note } from '@/validations/types'
import NotesList from '../_components/notes-list'
import { getNotes } from '@/server/notes'


export default async function NoteCard() {

    const notes = await getNotes()
    return (
        <>
            <NotesList notes={notes} />
        </>
    )
}