import MainNavbar from "@/components/bar/main-navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const data = await auth.api.getSession({ headers: await headers() });
    const navbarUser = data?.user ? {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        image: data.user.image,
    }
        : null;

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-background">
                <MainNavbar user={navbarUser} />
                <main className="flex-1 md:ml-72 pt-16 md:pt-6">
                    <div className="p-4 lg:p-6 max-w-8xl">
                        {children}
                    </div>
                </main>
            </div>
        </ThemeProvider>
    )
}