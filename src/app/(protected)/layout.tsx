import MainNavbar from "@/components/bar/main-navbar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth.api.getSession({ headers: await headers() })
    const userName = session?.user?.name ?? ""

    return (
        <div className="w-full min-h-screen gap-y p-4">
            <MainNavbar user={session?.user} />
            <main className="flex-1 min-w-0">{children}</main>
        </div>
    )
}