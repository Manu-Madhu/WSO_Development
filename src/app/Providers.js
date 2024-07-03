'use client';

import LoaderData from '@/components/Common/Loader';
import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

export const AuthProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
}

export const AdminProvider = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    console.log(session)

    useEffect(() => {
        if (status === 'loading') return;
        if (session?.user?.userInfo?.role !== 'admin' || session === null) {
            return router.push('/'); // Redirect to home page if not admin
        }
    }, [session, status, router])

    // Or render a loading spinner
    if (status === 'loading' || !session || session?.user?.userInfo?.role !== 'admin') {
        return <><LoaderData /></>;
    }

    return <>{children}</>
}