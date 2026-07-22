import React from 'react'

export default function InsideProject() {

    const data = [
        {
            id: 1,
            description: "Notas - criação, edição e exclusão de notas",
            image: "https://placehold.co/600x400"
        },
        {
            id: 2,
            description: "Tarefas - criação, edição e exclusão de tarefas",
            image: "https://placehold.co/600x400"
        },
        {
            id: 3,
            description: "Wishlists - criação, edição e exclusão de wishlists",
            image: "https://placehold.co/600x400"
        },
        {
            id: 4,
            description: "Gastos - criação, edição e exclusão de gastos",
            image: "https://placehold.co/600x400"
        },
    ];

    return (
        <div className='flex flex-col gap-x-4 w-full items-center justify-center'>
            <p className='text-gray-700 font-sans font-bold text-3xl md:text-5xl w-full text-center mb-10'>Dentro do projeto</p>
            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 items-start'>
                {data.map((item) => (
                    <div key={item.id} className='flex h-full w-full flex-col gap-2 items-start'>
                        <img src={item.image} alt={item.description} className='w-full aspect-3/2 rounded-lg object-cover shadow-md' />
                        <p className='text-gray-600 font-sans text-lg'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
