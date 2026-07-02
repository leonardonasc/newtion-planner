'use client'
import { ArrowDown, Mouse, TriangleAlert } from "lucide-react";
import ButtonWithIconDemo from "@/components/ui/button-witn-icon";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";


export default function LandingMain() {

    const [isAtTop, setIsAtTop] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex min-h-screen flex-col justify-center md:justify-between p-4 font-sans text-gray-700 md:p-6">
            <div className="hidden md:block" />
            <div className="flex max-w-4xl flex-col gap-y-8 text-start md:items-start md:text-left">

                <p className="max-w-3xl text-4xl font-bold md:text-6xl lg:text-7xl">
                    Todo o seu <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">planejamento</span> em um só lugar
                </p>

                <span className="max-w-2xl text-md font-normal text-gray-600 md:text-lg lg:text-xl xl:text-2xl">
                    Planeje suas tarefas, organize seus gastos e acompanhe o progresso de seus projetos com facilidade. Nossa plataforma oferece uma experiência intuitiva e eficiente para ajudá-lo a alcançar seus objetivos.
                </span>

                <div className="flex w-full flex-col gap-4 font-normal sm:flex-row lg:flex-wrap sm:items-center">
                    <ButtonWithIconDemo />
                    <Link href="/about" className="inline-flex h-12 w-full lg:w-fit items-center justify-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950">
                        Saiba mais
                    </Link>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        variant="secondary"
                        className="fixed bottom-4 right-4 z-50 rounded-full border border-stone-300"
                    >
                        <TriangleAlert size={16} className="text-red-500" />
                    </Button>
                </div>
            </div>

            {isModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                <div className="relative w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-lg font-semibold">Informações Importantes</h2>
                    <p className="mb-4 text-sm text-gray-600">
                        1. O sistema está em fase de desenvolvimento e a interface ainda está em construção, portanto, algumas funcionalidades podem não estar disponíveis, imagens faltando ou bugs podem ocorrer. Agradeço a compreensão e paciência durante esse período de aprimoramento.
                    </p>
                    <p className="mb-4 text-sm text-gray-600">
                        2. Tudo aqui serve apenas para estudos e portfólio, então não posso garantir que seus dados sejam mantidos sem chance de perda, tendo em vista que o sistema pode ter mudanças significativas no futuro.
                    </p>
                    <p className="mb-4 text-sm text-gray-600">
                        3. Achou algum bug ou tem alguma sugestão? Entre em contato comigo através do meu e-mail: <a href="mailto:leonardo.nasmt@gmail.com" className="text-blue-500 underline">
                            leonardo.nasmt@gmail.com
                        </a>
                    </p>
                    <Button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 w-full rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        Fechar
                    </Button>
                </div>
            </div>}

            <div
                className={[
                    "flex-col animate-bounce self-center hidden md:flex justify-center gap-x-4 text-gray-700 transition-all duration-300",
                    isAtTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
                ].join(" ")}
            >
                <Mouse size={20} />
                <ArrowDown size={20} />
            </div>
        </div>
    )
}
