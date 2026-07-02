'use client'
import { Input } from '@base-ui/react'
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldError,
} from "@/components/ui/field"
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2, Plus } from 'lucide-react';
import { createTodoItemSchema } from "@/validations/todos";

interface TodoItemCreateProps {
    params: {
        id: string;
    }
}

export default function TodoItemCreate({ params }: TodoItemCreateProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { id } = params;


    const form = useForm<z.input<typeof createTodoItemSchema>>({
        resolver: zodResolver(createTodoItemSchema),
        defaultValues: {
            content: "",
            todoId: id,
            completed: false,
        },
    });

    async function onSubmit(data: z.input<typeof createTodoItemSchema>) {
        setLoading(true);
        try {
            const payload = {
                content: data.content,
                todoId: data.todoId,
                completed: data.completed,
            };

            const res = await fetch(`/api/todo-items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                throw new Error("Failed to create todo item");
            }
            form.reset({
                content: "",
                todoId: id,
                completed: false,
            });
            router.refresh();
            toast.success("Todo item created successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to create todo item");
        } finally {
            setLoading(false);
        }

    }

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-start gap-2"
        >
            <Field className='h-11'>
                <Controller
                    name="content"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <Input
                                {...field}
                                id={field.name}
                                type="text"
                                placeholder="Enter todo item content"
                                aria-invalid={fieldState.invalid}
                                className='border-2 p-2 border-foreground rounded-md'
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </Field>
            <Button type="submit" className='border-2 p-2 border-foreground rounded-md size-11' disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : <Plus />}
            </Button>
        </form>
    )
}
