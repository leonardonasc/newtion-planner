"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("planning");

  const data = [
    {
      id: 1,
      description: "Arrumar o proxy",
      status: "review",
    },
    {
      id: 2,
      description: "Fazer os skeletons",
      status: "planning",
      link: "https://www.linkedin.com/posts/lucas-cavalheri_frontend-typescript-react-share-7482585236590100480-xmzm/",
    },
    {
      id: 3,
      description: "Cache e revalidate nas req do servidor",
      status: "planning",
    },
    {
      id: 4,
      description: "Implementar a funcionalidade de busca",
      status: "planning",
    }, {
      id: 5,
      description: "Componente de loading e talvez usar o suspense fallback",
      status: "planning",
    }, {
      id: 6,
      description: "página de configurações estilo a do notion",
      status: "planning",
    }, {
      id: 7,
      description: "fazer os metadatas",
      status: "progress",
    },
    {
      id: 8,
      description: "página para armazenar links, ex: videos para assistir mais tarde",
      status: "planning",
    },
    {
      id: 9,
      description: "página para pomodoro + integrar musica (lofi)",
      status: "planning",
    },
    {
      id: 10,
      description: "fazer softdelete (deletedAt)",
      status: "planning",
    },
    {
      id: 11,
      description: "colocar toast nas reqs que esqueci (qnd cria lista ou deleta)",
      status: "planning",
    },
    {
      id: 12,
      description: "pedir data na criação dos todoitems",
      status: "planning",
    },
    {
      id: 13,
      description: "arrumar a página de login e register",
      status: "progress",
    },
    {
      id: 14,
      description: "fazer paginator",
      status: "progress",
      link: 'https://orm.drizzle.team/docs/guides/limit-offset-pagination'
    },
    {
      id: 15,
      description: "colocar 'ultimo metodo de login usado' quando o user deslogar, salvar no browser qual foi o último botao clicado para logar",
      status: "planning",
    },
    {
      id: 16,
      description: "fazer a página sobre o projeto",
      status: "progress",
    }, {
      id: 17,
      description: "fazer a página de 404",
      status: "review",
    },
    {
      id: 18,
      description: "erro ao visitar uma página e voltar, ex: abrir a página de sobre e apertar o botão de voltar do navegador, a página renderiza mas todos os elementos ficam errados",
      status: "review",
    }, {
      id: 19,
      description: "arrumar tipagem da dashboard header",
      status: "planning",
    }, {
      id: 20,
      description: "arrumar a velocidade do hover, ta muito lento",
      status: "review",
    },
    {
      id: 21,
      description: "colocar um layout com nav e footer",
      status: "review",
    },
    {
      id: 22,
      description: "adicionar categoria das tarefas",
      status: "planning",
    }, {
      id: 23,
      description: "criar uma admin page",
      status: "planning",
    }, {
      id: 24,
      description: "Fazer as páginas responsivas para web",
      status: "pending",
    }, {
      id: 25,
      description: "Corrigir o erro de fundo brando nas páginas protegidas",
      status: "done",
    }, {
      id: 26,
      description: "Fazer um proxy para não conseguir ir no login/register caso esteja logado",
      status: "done",
    }, {
      id: 27,
      description: "Fazer tela de calendário",
      status: "planning",
    }
    , {
      id: 28,
      description: "Corrigir a velocidade web, usar next/image nas imagens e validar os atrasos",
      status: "planning",
    }, {
      id: 29,
      description: "Arrumar as tags nas notas, para comportar mais de uma tag",
      status: "planning",
    }


  ];
  const tabs = [
    { id: "planning", label: "Pendente" },
    { id: "progress", label: "Em desenvolvimento" },
    { id: "review", label: "Em revisão" },
    { id: "done", label: "Concluído" },
  ];

  const filteredData = activeTab === "all" ? data : data.filter((item) => item.status === activeTab);

  return (
    <div className="min-h-screen bg-white font-work-sans">
      <main className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12 flex flex-col">
          <div className="mt-30 flex flex-col">
            <Link
              href="/blog"
              className="mb-8 text-sm font-medium text-blue-600 hover:underline"
            >
              &larr; Voltar para o blog
            </Link>

            <h1 className="mb-4 text-xl font-semibold text-gray-900">
              Mapping de tarefas
            </h1>

            <p className="text-sm font-normal text-gray-600 md:text-lg">
              Aqui estão todas as tarefas mapeadas até o momento e o seu
              respectivo estado, lembrando que isso é apenas um mapeamento
              para usar na parte de desenvolvimento e será removido
              futuramente, substituído por um roadmap profissional.
            </p>
          </div>
        </header>

        <div className="mb-6 flex gap-2 overflow-x-auto border-b border-gray-200">
          {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
                    activeTab === tab.id
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
        </div>

        <div className="flex flex-col gap-2 font-normal">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    item.status === "planning"
                      ? "bg-yellow-500"
                      : item.status === "progress"
                      ? "bg-blue-500"
                      : item.status === "review"
                      ? "bg-purple-500"
                      : item.status === "done"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                ></span>
                <span>{item.description}</span>
              </div>
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline"
                >
                  <span>Acessar</span>
                  <ArrowUpRightIcon size={16} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}