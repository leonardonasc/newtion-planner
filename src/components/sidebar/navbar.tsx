import { GitFork } from 'lucide-react'

export default function Navbar() {
    return (
        <div className='w-full border-b p-3 border-b-primary font-sans fixed top-0 z-20 left-0 bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-6xl'>
                <h1 className='text-md text-gray-900 font-semibold'>Newtion</h1>
                <div className='flex gap-x-2 items-center'>
                    <a href="#" className='px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-sm'>Sobre</a>
                    <a href="#" className='px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-sm'>Features</a>
                    <a href="#" className='px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-sm'>Exemplos</a>
                    <a href="https://github.com/leonardonasc/newtion-planner" className='px-4 py-1.5 text-sm font-semibold bg-blue-950 hover:bg-zinc-900 text-white rounded-md flex items-center gap-1'>
                        <GitFork size={16} /> Github
                    </a>
                </div>
            </div>
        </div>
    )
}
