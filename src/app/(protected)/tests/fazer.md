

-cache e revalidate nas req do servidor
-componente de loading e talvez usar o suspense fallback 
-fazer rotas dinamicas para as pages de criar nota, criar todo e etc
-pagina de configurações estilo a do notion
-integrar musica (lofi)
-fazer os metadatas
-pag para armazenar links, ex: videos para assistir mais tarde
-pagina para pomodoro
-colocar toast nas reqs que esqueci (qnd cria lista ou deleta)
-fazer o delete das listas/itens
-fazer skeletons
-arrumar o proxy
-req quando nao esta logado ta quebrando porq o user n tem ID
-fazer paginator / https://orm.drizzle.team/docs/guides/limit-offset-pagination


    <div className="flex flex-col min-h-screen items-center justify-center gap-y-2 scroll-smooth">
      <Navbar />
      <div className='flex flex-col items-start justify-between gap-y-4 mx-auto max-w-6xl h-screen'>
        <div></div>
        <div className='flex flex-col items-start justify-center gap-y-4'>
          <p className='w-[60%] text-7xl font-sans font-semibold text-gray-700'>
            Todo o seu <span className='bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>planejamento</span> em um só lugar
          </p>
          <p className='w-[60%] text-lg font-sans text-gray-500'>
            Planeje suas tarefas, organize seus gastos e acompanhe o progresso de seus projetos com facilidade. Nossa plataforma oferece uma experiência intuitiva e eficiente para ajudá-lo a alcançar seus objetivos.
          </p>
          <div className='flex gap-x-3'>
            <Link
              href="#"
              className="group px-6 py-3 mt-2 text-sm font-semibold font-sans bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-1"
            >
              Comece agora
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link href="#" className='px-6 py-3 mt-2 text-sm font-semibold font-sans border border-gray-300 text-gray-700 rounded-md flex items-center gap-1'>
              Saiba mais <Info size={14} />
            </Link>
          </div>
          <span className="text-red-500 font-sans font-semibold text-xs">No momento estamos realizando a manutenção e correção da ui, por isso, os recursos podem não estar disponíveis.</span>
        </div>
        <div className="flex flex-col mb-4 w-full self-end items-center justify-center gap-y-2">
          <a href="#inside-project" className="flex flex-col items-center justify-center gap-y-1">
            <Mouse size={15} className="text-gray-500 animate-bounce" />
            <span className="text-gray-500 font-sans text-sm"><ArrowDown size={15} /></span>
          </a>
        </div>
      </div>
      <div className="w-full max-w-6xl h-px bg-gray-300 my-8"></div>
      <div className="flex flex-col items-start justify-center gap-y-4 mx-auto max-w-6xl">
        <InsideProject />
        <div className="w-full h-px bg-gray-300 my-8"></div>
        <Vendas />
        <div className="w-full h-px bg-gray-300 my-8"></div>
        <About />
        <div className="w-full h-px bg-gray-300 my-8"></div>
        <Metas />
      </div>
      <Stacks />
    </div>