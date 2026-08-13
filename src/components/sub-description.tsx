import React from 'react'

interface SubDescriptionProps { 
    title: string;
    description: string;
}

export default function SubDescription({ title, description }: SubDescriptionProps) {
    return (
        <>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg font-normal leading-8 text-gray-700">
                {description}
            </p>
        </>
    )
}
