'use client'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { getTodos } from "@/server/todos"
import { Ellipsis, Trash } from "lucide-react"
// todo: arrumar a tipagem depois

type WorkspaceProps = {
    todos: Awaited<ReturnType<typeof getTodos>>
}

export default function Workspace({ todos }: WorkspaceProps) {

    console.log(todos)
    return (
        <div className="flex flex-col w-full h-full bg-offwhite-50 md:max-w-6xl md:justify-center md:mx-auto">
            <header className="flex flex-col">
                <div className="flex flex-col gap-y-3">
                    <span className="uppercase font-work-sans text-xs font-normal tracking-widest text-neutral-400">Lista ativa</span>
                    <h1 className="text-3xl flex-1 font-work-sans font-normal mb-2">Titulo grande da porra so pra testar o tamanho como fica essa bomba de texto</h1>

                    {/* quadrados para ver as tarefas */}
                    <div className="w-full flex justify-between border h-25">
                        <div className="flex justify-center border-r p-3 flex-col w-[calc(100%/3)]">
                            <span className="uppercase font-work-sans text-[0.625rem] font-normal text-neutral-700">Total</span>
                            <span className="uppercase font-work-sans text-lg font-bold">0</span>
                        </div>
                        <div className="flex justify-center border-r p-3 flex-col w-[calc(100%/3)] bg-green-200">
                            <span className="uppercase font-work-sans text-[0.625rem] font-normal text-neutral-700">Concluidas</span>
                            <span className="uppercase font-work-sans text-lg font-bold">0</span>
                        </div>
                        <div className="flex justify-center border-r p-3 flex-col w-[calc(100%/3)]">
                            <span className="uppercase font-work-sans text-[0.625rem] font-normal text-neutral-700">Pendentes</span>
                            <span className="uppercase font-work-sans text-lg font-bold">0</span>
                        </div>
                    </div>

                    {/* porcentagem */}
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                </div>
            </header>

            {/* divider */}
            <div className="w-full h-px bg-gray-200 mt-4"></div>

            <main className="overflow-y-auto flex-1 font-work-sans">
                <section className="flex gap-x-1 items-center my-4">
                    <Input placeholder="Adicionar nova tarefa" className="w-full h-10 font-work-sans rounded-md placeholder:font-normal" />
                    <Button className="h-10 rounded-md bg-black text-white font-work-sans font-bold hover:bg-blue-600">+</Button>
                </section>

                <section className="flex flex-col gap-y-2">
                    <ul className="flex flex-col gap-y-2">
                        <li className="flex gap-x-2 justify-between items-center border p-2 py-4 rounded-md">
                            <div className="flex gap-x-2 items-center">
                                <Checkbox />
                                <span className="font-work-sans self-start font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ratione cumque soluta maiores reprehenderit unde porro, sint voluptatum maxime est impedit beatae sed, vel a mollitia animi consequatur ullam? Dolores.</span>
                            </div>
                            <button><Ellipsis /></button>
                        </li>
                        <li className="flex gap-x-2 justify-between items-center border p-2 py-4 rounded-md">
                            <div className="flex gap-x-2 items-center">
                                <Checkbox />
                                <span className="font-work-sans self-start font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ratione cumque soluta</span>
                            </div>
                            <button><Ellipsis /></button>
                        </li>
                        <li className="flex gap-x-2 justify-between items-center border p-2 py-4 rounded-md">
                            <div className="flex gap-x-2 items-center">
                                <Checkbox />
                                <span className="font-work-sans self-start font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing</span>
                            </div>
                            <button><Ellipsis /></button>
                        </li>
                        <li className="flex gap-x-2 justify-between items-center border p-2 py-4 rounded-md">
                            <div className="flex gap-x-2 items-center">
                                <Checkbox />
                                <span className="font-work-sans self-start font-normal text-sm">Lorem ipsum dolor</span>
                            </div>
                            <button><Ellipsis /></button>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}