import React from 'react'

export default function Footer() {

    const items = [
        {
            id: 1,
            title: "Recursos",
            links: ["Notas", "Tarefas", "Wishlists", "Gastos"]
        },
    ]

    return (
        <div className="lg:max-w-6xl lg:mx-auto flex justify-between">
            {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-y-2 p-4">
                    <p className="text-gray-700 font-medium text-lg font-work-sans">{item.title}</p>
                    <ul className="flex flex-col gap-y-1">
                        {item.links.map((link, index) => (
                            <li key={index} className="text-gray-600 text-sm">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
