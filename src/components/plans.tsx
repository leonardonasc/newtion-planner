"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { Button } from "./ui/button";

export default function Plans() {
    const plans = [
        {
            id: 1,
            title: "Básico",
            description: "Ideal para começar a organizar sua rotina.",
            amount: "Grátis",
            popular: false,
            button: "Plano atual",
            benefits: [
                "Projetos ilimitados",
                "Notas ilimitadas",
                "Controle de tarefas",
                "Dashboard básico",
            ],
        },
        {
            id: 2,
            title: "Premium",
            description: "Todos os recursos para elevar sua produtividade.",
            amount: "R$20",
            popular: true,
            button: "Assinar Premium",
            benefits: [
                "Tudo do plano Básico",
                "Dashboard avançado",
                "Widgets exclusivos",
                "Exportação em PDF",
                "Temas personalizados",
                "Sincronização em nuvem",
            ],
        },
        {
            id: 3,
            title: "Supporter",
            description: "Ajude a manter o projeto vivo e em constante evolução.",
            amount: "R$50",
            popular: false,
            button: "Apoiar projeto",
            benefits: [
                "Tudo do Premium",
                "Cargo exclusivo no Discord",
                "Acesso antecipado às novidades",
                "Badge de apoiador",
            ],
        },
    ];

    return (
        <section className="w-full py-24 font-work-sans">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mx-auto max-w-7xl"
            >
                <div className="mb-16 text-center">
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
                        Planos
                    </span>

                    <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Escolha o plano ideal
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        Comece gratuitamente e faça upgrade apenas quando precisar de
                        recursos mais avançados.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.2 },
                            }}
                            className={`relative flex h-full flex-col rounded-3xl ${plan.popular
                                    ? "bg-linear-to-br from-blue-500 to-blue-700 p-px shadow-xl shadow-blue-500/20"
                                    : "border border-gray-200 bg-white"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
                                        {/* <Sparkles size={15} /> */}
                                        Mais popular
                                    </div>
                                </div>
                            )}

                            <div
                                className={`flex h-full flex-col rounded-[23px] p-8 ${plan.popular ? "bg-white" : ""
                                    }`}
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {plan.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 h-6 text-gray-500">
                                        {plan.description}
                                    </p>

                                    <div className="mt-8">
                                        <div className="flex items-end gap-1">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                {plan.amount}
                                            </span>

                                            {plan.amount !== "Grátis" && (
                                                <span className="mb-1 text-gray-500">/mês</span>
                                            )}
                                        </div>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Sem taxas ocultas. Cancele quando quiser.
                                        </p>
                                    </div>
                                </div>

                                <div className="my-8 h-px bg-gray-200" />

                                <ul className="flex-1 space-y-4">
                                    {plan.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex items-center gap-3 text-gray-700"
                                        >
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                                <Check size={14} strokeWidth={3} />
                                            </div>

                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`mt-10 h-12 w-full cursor-pointer rounded-xl text-base ${plan.popular
                                            ? ""
                                            : "border-gray-300 hover:border-gray-400"
                                        }`}
                                    variant={plan.popular ? "default" : "outline"}
                                    disabled={plan.amount === "Grátis"}
                                >
                                    {plan.button}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Todos os planos incluem atualizações constantes e suporte à plataforma.
                </p>
            </motion.div>
        </section>
    );
}