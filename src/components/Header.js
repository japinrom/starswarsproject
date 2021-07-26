import React from 'react'
import { Link } from 'wouter'

export default function Header() {
    return (
        <div className="header">
            <Link href='/'><p className="logo">Stars Wars</p></Link>
        </div> 
    )
}
