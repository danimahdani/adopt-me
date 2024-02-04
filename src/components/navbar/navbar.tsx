import React from 'react'
import Image from 'next/image'
import NavbarMobile from './navbarmobile'
import SignIn from '../common/Button/SignIn'

const Navbar = () => {
    return (
        <div className='py-5 flex justify-between w-full items-center'>
            <div className='relative w-36 h-10 '>
                <Image src='/adopt-me.png' alt='Adopt Me' fill />
            </div>

            <ul className='hidden lg:flex gap-x-14'>
                <li>Home</li>
                <li>Adoption</li>
                <li>Shop</li>
                <li>FAQ</li>
            </ul>
            <ul className='hidden lg:flex gap-x-10'>
                <li>
                    <SignIn />
                </li>
                <li>
                    <button className=''>Sign Up</button>
                </li>
            </ul>
            <div className='lg:hidden'>
                <NavbarMobile />
            </div>
        </div>
    )
}

export default Navbar
