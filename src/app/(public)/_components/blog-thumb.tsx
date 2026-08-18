import Link from "next/link"

interface BlogThumbProps {
  article: {
    title: string
    imgTitle: string
    description: string
    date: string
    href: string
  }
}

export default function BlogThumb({ article }: BlogThumbProps) {
  return (
    <Link
      href={article.href}
      className="group block h-full overflow-hidden rounded-md"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-md border border-separate transition-colors hover:border-primary">
        <div className="bg-linear-to-b from-blue-500 to-blue-600 flex h-60 shrink-0 items-center justify-center border-b rounded-t-md">
          <span className="text-4xl font-crimson-text text-gray-100 text-center">
            {article.imgTitle}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="mb-2 text-sm text-gray-500">
            {article.date}
          </p>

          <h3 className="text-xl font-semibold leading-tight">
            {article.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-gray-700">
            {article.description}
          </p>

          <span className="mt-auto flex w-fit items-center gap-1 pt-6 text-sm font-medium text-blue-500 transition-all group-hover:gap-2">
            Ler mais &rarr;
          </span>
        </div>
      </article>
    </Link>
  )
}