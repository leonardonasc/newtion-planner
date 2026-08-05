'use client'

import News from "@/components/news"
import PendingTasks from "@/components/pending-tasks"
import RecentNotes from "@/components/recent-notes"
import RecentTravel from "@/components/recent-travel"
import { getTodos } from "@/server/todos"
// todo: arrumar a tipagem depois

type WorkspaceProps = {
    todos: Awaited<ReturnType<typeof getTodos>>
}

export default function Workspace({ todos }: WorkspaceProps) {

    console.log(todos)
    return (
        <div>
            <section className="flex flex-col gap-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PendingTasks />
                    <RecentNotes />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <RecentTravel />
                </div>
            </section>
        </div>
    )
}