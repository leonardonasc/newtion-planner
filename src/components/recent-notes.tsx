import { FileText } from 'lucide-react'
import React from 'react'

export default function RecentNotes() {
    return (
        <div className="card-gradient shadow-sm p-4 flex rounded-lg flex-col">
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-2'>
                    <FileText className='text-blue-500' size={16} />
                    <h2 className='text-sm font-semibold'>Recent Notes</h2>
                </div>
                <a href="#">
                    <span className='text-sm text-blue-500 font-semibold'>Ver todas</span>
                </a>
            </div>
            <div>
                <ul className='mt-4 space-y-2'>
                    <li className="flex flex-col justify-between gap-2 p-2 rounded-md border shadow-card">
                        <div className="min-w-0 flex-1">
                            <p className="text-xs text-primary line-clamp-2 wrap-break-word">
                                This is a description of note 1.
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground">23 de outubro de 2023</span>
                    </li>

                    {/* example notes */}

                    <li className="flex flex-col justify-between gap-2 p-2 rounded-md border shadow-card">
                        <div className="min-w-0 flex-1">
                            <p className="text-xs text-primary line-clamp-2 wrap-break-word">
                                This is a description of note 2.
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground">12 de novembro de 2025</span>
                    </li>

                    <li className="flex flex-col justify-between gap-2 p-2 rounded-md border shadow-card">
                        <div className="min-w-0 flex-1">
                            <p className="text-xs text-primary line-clamp-2 wrap-break-word">
                                This is a description of note 3.
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground">4 de setembro de 2023</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
