import MainNavbar from "@/components/bar/main-navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/toggle-mode"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-background">
                <MainNavbar />

                <main className="flex-1 md:ml-72 pt-16 md:pt-0">
                    <div className="p-8">
                        {children}
                    </div>
                </main>
            </div>
        </ThemeProvider>
    )
}