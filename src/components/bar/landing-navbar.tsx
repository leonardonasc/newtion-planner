"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";

export default function LandingNavbar() {
    const [open, setOpen] = useState(false);

    const items = [
        { label: "Inicio", href: "/" },
        { label: "Sobre", href: "/blog/about" },
        { label: "Contato", href: "/contact" },
        { label: "Blog", href: "/blog" },
    ];

    return (
        <nav className="font-work-sans">

            {/* ================= MOBILE ================= */}

            <div className="md:hidden mt-3">

                <div className="flex h-14 items-center justify-between rounded-full border border-zinc-200 bg-white/70 px-4 shadow backdrop-blur-md">

                    <Link
                        href="/"
                        className="text-sm font-bold uppercase text-blue-500"
                    >
                        Newtion
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-blue-500"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </Button>

                </div>

                {open && (
                    <ul className="mt-3 flex flex-col gap-2 rounded-3xl border border-zinc-200 bg-white p-4 shadow">

                        {items.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2 transition hover:bg-zinc-100"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                )}

            </div>

            {/* ================= DESKTOP ================= */}

            <div className="hidden md:flex mx-auto mt-3 h-14 w-[95%] items-center justify-between rounded-md border border-zinc-200 bg-white/70 px-4 shadow backdrop-blur-md 2xl:w-[60%]">

                <Link
                    href="/"
                    className="ml-2 text-sm font-bold uppercase text-blue-500"
                >
                    Newtion
                </Link>

                <ul className="flex items-center gap-2">

                    {items.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="
                                    relative px-3 py-2 font-medium text-gray-700
                                    after:absolute
                                    after:bottom-1
                                    after:left-3
                                    after:h-0.5
                                    after:w-[calc(100%-24px)]
                                    after:origin-left
                                    after:scale-x-0
                                    after:bg-blue-400
                                    after:transition-transform
                                    hover:after:scale-x-100
                                "
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
                <div className="flex items-center gap-2">
                    <a
                        href="/dashboard"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 bg-blue-500 transition"
                    >
                        Acessar o Newtion
                    </a>
                </div>
            </div>

        </nav>
    );
}