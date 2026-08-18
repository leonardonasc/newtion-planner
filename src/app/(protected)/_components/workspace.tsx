'use client'

import News from "@/components/news"
import PendingTasks from "@/components/pending-tasks"
import RecentExpenses from "@/components/recent-expenses"
import RecentNotes from "@/components/recent-notes"
import RecentTravel from "@/components/recent-travel"
import { getNotes } from "@/server/notes"
import { getTodos } from "@/server/todos"

type WorkspaceProps = {
    todos: Awaited<ReturnType<typeof getTodos>>
    notes: Awaited<ReturnType<typeof getNotes>>
}

export default function Workspace({ todos, notes }: WorkspaceProps) {

    console.log(todos)
    return (
        <main className="w-full flex flex-col lg:flex-row md:justify-between md:gap-x-6">
            <section className="flex flex-1 flex-col gap-y-4">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className="h-full md:self-stretch xl:col-span-2">
                        <PendingTasks />
                    </div>
                    <div className="h-full md:self-stretch xl:col-span-1">
                        <RecentExpenses />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:self-stretch">
                    <div className="xl:col-span-1">
                        <RecentTravel />
                    </div>
                    <div className="xl:col-span-2">
                        <RecentNotes notes={notes} />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-y-4 mt-4 lg:mt-0 lg:w-80">
                <News />
            </section>
        </main>
    )
}