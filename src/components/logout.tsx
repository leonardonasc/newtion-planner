'use client'

import { authClient } from '@/lib/auth-client'
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface LogoutProps {
    // You can add props here if needed
    isMenuOpen?: boolean;
}

export function Logout({ isMenuOpen }: LogoutProps) {

    const router = useRouter();

    const handleLogout = async () => {
        const res = await authClient.signOut();

        if (res.error) {
            console.error('Logout failed:', res.error);
            return;
        }
        // Optionally, you can redirect the user after logout
        if (res.data) {
            router.push('/sign-in');
            toast.success('Logout successful');
        }
    };

    return (
        <Button variant='ghost' className="border border-gray-300" onClick={handleLogout}>
            <p className={isMenuOpen ? '' : 'hidden'}>Logout</p>
            <LogOut className="size-4" />
        </Button>
    );
}

