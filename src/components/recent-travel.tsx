import { PlaneTakeoff } from 'lucide-react';
import React from 'react'

export default function RecentTravel() {

    const image = 'https://www.viajenaviagem.com/wp-content/uploads/2021/09/manaus-1920x1080-1.jpg.webp';
    return (
        <div
            className="relative shadow-card rounded-lg overflow-hidden h-full"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
             <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

            {/* Conteúdo */}
            <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                {/* badge */}
                <div className='flex bg-blue-100 rounded-full px-2 py-0.5 items-center space-x-2 w-fit mb-3'>
                    <PlaneTakeoff className='text-blue-500' size={12} />
                    <span className='text-xs text-blue-500 font-semibold'>Em breve</span>
                </div>

                <div className='flex flex-col my-5'>
                    <h1 className='text-xl font-semibold text-gray-50 text-shadow'>Manaus, Amazonas</h1>
                    <h2 className='text-sm text-blue-200 font-semibold text-shadow-sm'>Férias</h2>
                </div>

                <div>
                    <h3 className='text-2xl text-gray-50 text-pretty font-bold [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]'>
                        12
                    </h3>
                    <h3 className='text-sm text-gray-200 uppercase'>
                        dias
                    </h3>
                </div>
            </div>
        </div>


    )
}
