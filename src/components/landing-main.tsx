
import { ArrowDown, Mouse } from "lucide-react";
import ButtonWithIconDemo from "@/components/ui/button-witn-icon";
import Link from "next/link";

export default function LandingMain() {
    return (
        <div className="flex min-h-screen flex-col justify-between p-4 font-sans text-gray-700 md:p-6 lg:px-20">
            <div />
            <div className="flex max-w-4xl flex-col gap-y-8 text-start md:items-start md:text-left">

                <p className="max-w-3xl text-4xl font-bold md:text-6xl lg:text-7xl">
                    Todo o seu <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">planejamento</span> em um só lugar
                </p>

                <span className="max-w-2xl text-md font-normal text-gray-600 md:text-lg lg:text-xl xl:text-2xl">
                    Planeje suas tarefas, organize seus gastos e acompanhe o progresso de seus projetos com facilidade. Nossa plataforma oferece uma experiência intuitiva e eficiente para ajudá-lo a alcançar seus objetivos.
                </span>

                <div className="flex w-full flex-col gap-4 font-normal sm:flex-row sm:flex-wrap sm:items-center">
                    <ButtonWithIconDemo />
                    <Link href="/about" className="inline-flex h-12 w-full lg:w-fit items-center justify-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950">
                        Saiba mais
                    </Link>
                </div>
            </div>

            <div className="animate-bounce self-center text-gray-500 flex flex-col">
                <Mouse size={20}/>
                <ArrowDown size={20} />
            </div>
        </div>
    )
}
