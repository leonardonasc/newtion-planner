"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-10 w-32 rounded-full bg-secondary" />
        );
    }

    return (
        <div className="flex rounded-full bg-secondary w-fit p-1">
            <button
                onClick={() => setTheme("light")}
                className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-1.5 transition",
                    theme === "light" && "bg-background shadow-sm"
                )}
            >
                <Sun className="size-4" />
                Light
            </button>

            <button
                onClick={() => setTheme("dark")}
                className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-1.5 transition",
                    theme === "dark" && "bg-background shadow-sm"
                )}
            >
                <Moon className="size-4" />
                Dark
            </button>
        </div>
    );
}