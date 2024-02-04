'use client'
import '../globals.css'
import '../satoshi.css'
import { useState, useEffect } from 'react'
import Loader from '@/components/common/Loader'

import Sidebar from '@/components/ui/dashboard/Sidebar'
import Header from '@/components/ui/dashboard/Header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <html lang='en'>
            <body suppressHydrationWarning={true} id='dashboardBody'>
                <div className='dark:bg-boxdark-2 dark:text-bodydark'>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className='flex h-screen overflow-hidden'>
                            <Sidebar
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
                                <Header
                                    sidebarOpen={sidebarOpen}
                                    setSidebarOpen={setSidebarOpen}
                                />
                                <main>
                                    <div className='p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10'>
                                        {children}
                                    </div>
                                </main>
                            </div>
                        </div>
                    )}
                </div>
            </body>
        </html>
    )
}
