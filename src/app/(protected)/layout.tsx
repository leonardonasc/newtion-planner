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
            <div className="flex min-h-screen flex-col bg-background">
                <header className="fixed top-0 left-0 right-0 z-50">
                    <MainNavbar />
                </header>

                <main className="mt-16 flex-1  text-foreground p-4">
                    {children}
                </main>

                <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center border-t border-border bg-background p-4">
                    <ModeToggle />
                </footer>
            </div>
        </ThemeProvider>
    )
}