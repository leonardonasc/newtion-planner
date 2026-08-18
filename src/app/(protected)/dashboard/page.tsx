
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTodos } from "@/server/todos";
import Workspace from "../_components/workspace";
import Greetings from "@/components/greetings";
import { getNotes } from "@/server/notes";

export const revalidate = 60;
export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  const todos = await getTodos();
  const notes = await getNotes();

  return (
    <div className="font-work-sans flex flex-col gap-y-6 ">
      <Greetings name={user?.name} />
      <Workspace todos={todos} notes={notes} />
    </div>
  )
}
