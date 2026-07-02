'use client'
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const mobile = useIsMobile()
    return (
        <div className="font-sans">
            {mobile ? (
                <div className="flex border shadow h-14 items-center bg-white/70 backdrop-blur-md text-gray-700 mt-3 rounded-full justify-between px-4">
                    <div>Newtion</div>
                    <Button className="bg-transparent rounded-full text-gray-700" onClick={() => setOpen(!open)}>
                        {
                            open ? <X size={16} /> : <Menu size={16} />
                        }
                    </Button>
                    {open && (
                        <ul className="flex flex-col gap-4 absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%)] bg-white shadow rounded-lg p-4 border-zinc-200 border">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Projects</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    )}
                </div>
            ) : (
                <div className="mx-auto flex w-[80%] md:w-[95%] 2xl:w-[60%] border bg-white/70 backdrop-blur-md shadow h-14 items-center mt-3 rounded-full justify-between px-4 text-gray-700 border-zinc-200">
                    <div>Newtion</div>
                    <div className="block lg:hidden">
                        <Button className="bg-transparent rounded-full text-gray-700" onClick={() => setOpen(!open)}>
                            {
                                open ? <X size={16} /> : <Menu size={16} />
                            }
                        </Button>
                    </div>
                    {open && (
                        <ul className="flex flex-col gap-y-1 font-semibold absolute top-23 md:top-18 left-1/2 -translate-x-1/2 w-[calc(80%-1rem)] md:w-[calc(100%)] lg:hidden bg-white shadow rounded-lg p-4 border-zinc-200 border">
                            <li className="cursor-pointer hover:bg-zinc-100 p-1 rounded-lg">Home</li>
                            <li className="cursor-pointer hover:bg-zinc-100 p-1 rounded-lg">About</li>
                            <li className="cursor-pointer hover:bg-zinc-100 p-1 rounded-lg">Projects</li>
                            <li className="cursor-pointer hover:bg-zinc-100 p-1 rounded-lg">Contact</li>
                        </ul>
                    )}
                    <ul className="hidden lg:flex gap-x-1 font-semibold">
                        <li className="cursor-pointer hover:bg-zinc-100 rounded-full px-4 py-2">Home</li>
                        <li className="cursor-pointer hover:bg-zinc-100 rounded-full px-4 py-2">About</li>
                        <li className="cursor-pointer hover:bg-zinc-100 rounded-full px-4 py-2">Projects</li>
                        <li className="cursor-pointer hover:bg-zinc-100 rounded-full px-4 py-2">Contact</li>
                    </ul>
                </div>

            )}
        </div>
    )
}
