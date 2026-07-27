import React from 'react'

interface TagProps {
    text: string
}

export default function Tag({ text }: TagProps) {
    return (
        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
            {text}
        </span>
    )
}
