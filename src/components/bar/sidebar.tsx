'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { Logout } from '../logout';
import { ArrowLeft, ArrowUp, Menu, MenuIcon, Settings, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { LayoutDashboard, Folder } from 'lucide-react';
import { Separator } from '../ui/separator';
import { authClient } from '@/lib/auth-client';

export default function Sidebar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    const isDesktop = !isMobile;
    const [session, setSession] = useState<any>(null);

    const navItemsPrimary = [
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            label: 'Projects',
            href: '/projects',
            icon: Folder,
        },
    ];

    const navItemsSecondary = [
        {
            label: 'Settings',
            href: '/settings',
            icon: Settings,
        },
    ];

    useEffect(() => {
        const fetchSession = async () => {
            const res = await authClient.getSession();
            if (res.error) {
                console.error('Failed to fetch session:', res.error);
                return;
            }
            setSession(res.data);
        };
        fetchSession();
    }, []);


    return (
        <></>
    )
}