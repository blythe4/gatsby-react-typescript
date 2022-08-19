import React, { ReactNode } from 'react'
import './layout.css'

type ILayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    return <div>{children}</div>
}
