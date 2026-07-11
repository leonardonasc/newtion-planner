'use client'

import { Logout } from "@/components/logout"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function TodoNav({ userName }: { userName?: string }) {
    const [open, setOpen] = useState(false)
    const mobile = useIsMobile()
    const pathname = usePathname()

    return (
        <div className="font-sans min-h-full">
            {mobile ? (
                <div className="fixed p-2 top-0 left-0 right-0 z-50 flex border w-full shadow h-14 items-center bg-white/70 backdrop-blur-md text-gray-700 mt-3 rounded-full justify-between px-4">
                    <p className="text-sm font-bold uppercase text-blue-500">Newtion</p>
                    <Button className="bg-transparent rounded-full text-gray-700" onClick={() => setOpen(!open)}>
                        {
                            open ? <X size={16} /> : <Menu size={16} />
                        }
                    </Button>
                    {open && (
                        <ul className="flex flex-col gap-2 absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%)] bg-white shadow rounded-lg p-2 border-zinc-200 border">
                            <li className={`cursor-pointer p-2 ${pathname === '/todo' ? 'text-blue-500 font-bold bg-offwhite-100 rounded-md' : ''}`}>Listas de tarefas</li>
                            <li className={`cursor-pointer p-2 ${pathname === '/shopping' ? 'text-blue-500 font-bold bg-offwhite-100 rounded-md' : ''}`}>Listas de compras</li>
                            <li className={`cursor-pointer p-2 ${pathname === '/expenses' ? 'text-blue-500 font-bold bg-offwhite-100 rounded-md' : ''}`}>Controles de gastos</li>
                            <li className={`cursor-pointer p-2 ${pathname === '/trips' ? 'text-blue-500 font-bold bg-offwhite-100 rounded-md' : ''}`}>Gestão de viagens</li>
                            <li className={`cursor-pointer p-2 ${pathname === '/notes' ? 'text-blue-500 font-bold bg-offwhite-100 rounded-md' : ''}`}>Notas</li>
                            <Separator className="my-1" />
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm text-gray-500 max-w-[calc(100%-100px)] overflow-hidden text-ellipsis">{userName}</p>
                                <Logout />
                            </div>
                        </ul>
                    )}
                </div>
            ) : (
               <div className="shadow w-70 h-full border rounded-md p-2">
                    <ul>
                        <li className={`cursor-pointer p-2 ${pathname === '/todos' ? 'text-blue-500 font-bold bg-offwhite-100 rounded-md' : ''}`}>Listas de tarefas</li>
                    </ul>
               </div>
            )}
        </div>
    )
}
