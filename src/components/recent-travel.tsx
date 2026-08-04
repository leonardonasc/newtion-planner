import { PlaneTakeoff } from 'lucide-react';
import React from 'react'

export default function RecentTravel() {

    const image = 'https://www.manaus.am.gov.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-01-22-at-16.48.25.jpeg';
    return (
        <div className='shadow-sm p-4 flex justify-between rounded-lg flex-col card-gradient'>
            {/* badge */}
            <div className='flex bg-blue-100 rounded-full px-2 py-0.5 items-center space-x-2 w-fit mb-3'>
                <PlaneTakeoff className='text-blue-500' size={12} />
                <span className='text-xs text-blue-500 font-semibold'>Em breve</span>
            </div>

            <div className='flex flex-col my-5'>
                <h1 className='text-xl font-semibold'>Manaus, Amazonas</h1>
                <h2 className='text-sm text-muted-foreground'>Férias</h2>
            </div>

            <div>
                <h3 className='text-2xl text-pretty font-bold'>
                    12
                </h3>
                <h3 className='text-sm text-muted-foreground uppercase'>
                    dias
                </h3>
            </div>
        </div>
    )
}
