'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/navbar';
import VideoWallpaper from '../../../components/videowallpaper';
import ImageWallpaper from '../../../components/wallpaperimg';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div className="relative min-h-screen">
            <ImageWallpaper />
            <main className="relative z-10">
                <Navbar />
                <div>
                    {children}
                </div>
            </main>
        </div>

    );
}