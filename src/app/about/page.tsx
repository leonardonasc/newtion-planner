import Link from "next/link";


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-work-sans">
            <main className="mx-auto max-w-3xl px-6 py-16">
                <header className="mb-12 border-b border-gray-200 pb-8 flex flex-col">
                    <Link href="/" className="text-sm mb-7 font-medium text-blue-600 hover:underline">
                        &larr; Voltar para a página inicial
                    </Link>

                    <div className="mt-4 flex flex-col">
                        <span className="text-md font-bold uppercase tracking-wider text-blue-600">
                            Sobre
                        </span>

                        <h1 className="text-4xl font-bold text-gray-900">
                            Conheça um pouco mais sobre este projeto
                        </h1>
                    </div>

                    <p className="mt-4 text-lg leading-8 text-gray-500 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        malesuada, ligula nec aliquet malesuada, neque ligula luctus
                        ligula, vitae tincidunt erat mauris sed libero.
                    </p>
                </header>

                <article className="space-y-12">


                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Como surgiu
                        </h2>

                        <p className="leading-8 text-gray-500 font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            iaculis, justo vitae viverra aliquam, erat risus interdum elit,
                            eget luctus lacus elit vitae lectus. Morbi id sapien sed nibh
                            hendrerit pulvinar.
                        </p>

                        {/* <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            vulputate sem sed metus tristique, vel dictum est aliquam."
                        </blockquote> */}
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Nossa missão
                        </h2>

                        <p className="leading-8 text-gray-500 font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                            posuere, massa quis scelerisque pretium, arcu purus fermentum
                            velit, sed tristique erat ligula vitae ipsum. Integer at velit
                            vitae risus fermentum luctus. Duis sit amet erat sed purus
                            pharetra feugiat.
                        </p>

                        <p className="leading-8 text-gray-500 font-normal">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae; Donec non turpis ac lorem dignissim
                            pharetra. Mauris euismod, sapien sed tincidunt posuere, lacus
                            justo facilisis risus, vitae volutpat lacus massa nec justo.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            O que você encontra aqui
                        </h2>

                        <p className="leading-8 text-gray-500 font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            facilisi. Curabitur malesuada neque sed augue vestibulum, vitae
                            ultricies augue posuere. Duis ac diam vel massa faucibus
                            condimentum. Sed feugiat, risus vitae posuere malesuada, tortor
                            lacus malesuada augue, et posuere orci erat vitae justo.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-gray-700">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Integer feugiat neque quis ligula facilisis, non posuere nunc
                                tincidunt.
                            </li>
                            <li>
                                Suspendisse potenti. Donec convallis est vitae ipsum
                                ullamcorper.
                            </li>
                            <li>
                                Vivamus porttitor erat vel est facilisis, sed consequat tortor
                                placerat.
                            </li>
                        </ul>
                    </section>

                </article>
            </main>
        </div>
    );
}