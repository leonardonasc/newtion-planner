import MainNavbar from "@/components/bar/main-navbar"
import { ThemeProvider } from "@/components/theme-provider"

export default async function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-background">
                <MainNavbar />
                <main className="flex-1 md:ml-72 pt-16 md:pt-6">
                    <div className="p-4 lg:p-6 max-w-8xl">
                        {children}
                    </div>
                </main>
            </div>
        </ThemeProvider>
    )
}