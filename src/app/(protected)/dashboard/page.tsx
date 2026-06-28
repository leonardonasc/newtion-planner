import { Logout } from "@/components/logout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 60;
export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  return (

    <div className="p-4 text-primary-foreground flex flex-col">
      <h1>Dashboard</h1>
      <p className="text-primary-foreground">Welcome, {user?.name}!</p>
      <Link href="/dashboard" className="text-blue-500 hover:underline">
        Go to Dashboard
      </Link>
      <Link href="/tests" className="text-blue-500 hover:underline">
        Go to Tests
      </Link>
      <Link href="/todos" className="text-blue-500 hover:underline">
        Go to Todos
      </Link>
      <Link href="/expenses" className="text-blue-500 hover:underline">
        Go to Expenses
      </Link>
      <div className="flex items-center justify-start mt-4">
        <Logout />

      </div>
    </div>
  )
}
