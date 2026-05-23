'use client'

import { authClient } from '@/lib/auth-client'
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';

interface LogoutProps {
    // You can add props here if needed
    isMenuOpen?: boolean;
}

export function Logout({ isMenuOpen }: LogoutProps) {
    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <Button variant="outline" className={`flex items-center  w-full ${isMenuOpen ? 'justify-start' : 'w-full'}`} onClick={handleLogout}>
            <p className={isMenuOpen ? '' : 'hidden'}>Logout</p>
            <LogOut className="size-4" />
        </Button>
    );
}

