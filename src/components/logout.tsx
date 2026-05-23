'use client'

import { authClient } from '@/lib/auth-client'
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';

export function Logout() {
    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <Button variant="outline" onClick={handleLogout} className="">
            Logout
            <LogOut className="size-4" />
        </Button>
    );
}

