import { CircleCheckBig, Square } from 'lucide-react'
import React from 'react'
import TaskTag from './task-tag'
import PriorityTag from './priority-tag'

export default function PendingTasks() {

    const tasks = [
        { id: 1, description: 'This is a description of task 1.', priority: 'high' },
        { id: 2, description: 'This is a description of task 2.', priority: 'medium' },
        { id: 3, description: 'This is a description of task 3.', priority: 'low' },
        { id: 4, description: 'This is a description of task 4.', priority: 'high' },
    ]

    return (
        <div className='card-gradient shadow-sm p-4 flex rounded-lg flex-col h-full'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-2'>
                    <CircleCheckBig className='text-blue-500' size={16} />
                    <h2 className='text-sm font-semibold'>Tarefas Pendentes</h2>
                </div>
                <a href="#">
                    <span className='text-sm text-blue-500 font-semibold'>Ver todas</span>
                </a>
            </div>

            <div className='mt-4 flex-1'>
                <ul className='mt-4 space-y-2'>
                    {tasks.map((task) => (
                        <li key={task.id} className='flex items-center justify-between p-2 bg-background rounded-lg'>
                            <div className='flex items-center space-x-2'>
                                <Square className='text-primary' size={16} />
                                <span className='text-sm'>{task.description}</span>
                            </div>
                            <PriorityTag priority={task.priority as 'low' | 'medium' | 'high'} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
