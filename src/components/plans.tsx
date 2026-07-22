'use client'
import { Button } from "./ui/button"
import { motion } from "framer-motion"

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
            type: "popular",
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
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
            }}
            viewport={{ once: true }}
            className='flex flex-col gap-x-4 w-full font-work-sans'>
            <p className='text-gray-700 font-medium text-3xl md:text-5xl w-full text-center mb-10'>Planos</p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
                {data.map((item) => (
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.1 }}
                        key={item.id} className={`relative rounded-md hover:shadow-lg mb-4 ${item.type === "popular" ? "bg-linear-to-r from-blue-400 to-blue-600 p-0.5" : "border border-gray-300"}`}>
                        {item.type === "popular" && (
                            <div className="absolute top-1 right-1 z-10 rounded-sm font-work-sans font-normal bg-linear-to-r from-blue-400 to-blue-600 px-3 py-1 text-xs  text-white">
                               Popular
                            </div>
                        )}
                        <div className={`flex flex-col gap-y-6 font-work-sans rounded-md p-4 ${item.type === "popular" ? "bg-white" : "bg-gray-50"}`}>
                            <div>
                                <p className='text-gray-700 font-bold text-2xl'>{item.title}</p>
                                <p className='text-gray-700 font-semibold text-xl'>{item.amount}<span className={'text-lg font-normal ' + (item.amount === "Grátis" ? "hidden" : "")}>/mês</span></p>
                            </div>
                            <ul className='flex flex-col'>
                                {item.upgradeList.map((upgrade, index) => (
                                    <li key={index} className='text-gray-700 font-work-sans text-md'><span className='border-b border-dotted border-b-gray-400'>{upgrade}</span></li>
                                ))}
                            </ul>
                            <Button variant={`${item.amount === 'Grátis' ? 'outline' : 'default'}`} className={`${item.amount === 'Grátis' ? 'disabled cursor-not-allowed' : ''} `}>
                                Escolher Plano
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
