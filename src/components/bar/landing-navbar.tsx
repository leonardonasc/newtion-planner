'use client'
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"


export default function LandingNavbar() {
    const [open, setOpen] = useState(false)
    const mobile = useIsMobile()

    const items = [
        { label: "Inicio", href: "/" },
        { label: "Sobre", href: "/about" },
        { label: "Contato", href: "/contact" },
    ];

    return (
        <div className="font-work-sans">
            {mobile ? (
                <div className="flex border shadow h-14 items-center bg-white/70 backdrop-blur-md text-gray-700 mt-3 rounded-full justify-between px-4">
                    <Link href="/" className="text-sm font-bold uppercase text-blue-500">Newtion</Link>
                    <Button className="bg-transparent rounded-full text-gray-700" onClick={() => setOpen(!open)}>
                        {
                            open ? <X size={16} /> : <Menu size={16} />
                        }
                    </Button>
                    {open && (
                        <ul className="flex flex-col gap-y-2 absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%)] bg-white shadow rounded-4xl p-4 border-zinc-200 border">
                            {items.map((item) => (
                                <li key={item.href} className="cursor-pointer px-2 py-2">
                                    <Link href={item.href}>
                                        <span className="text-gray-700 font-normal">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <div className="mx-auto flex w-[80%] md:w-[95%] 2xl:w-[60%] border bg-white/70 backdrop-blur-md shadow h-14 items-center mt-3 rounded-full justify-between px-4 text-gray-700 border-zinc-200">
                    <Link href="/" className="text-sm font-bold uppercase text-blue-500 ml-2">Newtion</Link>
                    <div className="block lg:hidden">
                        <Button className="bg-transparent rounded-full text-gray-700" onClick={() => setOpen(!open)}>
                            {
                                open ? <X size={16} /> : <Menu size={16} />
                            }
                        </Button>
                    </div>
                    {open && (
                        <ul className="flex flex-col gap-y-1 font-work-sans absolute top-23 md:top-18 left-1/2 -translate-x-1/2 w-[calc(80%-1rem)] md:w-[calc(100%)] lg:hidden bg-white shadow rounded-lg p-4 border-zinc-200 border">
                            {items.map((item) => (
                                <li key={item.href} className="cursor-pointer px-2 py-2">
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    <ul className="hidden lg:flex gap-x-1 font-medium">
                        {items.map((item) => (
                            <li key={item.href} className="cursor-pointer px-2 py-2">
                                <span
                                    className="
                                        relative inline-block
                                        after:absolute
                                        after:left-0
                                        after:-bottom-0.5
                                        after:h-0.5
                                        after:w-full
                                        after:origin-left
                                        after:scale-x-0
                                        after:bg-blue-400
                                        after:transition-transform
                                        after:duration-300
                                        hover:after:scale-x-100
        "
                                >
                                    <Link href={item.href} className="text-md text-gray-700">
                                        {item.label}
                                    </Link>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            )}
        </div>
    )
}
