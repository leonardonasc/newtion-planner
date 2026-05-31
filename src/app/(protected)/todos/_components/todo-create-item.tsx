'use client'
import { Input } from '@base-ui/react'
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, Form, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/ui/field"
import { useRouter } from 'next/navigation';


export default function TodoCreateItem() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const formSchema = z.object({
        title: z.string().min(1, "Title is required"),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",

        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            const res = await fetch("/api/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Failed to create todo");
            }
            form.reset();
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full items-center gap-2"
        >
            <Field>
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                type="text"
                                placeholder="Enter todo title"
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </Field>
            <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create"}
            </Button>
        </form>
    )
}
