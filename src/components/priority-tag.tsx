import React from 'react'

interface MainTagProps {
    priority?: 'low' | 'medium' | 'high';
}

export default function PriorityTag({ priority }: MainTagProps) {

    const priorityColor = priority === 'low' ? 'green' : priority === 'medium' ? 'yellow' : priority === 'high' ? 'red' : 'gray';
    const text = priority ? priority.charAt(0).toUpperCase() + priority.slice(1) : '';


    return (
        <div className={`bg-${priorityColor}-200 text-xs px-2 py-1 rounded-full font-medium`}>
            <span className={`text-${priorityColor}-700 font-semibold`}>{text}</span>
        </div>
    )
}
