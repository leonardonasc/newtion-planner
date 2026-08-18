"use client";

import { motion } from "framer-motion";
import { CalendarDays, Coins, Gauge, Heart, ListChecks, TicketsPlane, Zap } from "lucide-react";
import Tag from "./tag";
import SubDescription from "./sub-description";

export default function InsideProject() {
  const data = [
    {
      id: 1,
      title: "Dashboard",
      description:
        "Tenha uma visão geral de todas as suas atividades, tarefas e projetos em um só lugar.",
      pro: false,
      icon: Gauge,
    },
    {
      id: 2,
      title: "Tarefas",
      description:
        "Gerencie tarefas, acompanhe o progresso e mantenha tudo organizado.",
      pro: false,
      icon: ListChecks
    },
    {
      id: 3,
      title: "Wishlists",
      description:
        "Salve ideias, produtos e objetivos para acompanhar futuramente.",
      pro: false,
      icon: Heart
    },
    {
      id: 4,
      title: "Controle de gastos",
      description:
        "Visualize despesas, acompanhe seu orçamento e tenha mais controle financeiro.",
      pro: false,
      icon: Coins
    },
    {
      id: 5,
      title: "Gestor de viagem",
      description: "Planeje suas viagens, acompanhe seus gastos e tenha tudo organizado.",
      pro: true,
      icon: TicketsPlane
    },
    {
      id: 6,
      title: "Calendário",
      description: "Organize seus compromissos, eventos e prazos em um calendário intuitivo.",
      pro: true,
      icon: CalendarDays
    }
  ];

  return (
    <section className="w-full py-24 font-work-sans">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16 text-center">
            <Tag text="Recursos" />
            <SubDescription
              title="Tudo o que você precisa em um só lugar"
              description="O Newtion reúne ferramentas essenciais para organizar sua rotina, projetos, estudos e vida financeira em uma experiência simples e agradável."
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {data.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.1 },
                }}

                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white"
              >
                <div className="p-7">
                  <div className="flex h-16 w-16 mb-5 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <item.icon size={24} />
                  </div>
                  {/* <div className="my-4 flex items-center gap-2">
                    {item.pro &&
                      (<>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Zap size={16} />
                        </div>
                        <p className="text-md font-medium text-blue-600">Premium</p>
                      </>)
                    }

                  </div> */}

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500 font-normal">
                    {item.description}
                  </p>

                  <ul>

                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}