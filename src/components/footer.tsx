import React from 'react'

export default function Footer() {

    const items = [
        {
            id: 1,
            title: "Sobre a plataforma",
            links: ["Como surgiu", "Roadmap", "Repositório", "Contato"]
        },
    ]

    return (
        <div className="lg:max-w-6xl lg:mx-auto flex flex-col md:flex-row gap-y-15 gap-x-20 mb-1 py-20">
            <div>
                <p className="text-blue-500 font-work-sans font-bold text-6xl">Newtion</p>
                <p className="text-gray-600 text-sm font-work-sans font-normal">© 2026 Newtion. Todos os direitos reservados.</p>
            </div>
            {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-y-2">
                    <p className="text-gray-700 font-medium text-2xl font-work-sans">{item.title}</p>
                    <ul className="flex flex-col gap-y-1">
                        {item.links.map((link, index) => (
                            <li key={index} className="text-gray-500 font-work-sans font-medium text-md hover:cursor-pointer hover:text-blue-500 hover:underline underline-offset-2">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
