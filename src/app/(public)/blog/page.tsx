"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import BlogThumb from "../_components/blog-thumb"

const articles = [
    {
        title: "Roadmap do Newtion: o que esperar das próximas atualizações",
        imgTitle: "Roadmap",
        description:
            "Confira o roadmap do Newtion e saiba quais recursos e melhorias estão planejados para o futuro.",
        date: "2024-06-01",
        href: "/blog/mapping",
    },
    {
        title: "Como surgiu o Newtion e qual é o seu objetivo",
        imgTitle: "Onde tudo começou",
        description:
            "Conheça a história do Newtion e entenda o propósito por trás da criação deste projeto.",
        date: "2024-06-02",
        href: "/blog/about",
    },
]

export default function Page() {
    const [search, setSearch] = useState("")

    const filteredArticles = useMemo(() => {
        const term = search.trim().toLowerCase()

        if (!term) return articles

        return articles.filter((article) => {
            return (
                article.title.toLowerCase().includes(term) ||
                article.description.toLowerCase().includes(term) ||
                article.imgTitle.toLowerCase().includes(term)
            )
        })
    }, [search])

    return (
        <div className="mx-auto flex min-h-screen justify-center mt-40 md:mt-15 w-full max-w-5xl flex-col items-center px-5 py-2 mb-6">
            <header className="mb-12 flex w-full flex-col">
                <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                    Newtion Blog
                </h1>

                <p className="text-lg text-gray-700">
                    Atualizações e novidades sobre o projeto.
                </p>

                <div className="mt-4 w-full">
                    <Input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Pesquisar artigos..."
                        className="h-13 w-full rounded-md border-2 px-4 text-2xl leading-none shadow-sm placeholder:text-lg"
                    />
                </div>
            </header>

            <section className="flex w-full flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold">
                        Todos os artigos
                    </h2>

                    {search && (
                        <span className="text-sm text-gray-500">
                            {filteredArticles.length}{" "}
                            {filteredArticles.length === 1
                                ? "artigo encontrado"
                                : "artigos encontrados"}
                        </span>
                    )}
                </div>

                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {filteredArticles.map((article) => (
                            <BlogThumb
                                key={article.title}
                                article={article}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-48 items-center justify-center rounded-md border border-dashed">
                        <div className="text-center">
                            <p className="font-medium">
                                Nenhum artigo encontrado
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Tente pesquisar por outro termo.
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}