import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const ButtonWithIconDemo = () => {
  return (
    <Button
      asChild
      className="group relative h-11 w-full cursor-pointer overflow-hidden rounded-full p-1 ps-5 pe-12 text-sm font-medium transition-all duration-500 lg:w-fit lg:h-12 lg:ps-6 lg:pe-14 lg:hover:ps-14 lg:hover:pe-6">
      <Link href="/dashboard">
        <span className="relative z-10 transition-all duration-500">
          Começar agora
        </span>
        <div className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-foreground transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45 lg:h-10 lg:w-10 lg:group-hover:right-[calc(100%-44px)]">
          <ArrowUpRight size={16} />
        </div>
      </Link>
    </Button>
  )
}

export default ButtonWithIconDemo