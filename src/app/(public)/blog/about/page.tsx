import Link from "next/link";


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-work-sans">
            <main className="mx-auto max-w-5xl px-6 py-16">
                <header className="mb-12 border-b border-gray-200 pb-8 flex flex-col">
                    <div className="mt-30 flex flex-col">
                        <Link href="/blog" className="text-blue-600 font-medium text-sm hover:underline mb-8">
                            &larr; Voltar para o blog
                        </Link>
                        <span className="text-md font-bold uppercase tracking-wider text-blue-600">
                            Sobre
                        </span>

                        <h1 className="text-4xl font-bold text-gray-900">
                            Conheça um pouco mais sobre este projeto
                        </h1>
                    </div>

                    <p className="mt-4 text-lg leading-8 text-gray-600 font-normal">
                        O Newtion nasceu visando resolver mais de um problema. Como todos sabem, existem diversas plataformas que buscam melhorar a produtividade e a organização. Porém, grande parte delas é paga ou atende apenas a um nicho específico. Aqui, buscamos mudar isso, oferecendo uma plataforma simples e objetiva, que atenda a uma grande variedade de pessoas, ajudando-as a entender e melhorar sua rotina, organização e produtividade.
                    </p>
                </header>

                <article className="space-y-12">


                    <section className="space-y-4">
                        <h2 className="text-4xl font-semibold text-gray-900">
                            Como surgiu
                        </h2>

                        <p className="leading-8 text-lg text-gray-600 font-normal">
                            Durante viagens, estudos e experiências profissionais, percebi a necessidade de uma plataforma que reunisse e facilitasse a organização de tarefas, recursos e informações. A partir disso, surgiu a ideia de criar o Newtion, visando oferecer uma experiência simples, intuitiva e capaz de ajudar não apenas na organização, mas também a entender como melhorar a rotina, a produtividade e a organização pessoal.
                        </p>

                        {/* <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            vulputate sem sed metus tristique, vel dictum est aliquam."
                        </blockquote> */}
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-4xl font-semibold text-gray-900">
                            Objetivo e futuro
                        </h2>

                        <p className="leading-8 text-lg text-gray-600 font-normal">
                            O objetivo sempre será oferecer uma plataforma simples, onde qualquer pessoa consiga se organizar e melhorar sua produtividade. Buscamos constantemente formas de aprimorar a experiência do usuário, oferecendo recursos que realmente façam diferença na vida das pessoas. A ideia é que o Newtion seja uma plataforma completa, sem perder a simplicidade e a objetividade.
                        </p>

                        <p className="leading-8 text-lg text-gray-600 font-normal">
                            No momento, a plataforma está no início, porém já existem diversos recursos planejados e muitos outros em desenvolvimento. Conforme o projeto evolui, novas ideias e funcionalidades vêm sendo implementadas aos poucos. Caso tenha interesse, você pode acompanhar o progresso do projeto na página de <Link href="/blog/mapping" className="text-blue-600 font-medium hover:underline">mapping</Link>.
                        </p>

                        <p className="leading-8 text-lg text-gray-600 font-normal">
                            A ideia é que, ao longo do tempo, o Newtion se torne não apenas uma plataforma de organização, mas também um espaço educativo, onde as pessoas possam aprender boas práticas de organização, produtividade e gestão do tempo, além de contar com recursos que realmente façam diferença no dia a dia.
                        </p>

                    </section>
                    <section className="space-y-4">
                        <h2 className="text-4xl font-semibold text-gray-900">
                            Principais features e suas motivações
                        </h2>

                        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 font-normal">
                            <li>
                                <span className="font-medium">Organização de tarefas:</span> O ponto inicial do Newtion é a organização de tarefas, permitindo que os usuários criem, gerenciem e acompanhem suas atividades de forma simples e eficiente com recursos como listas, categorias, prioridades e prazos.
                            </li>
                            <li>
                                <span className="font-medium">Gestão financeira:</span> Além da organização de tarefas, o Newtion também oferece recursos para gestão financeira, permitindo que os usuários controlem seus gastos, receitas e orçamentos, ajudando a manter suas finanças em ordem.
                            </li>
                            <li>
                                <span className="font-medium">Notas:</span> Além da organização de tarefas, o Newtion oferece a possibilidade de criar notas, permitindo que os usuários registrem informações importantes, ideias e lembretes de forma rápida e prática.
                            </li>
                            <li>
                                <span className="font-medium">Listas de desejos:</span> O Newtion também permite que os usuários criem listas de desejos, onde podem registrar produtos, serviços ou experiências que desejam adquirir ou realizar no futuro, ajudando a manter o foco e a organização.
                            </li>
                            <li>
                                <span className="font-medium">Recursos educativos:</span> A ideia é que o Newtion se torne também um espaço educativo, oferecendo conteúdos e recursos que ajudem os usuários a aprender boas práticas de organização com dicas, artigos e tutoriais sobre produtividade, gestão do tempo e organização pessoal.
                            </li>
                        </ul>

                    </section>

                </article>
            </main>
        </div>
    );
}