"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";

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
      status: "planning",
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


  ];
  const tabs = [
    { id: "all", label: "Todas" },
    { id: "planning", label: "Pendente" },
    { id: "progress", label: "Em desenvolvimento" },
    { id: "review", label: "Em revisão" },
    { id: "done", label: "Concluído" },
  ];

  const filteredData = activeTab === "all" ? data : data.filter((item) => item.status === activeTab);

  return (
    <div className="min-h-screen font-work-sans p-4 md:px-60 md:py-10 mt-20">
      <header className="mb-8">
        <h1 className="text-xl mb-4 font-semibold text-gray-900">
          Mapping de tarefas
        </h1>

        <p className="text-sm text-gray-600 font-normal md:text-lg">
          Aqui estão todas as tarefas mapeadas até o momento e o seu respectivo
          estado, lembrando que isso é apenas um mapeamento para usar na parte de desenvolvimento e será removido futuramente,
          substituído por um roadmap profissional.
        </p>
      </header>

      <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-2 text-sm font-normal border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 font-normal">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="border rounded-md p-3 hover:bg-gray-50 transition-colors"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-x-1 items-center text-blue-800 hover:underline"
                >
                  <span>{item.id} - </span>
                  {item.description.charAt(0).toUpperCase() +
                    item.description.slice(1)}
                  <ArrowUpRightIcon size={15} className="ml-1" />
                </a>
              ) : (
                <p className="text-gray-600">
                  <span>{item.id} - </span>
                  {item.description.charAt(0).toUpperCase() +
                    item.description.slice(1)}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 font-normal text-md">
            Nenhuma tarefa encontrada.
          </p>
        )}
      </div>
    </div>
  );
}