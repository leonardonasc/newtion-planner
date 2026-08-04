'use client'

import { useIsMobile } from "@/hooks/use-mobile";
import { Bell, Menu } from "lucide-react";
import { useState } from "react";

export default function MainNavbar() {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <div className="bg-background text-foreground">
            {isMobile ? (
                <div className="flex items-center justify-between p-4 border-b border-secondary h-16">
                    <div className="flex items-center space-x-2">
                        <Menu className="size-5" onClick={() => setIsOpen(!isOpen)} />
                        <span className="text-lg ml-3 font-bold text-blue-500">Newtion</span>
                    </div>
                    <div>
                        <Bell className="size-5" />
                        <div>

                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Desktop</div>
                </div>
            )}
        </div>
    )
}
