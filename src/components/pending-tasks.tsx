import { CircleCheckBig, Square } from 'lucide-react'
import React from 'react'
import TaskTag from './task-tag'
import PriorityTag from './priority-tag'

export default function PendingTasks() {
    return (
        <div className='card-gradient shadow-sm p-4 flex rounded-lg flex-col'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-2'>
                    <CircleCheckBig className='text-blue-500' size={16} />
                    <h2 className='text-sm font-semibold'>Pending Tasks</h2>
                </div>
                <TaskTag text="3" color="indigo" />
            </div>

            <div>
                <ul className='mt-4 space-y-2'>
                    <li className="flex items-center justify-between gap-2 p-2 border rounded-md shadow-card">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                            <Square className="text-primary shrink-0" size={16} />

                            <p className="text-sm text-primary font-normal line-clamp-2 wrap-break-word">
                                This is a description of task 1.
                            </p>
                        </div>

                        <PriorityTag priority="high" />
                    </li>

                    {/* example tasks */}
                    <li className="flex items-center justify-between gap-2 p-2 border rounded-md shadow-card">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                            <Square className="text-primary shrink-0" size={16} />

                            <p className="text-sm text-primary font-normal line-clamp-2 wrap-break-word">
                                This is a description of task 1.
                            </p>
                        </div>

                        <PriorityTag priority="high" />
                    </li>

                    <li className="flex items-center justify-between gap-2 p-2 border rounded-md shadow-card">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                            <Square className="text-primary shrink-0" size={16} />

                            <p className="text-sm text-primary font-normal line-clamp-2 wrap-break-word">
                                This is a description of task 1.
                            </p>
                        </div>

                        <PriorityTag priority="high" />
                    </li>

                </ul>
            </div>
        </div>
    )
}
