import { Logout } from "@/components/logout";
import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 60;
export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  return (

    <div className="mt-15 md:mt-0 text-primary flex flex-col font-sans">
      <p className="text-primary font-bold text-xl">Welcome, {user?.name}!</p>

    </div>
  )
}
