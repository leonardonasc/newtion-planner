import { Newspaper } from 'lucide-react'
import React from 'react'
import TaskTag from './task-tag'

export default function News() {

    const news = [
        {
            id: 1,
            type: 'Feature',
            time: '2h atrás',
            title: 'News 1',
            description: 'This is a description of news 1.',
        },
        {
            id: 2,
            type: 'Update',
            time: '5h atrás',
            title: 'News 2',
            description: 'This is a description of news 2.',
        },
        {
            id: 3,
            type: 'Announcement',
            time: '1d atrás',
            title: 'News 3',
            description: 'This is a description of news 3.',
        },
    ]

    return (
        <div>
            <div className='flex items-center space-x-2 mb-2'>
                <Newspaper className='text-primary' size={16} />
                <h1 className='text-lg font-semibold text-primary'>Novidades</h1>
            </div>

            <ul className='grid grid-cols-1 space-y-1 md:gap-4 md:grid-cols-3 md:space-y-0'>
                {news.map((item) => (
                    <li key={item.id} className='flex flex-col space-y-1 rounded-lg border border-border p-4'>
                        <div className='flex items-center justify-between'>
                            <TaskTag text={item.type} />
                            <span className='text-sm text-muted-foreground'>{item.time}</span>
                        </div>
                        <h2 className='text-md font-semibold text-foreground'>{item.title}</h2>
                        <p className='text-sm text-muted-foreground'>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
