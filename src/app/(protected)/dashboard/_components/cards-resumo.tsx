import { Card } from '@/components/ui/card'
import React from 'react'

export default function CardsResumo() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 mt-6">
            <Card className="p-4 h-30 flex flex-col justify-between">
                <h2 className="text-sm font-work-sans font-normal text-gray-500">Tarefas pendentes</h2>
                <span className="text-2xl font-work-sans font-semibold">0</span>
            </Card>
            <Card className="flex-1 p-4 h-30 flex flex-col justify-between">
                <h2 className="text-sm font-work-sans font-normal text-gray-500">Gasto do mês</h2>
                <span className="text-2xl font-work-sans font-semibold">0</span>
            </Card>
            <Card className="flex-1 p-4 h-30 flex flex-col justify-between">
                <h2 className="text-sm font-work-sans font-normal text-gray-500">Itens em desejo</h2>
                <span className="text-2xl font-work-sans font-semibold">0</span>
            </Card>
            <Card className="flex-1 p-4 h-30 flex flex-col justify-between">
                <h2 className="text-sm font-work-sans font-normal text-gray-500">Viagens</h2>
                <span className="text-2xl font-work-sans font-semibold">0</span>
            </Card>
        </div>
    )
}
