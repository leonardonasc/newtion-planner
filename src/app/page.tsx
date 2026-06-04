
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hello, Next.js!</div>
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
