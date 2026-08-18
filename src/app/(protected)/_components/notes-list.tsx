'use client'
import PageHeader from '@/components/page-header'
import { getNotes } from '@/server/notes'
import CreateNote from './create-note'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

interface NotesListProps {
    notes: Awaited<ReturnType<typeof getNotes>>
}

export default function NotesList({ notes }: NotesListProps) {

    const convertDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
        return new Date(date).toLocaleDateString('pt-BR', options)
    }

    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchChange = (value: string) => {
        setSearchQuery(value)
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-4'>
                <PageHeader title="Notes" subtitle='Organize suas anotações' />
                <div className='flex gap-x-2 w-full md:justify-end'>
                    <Input placeholder='Pesquisar notas...' className='w-full h-10 rounded-md md:max-w-md' value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)} />
                    <CreateNote />
                </div>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {notes.length > 0 ? (
                    notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase())).map((note) => (
                        <li key={note.id} className='bg-card p-4 rounded-md border border-border flex flex-col'>
                            <h3 className='font-semibold'>{note.title}</h3>
                            <span> {note.tag ? <span className='text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md'>{note.tag}</span> : null}</span>
                            <p className='text-sm text-muted-foreground line-clamp-3 wrap-break-word'>{note.content}</p>
                            <span className='text-xs text-muted-foreground'>{convertDate(note.createdAt)}</span>
                        </li>
                    ))
                ) : (
                    <li className='bg-card p-4 rounded-md border border-border flex flex-col'>
                        <h3 className='font-semibold'>Nenhuma nota encontrada</h3>
                    </li>
                )}
            </ul>
        </div>
    )
}
