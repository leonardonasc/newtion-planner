import { Newspaper } from 'lucide-react'
import React from 'react'
import TaskTag from './task-tag'
import Link from 'next/link'

export default function News() {

    const news = [
        {
            id: 1,
            type: 'Feature',
            time: '2h atrás',
            title: 'Notícia 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            type: 'Update',
            time: '5h atrás',
            title: 'Notícia 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            type: 'Anúncio',
            time: '1d atrás',
            title: 'Notícia 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <div className='lg:w-72 h-full flex flex-col gap-y-2 bg-card p-4 shadow-card rounded-md'>
            <div className='flex items-center space-x-2 mb-2'>
                <Newspaper className='text-primary' size={16} />
                <h1 className='text-lg font-semibold text-primary'>Novidades</h1>
            </div>

            <ul className='flex flex-col gap-y-2 h-full'>
                {news.map((item) => (
                    <li key={item.id} className='flex flex-col space-y-1 rounded-lg border border-border p-4 h-[33%]'>
                        <div className='flex items-center justify-between'>
                            <TaskTag text={item.type} />
                            <span className='text-sm text-muted-foreground'>{item.time}</span>
                        </div>
                        <h2 className='text-md font-semibold text-foreground'>{item.title}</h2>
                        <p className='text-sm text-muted-foreground line-clamp-3 wrap-break-word'>{item.description}</p>
                        <Link href="#" className='text-sm text-primary font-semibold flex items-center space-x-1'>
                            <span>Leia mais</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
