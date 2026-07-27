import React from 'react'

// todo: arrumar tipagem
export default function DashboardHeader({ user }: { user: any }) {
    return (
        <div className="flex flex-col gap-y-2">
            <span className="uppercase font-work-sans text-xs font-normal tracking-widest text-neutral-600" >{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            <h1 className="text-2xl flex-1 font-work-sans font-semibold">Olá, {user?.name.split(' ')[0]}!</h1>
            <span className="text-gray-500 font-work-sans font-normal text-sm">Um resumo de tudo o que importa hoje.</span>
        </div>
    )
}
