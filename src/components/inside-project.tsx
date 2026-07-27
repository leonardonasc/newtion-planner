"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Tag from "./tag";
import SubDescription from "./sub-description";

export default function InsideProject() {
  const data = [
    {
      id: 1,
      title: "Notas",
      description:
        "Crie, edite e organize todas as suas anotações em um único lugar.",
      image: "https://placehold.co/1200x800",
      pro: false,
    },
    {
      id: 2,
      title: "Tarefas",
      description:
        "Gerencie tarefas, acompanhe o progresso e mantenha tudo organizado.",
      image: "https://placehold.co/1200x800",
      pro: false,
    },
    {
      id: 3,
      title: "Wishlists",
      description:
        "Salve ideias, produtos e objetivos para acompanhar futuramente.",
      image: "https://placehold.co/1200x800",
      pro: false,
    },
    {
      id: 4,
      title: "Controle de gastos",
      description:
        "Visualize despesas, acompanhe seu orçamento e tenha mais controle financeiro.",
      image: "https://placehold.co/1200x800",
      pro: false,
    },
    {
      id: 5,
      title: "Gestor de viagem",
      description: "Planeje suas viagens, acompanhe seus gastos e tenha tudo organizado.",
      image: "https://placehold.co/1200x800",
      pro: true,
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
            {data.map((item, index) => (
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
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <div className="mb-4 flex items-center gap-2">
                    {item.pro &&
                      (<>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Zap size={16} /> 
                      </div>
                      <p className="text-md font-medium text-blue-600">Pro</p>
                      </>)
                    }
                    
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500 font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}