
export default function Plans() {

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
        <div className='flex flex-col gap-x-4 w-full font-sans'>
            <p className='text-gray-700 font-sans font-bold text-3xl md:text-5xl w-full text-center mb-10'>Planos</p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
                {data.map((item) => (
                    <div key={item.id} className={`relative rounded-md mb-4 ${item.type === "most popular" ? "bg-linear-to-r from-blue-500 via-fuchsia-500 to-purple-500 p-0.5" : "border border-gray-300"}`}>
                        {item.type === "most popular" && (
                            <div className="absolute top-1 right-1 z-10 rounded-md font-sans bg-linear-to-r from-purple-500 via-blue-500 to-fuchsia-500 px-3 py-1 text-xs  text-white">
                                Mais Popular
                            </div>
                        )}
                        <div className={`flex flex-col gap-y-6 rounded-md p-4 ${item.type === "most popular" ? "bg-white" : "bg-gray-50"}`}>
                            <div>
                                <p className='text-gray-700 font-sans font-bold text-2xl'>{item.title}</p>
                                <p className='text-gray-700 font-sans font-bold text-xl'>{item.amount}<span className={'text-lg font-normal ' + (item.amount === "Grátis" ? "hidden" : "")}>/mês</span></p>
                            </div>
                            <ul className='flex flex-col'>
                                {item.upgradeList.map((upgrade, index) => (
                                    <li key={index} className='text-gray-500 font-sans text-sm '><span className='border-b border-dotted border-b-gray-200'>{upgrade}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
