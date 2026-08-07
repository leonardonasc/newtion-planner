"use client";

import { GithubLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mouse } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";

export default function LandingMain() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="
                relative
                flex
                min-h-screen
                flex-col
                justify-center
                overflow-hidden
                p-4
                font-sans
                text-gray-700
                md:justify-between
                md:p-6
            "
        >
            {/* GRID BACKGROUND */}
            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
                    absolute
                    inset-0
                    -z-20
                    bg-grid
                    opacity-40
                "
            />

            {/* BLUE GLOW */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-1/2
                    top-1/2
                    -z-10
                    h-125
                    w-125
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-400/20
                    blur-[120px]
                "
            />

            <div className="hidden md:block" />

            <div
                className="
                    flex
                    max-w-4xl
                    flex-col
                    gap-y-8
                    text-start
                    md:gap-y-12
                    md:items-start
                    md:text-left
                "
            >
                <motion.p
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    initial={{
                        opacity: 0,
                        y: -20,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="
                        max-w-3xl
                        text-[2.5rem]
                        leading-9
                        font-crimson-text
                        font-normal
                        md:text-6xl
                        md:leading-13
                    "
                >
                    Centralize seu{" "}
                    <motion.span className="relative inline-block mx-1 text-blue-500 font-caveat text-5xl md:text-7xl">
                        planejamento
                        <motion.svg
                            viewBox="0 0 220 24"
                            aria-hidden="true"
                            className="absolute -bottom-1.5 left-0 w-full overflow-visible -z-10"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.path
                                d="M8 18 Q110 11 212 18"
                                fill="none"
                                stroke="#86a8f0"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                            />
                        </motion.svg>
                    </motion.span>{" "}
                    em apenas um lugar
                </motion.p>

                <motion.span
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                    }}
                    className="
                        max-w-2xl
                        text-md
                        font-work-sans
                        font-normal
                        text-gray-600
                        md:text-lg
                        lg:text-xl
                    "
                >
                    — Planeje suas tarefas, organize seus gastos e acompanhe o progresso de seus projetos com facilidade. Nossa plataforma oferece uma experiência intuitiva e eficiente para ajudá-lo a alcançar seus objetivos.
                </motion.span>
                <div className="flex w-full flex-col gap-4 font-work-sans sm:flex-row lg:flex-wrap sm:items-center">
                    <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} transition={{ duration: 1, delay: 0.4 }} className="w-full sm:w-auto flex flex-col gap-4 sm:flex-row lg:flex-wrap sm:items-center">
                        <Button asChild variant="default" className={`w-full p-6 font-semibold rounded-xl sm:w-auto`}
                            onClick={() => { alert("Estamos repaginando o projeto, em breve estará disponível!"); }}
                        >
                            <div className="flex items-center justify-center">
                                {/* <a href="/dashboard"> */}
                                Acessar o Newtion
                                {/* </a> */}
                                <ArrowRight size={16} className="ml-2" />
                            </div>
                        </Button>

                        <Button
                            asChild
                            variant="ghost"
                            className="w-full p-6 font-semibold rounded-xl sm:w-auto"
                        >
                            <a
                                href="https://github.com/leonardonasc/newtion-planner"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <span className="relative inline-flex items-center text-blue-500">
                                    <GithubLogoIcon size={16} className="mr-2 shrink-0" />

                                    <span>Ver no GitHub</span>

                                    <motion.svg
                                        viewBox="0 0 220 24"
                                        aria-hidden="true"
                                        className="absolute left-0 -bottom-1.5 w-full overflow-visible pointer-events-none"
                                        initial={{ pathLength: 0 }}
                                        whileHover={{ pathLength: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <motion.path
                                            d="M8 18 Q110 11 212 18"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                        />
                                    </motion.svg>
                                </span>
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={["flex-col self-center hidden md:flex justify-center gap-y-1 text-gray-700 transition-opacity duration-300", isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"].join(" ")}
            >
                <a href="#inside-project" className="flex flex-col items-center gap-y-1 hover:cursor-pointer">
                    <Mouse size={18} />
                    <ArrowDown size={16} />
                </a>
            </motion.div>
        </div>
    );
}
