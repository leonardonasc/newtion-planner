import { Note } from '@/validations/types'
import { ArrowUpRight, FileText } from 'lucide-react'
import Link from 'next/link'

interface RecentNotesProps {
    notes: Note[]
}

export default function RecentNotes({ notes }: RecentNotesProps) {

    const convertDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
        return new Date(date).toLocaleDateString('pt-BR', options)
    }

    return (
        <div className="card-gradient shadow-sm p-4 flex rounded-lg flex-col h-full">
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-2'>
                    <FileText className='text-blue-500' size={16} />
                    <h2 className='text-sm font-semibold'>Notas Recentes</h2>
                </div>
                <Link href="/notes" className='flex items-center space-x-1 border p-1 rounded-full border-blue-500'>
                    <span className='text-sm text-blue-500 font-semibold'><ArrowUpRight size={16} /></span>
                </Link>
            </div>
            <div>
                <ul className='mt-4 space-y-2'>
                    {/* slice 3 last items from the array */}
                    {[...notes].sort((a, b) =>
                        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    )
                        .slice(0, 3)
                        .map((note) => (
                            <li key={note.id} className='bg-card p-2 rounded-md border border-border flex flex-col'>
                                <h3 className='font-semibold'>{note.title}</h3>
                                <p className='text-xs text-muted-foreground'>{note.content}</p>
                                <span className='text-xs text-muted-foreground'>{convertDate(note.createdAt)}</span>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
