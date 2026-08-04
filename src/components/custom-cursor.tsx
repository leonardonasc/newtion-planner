"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [hover, setHover] = useState(false);


    useEffect(() => {
        const moveCursor = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };


        const handleMouseOver = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest("[data-cursor]")
            ) {
                setHover(true);
            } else {
                setHover(false);
            }
        };


        window.addEventListener(
            "mousemove",
            moveCursor
        );

        window.addEventListener(
            "mouseover",
            handleMouseOver
        );


        return () => {
            window.removeEventListener(
                "mousemove",
                moveCursor
            );

            window.removeEventListener(
                "mouseover",
                handleMouseOver
            );
        };

    }, []);



    return (
        <>
            {/* Círculo externo */}
            <motion.div
                animate={{
                    x: position.x - (hover ? 24 : 16),
                    y: position.y - (hover ? 24 : 16),
                    scale: hover ? 1.4 : 1,
                }}
                transition={{
                    duration: 0,
                }}
                className="
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-[9999]
                    hidden
                    h-8
                    w-8
                    rounded-full
                    border
                    border-primary/50
                    md:block
                "
            />


            {/* Ponto central */}
            <motion.div
                animate={{
                    x: position.x - 3,
                    y: position.y - 3,
                    scale: hover ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 40,
                }}
                className="
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-[10000]
                    hidden
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-primary
                    md:block
                "
            />


            {/* Glow extra quando passa em botão */}
            <motion.div
                animate={{
                    x: position.x - (hover ? 35 : 0),
                    y: position.y - (hover ? 35 : 0),
                    opacity: hover ? 0.35 : 0,
                    scale: hover ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                className="
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-9998
                    hidden
                    h-10
                    w-10
                    rounded-full
                    bg-primary
                    blur-2xl
                    md:block
                "
            />
        </>
    );
}