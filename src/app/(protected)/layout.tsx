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
                <main className="flex-1 md:ml-72 pt-16 md:pt-6">
                    <div className="p-4 border-b border-b-accent hidden md:flex"></div>
                    <div className="p-4 md:p-4 lg:p-6 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </ThemeProvider>
    )
}