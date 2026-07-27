import { ArrowUpRight, SquareCheckBig } from 'lucide-react'
import React from 'react'

export default function DashboardItems() {
    return (
        <div>
            <div className="flex justify-between px-4 py-2 border">
                <div className="flex gap-x-2 items-center">
                    <SquareCheckBig size={12} />
                    <h2 className="text-lg font-normal">Tarefas</h2>
                </div>
                <div className="flex gap-x-2 items-center">
                    <span className="uppercase text-xs">abrir</span>
                    <ArrowUpRight size={15} />
                </div>
            </div>
            <div className="border-b border-l border-r p-4">
                <div className="flex flex-col">
                    <span className="text-5xl font-semibold">4/10</span>
                    <span className="text-md font-normal text-neutral-500">3 listas · 40% concluído</span>
                    {/* barra de progresso */}
                    <div className="w-full h-2 bg-gray-200 rounded-full my-4">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    {/* ultimas 3 tarefas */}
                    <div className="flex justify-between items-center text-neutral-700">
                        <div className="flex flex-1 gap-x-2 items-center">
                            <SquareCheckBig size={12} />
                            <span className="font-normal text-sm max-w-37.5 text-ellipsis overflow-hidden whitespace-nowrap">Arrumar alguma coisa ababa</span>
                        </div>
                        <span className="text-xs text-neutral-500 uppercase">trabalho</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-700">
                        <div className="flex flex-1 gap-x-2 items-center">
                            <SquareCheckBig size={12} />
                            <span className="font-normal text-sm max-w-37.5 text-ellipsis overflow-hidden whitespace-nowrap">Arrumar alguma coisa ababa</span>
                        </div>
                        <span className="text-xs text-neutral-500 uppercase">trabalho</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-700">
                        <div className="flex flex-1 gap-x-2 items-center">
                            <SquareCheckBig size={12} />
                            <span className="font-normal text-sm max-w-37.5 text-ellipsis overflow-hidden whitespace-nowrap">Arrumar alguma coisa ababa</span>
                        </div>
                        <span className="text-xs text-neutral-500 uppercase">trabalho</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
