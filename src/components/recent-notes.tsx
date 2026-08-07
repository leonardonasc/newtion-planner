import { FileText } from 'lucide-react'
import React from 'react'

export default function RecentNotes() {

    const notes = [
        { id: 1, description: 'This is a description of note 1.', date: '23 de outubro de 2023' },
        { id: 2, description: 'This is a description of note 2.', date: '12 de novembro de 2025' },
        { id: 3, description: 'This is a description of note 3.', date: '4 de setembro de 2023' },
    ]

    return (
        <div className="card-gradient shadow-sm p-4 flex rounded-lg flex-col h-full">
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-2'>
                    <FileText className='text-blue-500' size={16} />
                    <h2 className='text-sm font-semibold'>Notas Recentes</h2>
                </div>
                <a href="#">
                    <span className='text-sm text-blue-500 font-semibold'>Ver todas</span>
                </a>
            </div>
            <div>
                <ul className='mt-4 space-y-2'>
                    {notes.map((note) => (
                        <li key={note.id} className="flex flex-col justify-between gap-2 p-2 rounded-md border bg-background">
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-primary line-clamp-2 wrap-break-word">
                                    {note.description}
                                </p>
                            </div>
                            <span className="text-xs text-muted-foreground">{note.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
