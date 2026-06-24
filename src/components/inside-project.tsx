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
    ];

    return (
        <div>
            <div className="flex flex-col gap-y-8 mt-8 items-center justify-center">
                <p className='text-4xl font-sans font-semibold text-gray-700'>
                    Por dentro do projeto
                </p>
                <div className="flex flex-wrap items-center justify-between gap-x-2">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-between gap-y-2">
                            <img src={item.image} alt={item.description} className="w-140 h-auto rounded-md" />
                            <p className="text-gray-500 font-sans">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
