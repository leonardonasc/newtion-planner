'use client'

import { ArrowRight, Triangle } from 'lucide-react';
import { useState } from 'react'
import { Button } from './ui/button';


export default function Missing() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full mb-7 font-sans">
            <p className="text-center text-4xl font-semibold  text-gray-700 mb-4">
                Lista de funcionalidades
            </p>
            <div className="flex flex-col font-sans gap-y-2 border items-start">
                <Button className="flex bg-transparent" onClick={() => setOpen(!open)}>
                    {open ? <Triangle size={15} className="text-gray-500 rotate-180" /> : <Triangle size={15} className="text-gray-500 rotate-90" />}

                </Button>
                {open ? (
                    <ul className="flex flex-col gap-y-2 text-gray-500 font-sans">
                        <li className="flex items-center gap-x-2">
                            <span>Notas - criação, edição e exclusão de notas</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>Tarefas - criação, edição e exclusão de tarefas</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>Wishlists - criação, edição e exclusão de wishlists</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>Gastos - criação, edição e exclusão de gastos</span>
                        </li>
                    </ul>
                ) : null}
            </div>
        </div>
    )
}
