'use client'

import { Button } from '@/components/ui/button'
import { createNote } from '@/server/notes'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

interface CreateNoteProps {
    onClose?: () => void
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            variant="default"
            disabled={pending}
        >
            {pending ? "Salvando..." : "Salvar"}
        </Button>
    )
}

export default function CreateNote({ onClose }: CreateNoteProps) {
    const [open, setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
        onClose?.()
    }

    return (
        <>
            <Button
                variant="default"
                className="text-white size-10 absolute bottom-4 right-4 rounded-lg p-0"
                onClick={() => setOpen(true)}
            >
                +
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-background rounded-xl w-full max-w-md p-5 shadow-xl">

                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-lg font-semibold">
                                Criar Nota
                            </h2>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-primary hover:text-gray-900"
                            >
                                <X size={20} />
                            </button>
                        </div>


                        <form
                            action={async (formData) => {
                                try {
                                    await createNote({
                                        title: formData.get("title")?.toString() ?? "",
                                        content: formData.get("content")?.toString() ?? "",
                                        tag: formData.get("tag")?.toString() ?? "",
                                    })

                                    closeModal()
                                } catch (error) {
                                    console.error(error)
                                }
                            }}
                            className="space-y-4"
                        >

                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Título
                                </label>

                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="Nome da nota"
                                    className="
                                        w-full rounded-lg border px-3 py-2
                                        text-sm outline-none
                                        focus:ring-2 focus:ring-primary
                                    "
                                />
                            </div>


                            <div>
                                <label
                                    htmlFor="content"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Conteúdo
                                </label>

                                <textarea
                                    id="content"
                                    name="content"
                                    rows={5}
                                    placeholder="Escreva sua nota..."
                                    className="
                                        w-full resize-none rounded-lg border px-3 py-2
                                        text-sm outline-none
                                        focus:ring-2 focus:ring-primary
                                    "
                                />
                            </div>


                            <div>
                                <label
                                    htmlFor="tag"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Tag
                                </label>

                                <input
                                    id="tag"
                                    name="tag"
                                    type="text"
                                    placeholder="Ex: trabalho, estudo..."
                                    className="
                                        w-full rounded-lg border px-3 py-2
                                        text-sm outline-none
                                        focus:ring-2 focus:ring-primary
                                    "
                                />
                            </div>


                            <div className="flex justify-end gap-2 pt-2">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={closeModal}
                                >
                                    Cancelar
                                </Button>

                                <SubmitButton />
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>
    )
}