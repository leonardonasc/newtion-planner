import { Newspaper } from 'lucide-react'
import React from 'react'
import TaskTag from './task-tag'

export default function News() {
    return (
        <div>
            <div className='flex items-center space-x-2'>
                <Newspaper className='text-primary' size={16} />
                <h1 className='text-lg font-semibold text-primary'>Novidades</h1>
            </div>
            <div className='mt-4 flex flex-col'>
                <ul className='space-y-2'>
                    <li className="flex flex-col justify-between gap-2 p-4 rounded-2xl border shadow-card">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <TaskTag text="Feature" color="indigo" />
                                <span className='text-xs'>2h atrás</span>
                            </div>
                            <p className="text-sm text-primary line-clamp-2 wrap-break-word">
                                This is a description of news 1.
                            </p>
                            <span className="text-sm text-primary line-clamp-1 wrap-break-word">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia neque nihil ad laudantium, repellendus repellat harum nam magnam perferendis provident quasi qui commodi quam quidem sunt voluptatibus quis sit.
                            </span>
                        </div>
                    </li>

                    {/* example news */}

                    <li className="flex flex-col justify-between gap-2 p-4 rounded-2xl border shadow-card">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <TaskTag text="Feature" color="indigo" />
                                <span className='text-xs'>2h atrás</span>
                            </div>
                            <p className="text-sm text-primary line-clamp-2 wrap-break-word">
                                This is a description of news 1.
                            </p>
                            <span className="text-sm text-primary line-clamp-1 wrap-break-word">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia neque nihil ad laudantium, repellendus repellat harum nam magnam perferendis provident quasi qui commodi quam quidem sunt voluptatibus quis sit.
                            </span>
                        </div>
                    </li>

                    <li className="flex flex-col justify-between gap-2 p-4 rounded-2xl border shadow-card">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <TaskTag text="Feature" color="indigo" />
                                <span className='text-xs'>2h atrás</span>
                            </div>
                            <p className="text-sm text-primary line-clamp-2 wrap-break-word">
                                This is a description of news 1.
                            </p>
                            <span className="text-sm text-primary line-clamp-1 wrap-break-word">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia neque nihil ad laudantium, repellendus repellat harum nam magnam perferendis provident quasi qui commodi quam quidem sunt voluptatibus quis sit.
                            </span>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    )
}
