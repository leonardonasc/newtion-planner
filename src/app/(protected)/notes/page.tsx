import PageHeader from "@/components/page-header";
import { Input } from "@/components/ui/input";
import CreateNote from "../_components/create-note";
import { getNotes } from "@/server/notes";

export default async function page() {
    const notes = await getNotes();

    return (
        <div>
            <header className="flex flex-col gap-y-4">
                <PageHeader title="Notas" subtitle="Gerencie suas notas de forma rápida e prática." />
                <Input placeholder="Pesquisar notas..." className="w-full mt-2 rounded-md" />
            </header>
            <CreateNote />

            <div className="mt-4">
                {notes.length === 0 ? (
                    <p className="text-gray-500">Nenhuma nota encontrada.</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {notes.map((note) => (
                            <li key={note.id} className="bg-card shadow-card p-4 rounded-md shadow-md">
                                <h3 className="text-lg font-semibold">{note.title}</h3>
                               <span>{note.tag}</span>
                                <p className="text-primary mt-2">{note.content}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
