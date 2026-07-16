import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import TodoNav from "./_components/TodoNav"

export default async function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth.api.getSession({ headers: await headers() })
    const userName = session?.user?.name ?? ""

    return (
        <div className="flex w-full min-h-screen flex-col gap-y p-4">
            <TodoNav userName={userName} />
            <main className="flex-1 min-w-0">{children}</main>
        </div>
    )
}