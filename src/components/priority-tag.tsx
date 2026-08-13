import { cn } from '@/lib/utils'
import React from 'react'

interface PriorityTagProps {
    priority?: 'low' | 'medium' | 'high'
}

export default function PriorityTag({ priority }: PriorityTagProps) {
    const priorityStyles = {
        low: {
            container: 'bg-green-500/10',
            text: 'text-green-500',
        },
        medium: {
            container: 'bg-yellow-500/10',
            text: 'text-yellow-500',
        },
        high: {
            container: 'bg-red-500/10',
            text: 'text-red-500',
        },
    }

    if (!priority) return null

    const styles = priorityStyles[priority]

    const text =
        priority.charAt(0).toUpperCase() + priority.slice(1)

    return (
        <div
            className={cn(
                'w-fit rounded-full px-2 py-1 text-xs font-medium',
                styles.container
            )}
        >
            <span
                className={cn(
                    'font-semibold',
                    styles.text
                )}
            >
                {text}
            </span>
        </div>
    )
}