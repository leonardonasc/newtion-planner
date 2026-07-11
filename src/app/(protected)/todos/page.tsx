import { getTodos } from "@/server/todos";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Workspace from "../_components/workspace";

export default async function TodoPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  const todos = await getTodos('createdAt')

  return (
    <div className="flex w-full h-full">
      <Workspace todos={todos} />
    </div>
  )
}