import { Logout } from "@/components/logout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 60;
export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  return (

    <>

      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <Link href="/todos" className="text-blue-500 hover:underline">
        Go to Todos
      </Link>
      <Link href="/expenses" className="text-blue-500 hover:underline">
        Go to Expenses
      </Link>
      <Logout />
    </>
  )
}
