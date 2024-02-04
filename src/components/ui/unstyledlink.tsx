import React from 'react'
import { UnstyledLink } from '../links/UnstyledLink'
import type { LinkProps } from 'next/link'

type ButtonProps = {
    href: string
    title: string
    className?: string
} & LinkProps

const Button = ({ href, title, className, ...props }: ButtonProps) => {
    return (
        <UnstyledLink className={`${className}`} {...props} href={href}>
            {title}
        </UnstyledLink>
    )
}

export default Button
