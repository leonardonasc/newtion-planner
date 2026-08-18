"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

import { Button } from "./ui/button";
import Tag from "./tag";
import SubDescription from "./sub-description";
import { useState } from "react";

export default function Pricing() {

    const [selectYearly, setSelectYearly] = useState(false);

    const plans = [
        {
            id: 1,
            title: "Básico",
            description: "Ideal para começar a organizar sua rotina.",
            amount: "Grátis",
            popular: false,
            button: "Plano Básico",
            benefits: [
                { id: 1, text: "Projetos ilimitados" },
                { id: 2, text: "A definir" },
                { id: 3, text: "A definir" },
            ]
        },
        {
            id: 2,
            title: "Premium",
            description: "Todos os recursos para elevar sua produtividade.",
            amount: "R$20",
            popular: true,
            button: "Assinar Premium",
            benefits: [
                { id: 1, text: "Tudo do plano Básico" },
                { id: 2, text: "Exportação em PDF" },
                { id: 3, text: "A definir" },
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
                { id: 1, text: "Tudo do Premium" },
                { id: 2, text: "Badge de apoiador" },
                { id: 3, text: "A definir" },
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
                    <Tag text="Planos" />
                    <SubDescription
                        title="Escolha o plano ideal"
                        description="Comece gratuitamente e faça upgrade apenas quando precisar de
                        recursos mais avançados."
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.1 },
                            }}
                            className={`relative flex h-full flex-col rounded-3xl ${plan.popular
                                ? "border-2 border-blue-500 bg-white shadow-lg"
                                : "border border-gray-200 bg-offwhite-50 shadow-lg"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                                    <div className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
                                        Mais popular
                                    </div>
                                </div>
                            )}

                            <div className="flex h-full flex-col p-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-700">
                                        {plan.title}
                                    </h3>

                                    <div>
                                        <div className="flex items-end gap-1">
                                            <span className="text-5xl font-bold tracking-tight text-gray-700">
                                                {plan.amount}
                                            </span>

                                            {plan.amount !== "Grátis" && (
                                                <span className="mb-1 font-normal text-muted-foreground">
                                                    /mês
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="my-8 border-t border-gray-400 border-dotted" />

                                <ul className="flex-1 space-y-3">
                                    {plan.benefits.map((benefit) => (
                                        <li
                                            key={benefit.id}
                                            className="flex items-center gap-3 text-gray-700"
                                        >
                                            <div>
                                                <Check size={16} className="text-primary" />
                                            </div>

                                            <span className="text-md font-normal">
                                                {benefit.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`mt-10 h-12 w-full cursor-pointer rounded-xl text-base ${plan.popular
                                        ? "text-white"
                                        : "border-border hover:border-border"
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
            </motion.div>
        </section>
    );
}