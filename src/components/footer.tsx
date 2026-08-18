import Link from 'next/link'
import React from 'react'

export default function Footer() {

    const primary = [
        { label: "Como surgiu", href: "/blog/about" },
        { label: "Repositório", href: "https://github.com/leonardonasc/newtion-planner" },
        { label: "Roadmap", href: "/blog/mapping" },
        { label: "Contato", href: "/contact" },
        { label: "Blog", href: "/blog" },
    ]

    const secondary = [
        { label: "Política de Privacidade", href: "/privacy" },
        { label: "Termos de Serviço", href: "/terms" },
    ]

    return (
        <div className="flex flex-col lg:max-w-6xl lg:mx-auto">
            <div className="md:flex-row flex justify-between flex-col gap-y-15 gap-x-20 mb-1 py-20">
                <div>
                    <p className="text-blue-500 font-work-sans font-bold text-6xl">Newtion</p>
                    <p className="text-gray-600 text-md font-work-sans font-normal">Centralize seu planejamento em apenas um lugar</p>
                </div>
                <div className="flex flex-col md:flex-row gap-x-20 gap-y-10">
                    <div className='flex flex-col'>
                        <h2 className="font-work-sans font-semibold text-xl mb-2">Sobre</h2>
                        <ul className="flex flex-col gap-y-1">
                            {primary.map((item) => (
                                <li key={item.href} className="text-gray-500 font-work-sans font-medium text-md hover:cursor-pointer hover:text-blue-500 hover:underline underline-offset-2">
                                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className="font-work-sans font-semibold text-xl mb-2">Legal</h2>
                        <ul className="flex flex-col gap-y-1">
                            {secondary.map((item) => (
                                <li key={item.href} className="text-gray-500 font-work-sans font-medium text-md hover:cursor-pointer hover:text-blue-500 hover:underline underline-offset-2">
                                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <span className="text-gray-500 text-sm font-work-sans font-normal">
                <p className="text-gray-600 text-sm font-work-sans font-normal my-4">© 2026 Newtion. Todos os direitos reservados.</p>
            </span>
        </div>
    )
}
