import Link from 'next/link'
import React from 'react'

interface navItem  {
 link: string,
 title: string
}

const routes: navItem[] = [
    { link: '/', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/dashboard', title: 'Dashboard' },
]
const Navbar = () => {
    return (
        <nav className='bg-green-100 h-14'>
            <div className='h-full flex items-center justify-end gap-12'>
                {
                    routes?.map(route =>
                        <Link
                            key={route.link}
                            title={route.title}
                            href={route.link}
                        >
                            {route.title}
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
