"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    { category: "compras", value: 275, fill: "var(--color-compras)" },
    { category: "servicos", value: 200, fill: "var(--color-servicos)" },
    { category: "outros", value: 287, fill: "var(--color-outros)" },
    { category: "comida", value: 173, fill: "var(--color-comida)" },
    { category: "transporte", value: 190, fill: "var(--color-transporte)" },
]

const chartConfig = {
    value: {
        label: "Gastos",
    },
    compras: {
        label: "Compras",
        color: "var(--chart-1)",
    },
    servicos: {
        label: "Serviços",
        color: "var(--chart-2)",
    },
    outros: {
        label: "Outros",
        color: "var(--chart-3)",
    },
    comida: {
        label: "Comida",
        color: "var(--chart-4)",
    },
    transporte: {
        label: "Transporte",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

export default function ChartPieDonutText() {
    const totalExpenses = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.value, 0)
    }, [])

    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-60 h-55">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto h-full w-full"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="category"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-2xl font-bold"
                                                >
                                                    {totalExpenses.toLocaleString(
                                                        "pt-BR",
                                                        {
                                                            style: "currency",
                                                            currency: "BRL",
                                                            maximumFractionDigits: 0,
                                                        }
                                                    )}
                                                </tspan>

                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total gasto
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
        </div>
    )
}