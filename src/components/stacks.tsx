

export default function Stacks() {

    const stacks = [{
        name: "Next.js",
        color: "bg-blue-500"
    }, {
        name: "Drizzle ORM",
        color: "bg-green-500"
    }, {
        name: "NeonDB",
        color: "bg-purple-500"
    }, {
        name: "Tailwind CSS",
        color: "bg-cyan-500"
    }, {
        name: "TypeScript",
        color: "bg-blue-600"
    }, {
        name: "Better Auth",
        color: "bg-pink-500"
    }, {
        name: "Zod",
        color: "bg-yellow-500"
    }];

    return (
        <div className='flex flex-col w-full h-70 bg-accent-foreground mt-20 border-b border-t border-t-primary border-b-primary items-center justify-center gap-y-6'>
            <p className='text-4xl font-bold text-gray-700 font-sans'>Stacks utilizadas</p>
            <span className='text-sm text-gray-500 w-[30%]'>Next.js, Drizzle, NeonDB, Tailwind CSS, TypeScript. Feitos com propósitos de performance,escalabilidade e boas práticas.</span>
            <div>
                <div className='flex gap-x-2 text-sm'>
                    {stacks.map((stack, index) => (
                        <div key={index} className={`flex items-center gap-x-1 px-2 py-1 rounded-md border border-gray-300 text-white`}>
                            <div className={`w-2 h-2 rounded-full ${stack.color}`}>
                            </div>
                            <span className="text-gray-500">{stack.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
