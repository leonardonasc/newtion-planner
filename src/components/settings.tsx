import React from 'react'
import { Button } from './ui/button'
import { Settings } from 'lucide-react'

interface SettingsButtonProps {
    // You can add props here if needed
    isMenuOpen?: boolean;
}

export default function SettingsButton({ isMenuOpen }: SettingsButtonProps) {
    return (
        <Button variant="outline" className={`flex items-center  w-full ${isMenuOpen ? 'justify-start' : 'w-full'}`}>
              <p className={isMenuOpen ? '' : 'hidden'}>Settings</p>
            <Settings className="size-4" />
        </Button>
    )
}
