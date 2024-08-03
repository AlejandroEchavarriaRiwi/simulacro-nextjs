'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 3000)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="mb-4 text-4xl font-bold">404 - Página no encontrada</h1>
            <p className="mb-4 text-xl">La página que buscas no existe.</p>
            <p className="text-lg">Serás redirigido a la página de inicio en 3 segundos...</p>
        </div>
    )
}