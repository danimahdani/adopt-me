'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
    return (
        <button className='' onClick={() => signIn()}>
            Sign In
        </button>
    )
}

export default LoginButton
