"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function InsideProject() {
  const data = [
    {
      id: 1,
      title: "Notas",
      description:
        "Crie, edite e organize todas as suas anotações em um único lugar.",
      image: "https://placehold.co/1200x800",
    },
    {
      id: 2,
      title: "Tarefas",
      description:
        "Gerencie tarefas, acompanhe o progresso e mantenha tudo organizado.",
      image: "https://placehold.co/1200x800",
    },
    {
      id: 3,
      title: "Wishlists",
      description:
        "Salve ideias, produtos e objetivos para acompanhar futuramente.",
      image: "https://placehold.co/1200x800",
    },
    {
      id: 4,
      title: "Controle de gastos",
      description:
        "Visualize despesas, acompanhe seu orçamento e tenha mais controle financeiro.",
      image: "https://placehold.co/1200x800",
    },
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
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              Recursos
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Tudo o que você precisa em um só lugar
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              O Newtion reúne ferramentas essenciais para organizar sua rotina,
              projetos, estudos e vida financeira em uma experiência simples e
              agradável.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
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
                  {/* <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Sparkles size={16} />
                    </div>

                    <span className="text-sm font-medium text-blue-600">
                      Recurso {item.id}
                    </span>
                  </div> */}

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  {/* <button className="mt-6 flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-600 transition group-hover:gap-3">
                    Saiba mais
                    <ArrowUpRight size={16} />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mx-auto max-w-2xl text-gray-500">
              E isso é apenas o começo. Novos recursos são adicionados
              constantemente para tornar sua organização ainda mais prática e
              eficiente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}