'use client';

import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CircleCheckBig, CircleSmall, NotebookText, Square, SquareCheck } from "lucide-react";
import { useState } from "react";

export default function Tests() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div className="p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-bold">Tests</h1>
            </header>

            <main className="flex flex-wrap gap-6">
                <>
                    <div className="p-4 w-80">
                        {/* Notes content will go here */}
                        <h2 className="bg-amber-100 text-black border-l-3 text-md font-bold border-amber-600 p-2">Quick Notes</h2>

                        <Button variant="outline" className="w-fit my-4">
                            Add Quick Note
                        </Button>

                        <div className="flex flex-col w-full p-4 border bg-amber-100 text-black">
                            <h3 className="flex items-center gap-2 text-xs font-semibold">
                                <NotebookText className="size-4" />
                                New Note
                            </h3>
                            <Separator className="my-2 bg-black/30" />

                            <div className="text-sm font-light p-2">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iste labore natus animi cum ipsa, maxime doloribus odit? Exercitationem laudantium consequatur magnam voluptatem saepe neque reprehenderit dolorem optio illum dignissimos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 w-80">
                        {/* Notes content will go here */}
                        <h2 className="bg-blue-100 text-black border-l-3 text-md font-bold border-blue-600 p-2">Todo List</h2>

                        <Button variant="outline" className="w-fit my-4">
                            Add Todo List Item
                        </Button>

                        <div className="flex flex-col w-full p-4 border bg-blue-100 text-black">
                            <h3 className="flex items-center gap-2 text-xs font-semibold">
                                <CircleCheckBig className="size-4" />
                                Todo List
                            </h3>
                            <Separator className="my-2 bg-black/30" />

                            <div className="text-sm font-light p-2">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <SquareCheck className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <Square className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <SquareCheck className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <Square className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <Square className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="p-4 w-80">
                        {/* Notes content will go here */}
                        <h2 className="bg-green-100 text-black border-l-3 text-md font-bold border-green-600 p-2">Grocery List</h2>

                        <Button variant="outline" className="w-fit my-4">
                            Add Grocery Item
                        </Button>

                        <div className="flex flex-col w-full p-4 border bg-green-100 text-black">
                            <h3 className="flex items-center gap-2 text-xs font-semibold">
                                <NotebookText className="size-4" />
                                New Grocery List
                            </h3>
                            <Separator className="my-2 bg-black/30" />

                            <div className="text-sm font-light p-2">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <CircleSmall className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <CircleSmall className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <CircleSmall className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <CircleSmall className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                    <Separator className="my-2 bg-black/30" />
                                    <div className="flex items-center gap-2">
                                        <CircleSmall className="size-4" />
                                        <label htmlFor="todo-1">Lorem ipsum dolor sit</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    {count}
                    <Button onClick={() => handleClick()}>
                        Increment
                    </Button>
                </>
            </main>

        </div>
    )
}
