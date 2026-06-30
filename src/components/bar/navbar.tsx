'use client'
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const mobile = useIsMobile()
    return (
        <div className="font-sans">
            {mobile ? (
                <div className="flex border shadow h-14 items-center bg-white mt-3 rounded-full justify-between px-4 text-secondary">
                    <div>Newtion</div>
                    <div>
                        <Menu onClick={() => setOpen(!open)} />
                    </div>
                    {open && (
                        <ul className="flex flex-col gap-4 absolute top-20 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] bg-white shadow rounded-lg p-4">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Projects</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    )}
                </div>
            ) : (
                <div className="mx-auto flex w-[80%] md:w-[95%] 2xl:w-[80%] border bg-white shadow h-14 items-center mt-3 rounded-full justify-between px-4 text-secondary">
                    <div>Newtion</div>
                    <div className="block lg:hidden">
                        <Menu onClick={() => setOpen(!open)} />
                    </div>
                    {open && (
                        <ul className="flex flex-col gap-4 font-semibold absolute top-23 left-1/2 -translate-x-1/2 w-[calc(80%-1rem)] md:w-[calc(95%-1rem)] lg:hidden bg-white shadow rounded-lg p-4">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Projects</li>
                            <li className="cursor-pointer">Contact</li>
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
