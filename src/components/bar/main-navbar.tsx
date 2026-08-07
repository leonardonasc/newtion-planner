"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Bell,
    CheckSquare,
    House,
    Menu,
    Notebook,
    Plane,
    Wallet,
    X,
} from "lucide-react";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../toggle-mode";

const links = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: House,
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: CheckSquare,
    },
    {
        href: "/notes",
        label: "Notes",
        icon: Notebook,
    },
    {
        href: "/expenses",
        label: "Expenses",
        icon: Wallet,
    },
    {
        href: "/travel",
        label: "Travel",
        icon: Plane,
    },
];

export default function MainNavbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* mobile */}

            <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:hidden">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-md p-2 hover:bg-secondary"
                    >
                        <Menu className="size-5" />
                    </button>

                    <span className="text-xl font-bold text-blue-500">
                        Newtion
                    </span>
                </div>

                <button className="rounded-md p-2 hover:bg-secondary">
                    <Bell className="size-5" />
                </button>
            </header>

            {/* Overlay */}

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                />
            )}

            {/* Drawer */}

            <aside
                className={cn(
                    "fixed left-0 top-0 z-50 h-screen w-72 bg-secondary transition-transform duration-300 md:hidden",
                    open ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center justify-between border-b px-6">
                    <span className="text-xl font-bold text-blue-500">
                        Newtion
                    </span>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-md p-2 hover:bg-background"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <nav className="space-y-2 p-4 '">
                    {links.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-4 py-3 transition-colors",
                                pathname === href
                                    ? "bg-blue-50/75 text-blue-800"
                                    : "hover:bg-background"
                            )}
                        >
                            <Icon className="size-5" />
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="border-t p-4 flex justify-center absolute bottom-0 left-0 right-0">
                    <ModeToggle />
                </div>
            </aside>

            {/* desktop */}

            <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r md:flex">
                <div className="border-b p-3">
                    <h1 className="text-2xl font-bold text-blue-500">
                        Newtion
                    </h1>
                </div>

                <nav className="flex-1 space-y-2 p-4">
                    {links.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-secondary",
                                pathname === href
                                    ? "bg-secondary text-blue-500 font-bold border-l-2 border-l-blue-800"
                                    : "text-muted-foreground hover:text-blue-500"
                            )}
                        >
                            <Icon className="size-5" />
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="border-t p-4 flex justify-center">
                    <ModeToggle />
                </div>
            </aside>
        </>
    );
}