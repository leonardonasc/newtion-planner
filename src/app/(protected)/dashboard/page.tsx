import { Logout } from "@/components/logout";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { auth } from "@/lib/auth";
import { ArrowUpRight, Check, ExternalLink, ExternalLinkIcon, SquareCheckBig } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 60;
export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  return (

    <div className="bg-offwhite-50 font-work-sans">

      {/* Header com informações do usuário */}
      <header>
        <div className="flex flex-col gap-y-2">
          <span className="uppercase font-work-sans text-xs font-normal tracking-widest text-neutral-600" >Terça, 22 de Julho</span>
          <h1 className="text-2xl flex-1 font-work-sans font-semibold">Olá, {user?.name.split(' ')[0]}!</h1>
          <span className="text-gray-500 font-work-sans font-normal text-sm">Um resumo de tudo o que importa hoje.</span>
        </div>

        {/* Cards de resumo */}
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
      </header>

      <main className="flex flex-col mt-6">

        {/*  */}
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
                  <Checkbox />
                  <span className="font-normal text-sm max-w-[150px] text-ellipsis overflow-hidden whitespace-nowrap">Arrumar alguma coisa ababa</span>
                </div>
                <span className="text-xs text-neutral-500 uppercase">trabalho</span>
              </div>
              <div className="flex justify-between items-center text-neutral-700">
                <div className="flex flex-1 gap-x-2 items-center">
                  <Checkbox />
                  <span className="font-normal text-sm max-w-[150px] text-ellipsis overflow-hidden whitespace-nowrap">Arrumar alguma coisa ababa</span>
                </div>
                <span className="text-xs text-neutral-500 uppercase">trabalho</span>
              </div>
              <div className="flex justify-between items-center text-neutral-700">
                <div className="flex flex-1 gap-x-2 items-center">
                  <Checkbox />
                  <span className="font-normal text-sm max-w-[150px] text-ellipsis overflow-hidden whitespace-nowrap">Arrumar alguma coisa ababa</span>
                </div>
                <span className="text-xs text-neutral-500 uppercase">trabalho</span>
              </div>

            </div>
          </div>
        </div>

      </main>

    </div>
  )
}
