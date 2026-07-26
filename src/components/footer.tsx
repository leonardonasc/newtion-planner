import React from 'react'

export default function Footer() {

    const items = [
        { label: "Como surgiu", href: "/about" },
        { label: "Repositório", href: "https://github.com/leonardonasc/newtion-planner" },
        { label: "Taskmap", href: "/mapping" },
        { label: "Contato", href: "/contact" },
    ]

    return (
        <div className="lg:max-w-6xl lg:mx-auto flex flex-col md:flex-row gap-y-15 gap-x-20 mb-1 py-20">
            <div>
                <p className="text-blue-500 font-work-sans font-bold text-6xl">Newtion</p>
                <p className="text-gray-600 text-sm font-work-sans font-normal">© 2026 Newtion. Todos os direitos reservados.</p>
                <p className="text-gray-600 text-sm font-work-sans font-normal">Desenvolvido por <a href="https://github.com/leonardonasc/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline underline-offset-2">Leonardo Nascimento</a>.</p>
            </div>

            <div className='flex flex-col'>
                <h2 className="font-work-sans font-semibold text-xl mb-2">Sobre</h2>
                <ul className="flex flex-col gap-y-1">
                    {items.map((item) => (
                        <li key={item.href} className="text-gray-500 font-work-sans font-medium text-md hover:cursor-pointer hover:text-blue-500 hover:underline underline-offset-2">
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
