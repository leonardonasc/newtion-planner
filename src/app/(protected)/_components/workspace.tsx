'use client'

import PendingTasks from "@/components/pending-tasks"
import RecentExpenses from "@/components/recent-expenses"
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-1 md:self-stretch">
                        <PendingTasks />
                    </div>
                    <div className="lg:col-span-2">
                        <RecentExpenses />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                        <RecentNotes />
                    </div>
                    <div className="lg:col-span-1 md:self-stretch">
                        <RecentTravel />
                    </div>
                </div>
            </section>
        </div>
    )
}