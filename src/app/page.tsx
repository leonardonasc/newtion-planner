
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  return (
    <>
      <div>Hello, Next.js!</div>
      {user ? (
        <div>Welcome back, {user.name}!</div>
      ) : (
        <div className="flex gap-2">
          <div>You are not signed in.</div>
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </div>
      )}
      <Link href="/dashboard" className="text-blue-500 hover:underline">
        Go to Dashboard
      </Link>
      <Link href="/tests" className="text-blue-500 hover:underline">
        Go to Tests
      </Link>
      <Link href="/todos" className="text-blue-500 hover:underline">
        Go to Todos
      </Link>
    </>
  );
}
