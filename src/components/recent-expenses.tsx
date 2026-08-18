import { ArrowUpRight, Banknote } from 'lucide-react'
import ChartPieDonutText from './chart-pie-donut-text'
import Link from 'next/link'

export default function RecentExpenses() {

    const chartData = [
        { category: "compras", value: 275, fill: "var(--color-compras)" },
        { category: "servicos", value: 200, fill: "var(--color-servicos)" },
        { category: "outros", value: 287, fill: "var(--color-outros)" },
        { category: "comida", value: 173, fill: "var(--color-comida)" },
        { category: "transporte", value: 190, fill: "var(--color-transporte)" },
    ]

    const totalExpenses = chartData.reduce(
        (acc, curr) => acc + curr.value,
        0
    )

    return (
        <div className='relative card-gradient shadow-sm p-4 flex rounded-lg flex-col h-full w-full self-stretch'>
            {/* coming soon overlay */}
            <div className='absolute inset-0 bg-black/60 rounded-lg backdrop-blur-[2px] z-10'>
                <div className='flex flex-col items-center justify-center h-full space-y-2'>
                    <span className='text-4xl text-gray-50 font-semibold'>
                        Em breve
                    </span>
                </div>
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-2'>
                    <Banknote className='text-blue-500' size={20} />
                    <h2 className='text-sm font-semibold'>
                        Controle de Despesas
                    </h2>
                </div>

                <Link href="/tasks" className='flex items-center space-x-1 border p-1 rounded-full border-blue-500'>
                    <span className='text-sm text-blue-500 font-semibold'><ArrowUpRight size={16} /></span>
                </Link>
            </div>

            <div className='mt-4 flex-1'>
                <div className='flex flex-col xl:flex-row items-stretch justify-between gap-4 h-full'>
                    <div className="w-full">
                        <ChartPieDonutText />
                    </div>

                    <div className="w-full flex items-center xl:hidden">
                        <table className="w-full">
                            <tbody>
                                {chartData.map((item) => (
                                    <tr
                                        key={item.category}
                                        className="border-b last:border-b-0"
                                    >
                                        <td className="py-2">
                                            <span className="text-xs font-semibold capitalize">
                                                {item.category}
                                            </span>
                                        </td>

                                        {/* <td className="py-2 text-right">
                                            <span className="text-xs font-semibold text-gray-500">
                                                {item.value.toLocaleString(
                                                    "pt-BR",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }
                                                )}
                                            </span>
                                        </td> */}

                                        <td className="py-2 text-right">
                                            <span className="text-xs font-semibold text-gray-500">
                                                {(
                                                    (item.value / totalExpenses) *
                                                    100
                                                ).toFixed(1)}
                                                %
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}