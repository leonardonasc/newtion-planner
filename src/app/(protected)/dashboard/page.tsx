
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DashboardHeader from "./_components/dashboard-header";
import CardsResumo from "./_components/cards-resumo";
import DashboardItems from "./_components/dashboard-items";

export const revalidate = 60;
export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  return (

    <div className="bg-offwhite-50 font-work-sans">

      {/* Header com informações do usuário */}
      <header>
        <DashboardHeader user={user} />

        {/* Cards de resumo */}
        <CardsResumo />
      </header>

      <main className="flex flex-col mt-6">

        <DashboardItems />

      </main>

    </div>
  )
}
