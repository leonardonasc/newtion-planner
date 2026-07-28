import MainNavbar from "@/components/bar/main-navbar"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { Work_Sans } from "next/font/google"
import { headers } from "next/headers"

// protected layout

const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"],
});


export default async function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth.api.getSession({ headers: await headers() })

    return (
        <html
            lang="en"
            className={cn("h-full", "antialiased", workSans.variable, "font-work-sans")}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col bg-offwhite-50">
                <header className="fixed top-0 left-0 right-0 z-50">
                    <MainNavbar user={session?.user} />
                </header>
                {/* arrumar o espaçamento */}
                <main className="flex-1 mt-8 p-4">
                    {children}
                </main>
            </body>
        </html>
    )
}
