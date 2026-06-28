import { Check } from "lucide-react"

export default function Vendas() {

    const data = [
        {
            id: 1,
            title: "Básico",
            description: "Plano inicial",
            amount: "Grátis",
            type: "normal",
            buyButton: "Plano base",
            upgradeList: [
                "Até 3 notas",
                "Até 3 todos",
                "Até 3 wishlists",
            ]
        },
        {
            id: 2,
            title: "Premium",
            description: "Plano com mais recursos",
            amount: "R$20,00",
            type: "most popular",
            buyButton: "Melhorar plano",
            upgradeList: [
                "Até 5 notas",
                "Até 5 todos",
                "Até 5 wishlists",
            ]
        },
        {
            id: 3,
            title: "Suporter",
            description: "Plano para apoiar o projeto",
            amount: "R$50,00",
            type: "normal",
            buyButton: "Melhorar plano",
            upgradeList: [
                "Benefício 1",
                "Benefício 2",
                "Benefício 3"
            ]
        }
    ]

    return (
        <div className="w-full" id="planos">
            <p className="text-center text-4xl font-semibold font-sans text-gray-700 mb-4">
                Planos
            </p>
            <div className="flex gap-x-4 flex-wrap items-center justify-center">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`relative rounded-md mb-4 ${item.type === "most popular" ? "bg-linear-to-r from-blue-500 via-fuchsia-500 to-purple-500 p-0.5" : "border border-gray-300"}`}
                    >
                        {item.type === "most popular" && (
                            <div className="absolute top-1 right-1 z-10 rounded-md font-sans bg-linear-to-r from-purple-500 via-blue-500 to-fuchsia-500 px-3 py-1 text-xs  text-white">
                                Mais Popular
                            </div>
                        )}

                        <div className={`flex flex-col w-90 p-4 rounded-md ${item.type === "most popular" ? "bg-white" : ""}`}>
                            <h2 className="text-lg font-semibold font-sans text-primary-foreground">{item.title}</h2>
                            <p className="text-gray-500 font-sans">{item.description}</p>
                            <p className="text-gray-800 font-bold my-4 font-sans text-3xl">{item.amount}</p>
                            <button className={`px-6 py-3 my-3 text-sm font-semibold font-sans rounded-md ${item.buyButton === "Melhorar plano" ? "bg-blue-950 hover:bg-blue-800 text-white hover:cursor-pointer" : "bg-gray-300 text-gray-700 cursor-not-allowed"}`}>
                                {item.buyButton}
                            </button>
                            <ul className="mt-2">
                                {item.upgradeList.map((benefit, index) => (
                                    <li key={index} className="text-gray-600 text-sm font-normal font-sans">
                                        <Check className="inline mr-2 text-green-600" size={14} />
                                        <span className="border-b border-b-gray-300 border-dotted"> {benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}