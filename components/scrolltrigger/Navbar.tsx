import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const NavLinks = [
        { 'name': 'Home', 'link': '#top' },
        { 'name': 'About', 'link': '#about' },
        { 'name': 'Projects', 'link': '#projects' },
        { 'name': 'Contact', 'link': '#contact' },
    ];
  return (
    <nav className="w-screen flex justify-evenly p-2 bg-zinc-400">
            {NavLinks.map(navlink => { return <Link key={navlink.name} href={navlink.link}>{navlink.name}</Link> })}
        </nav>
  )
}

export default Navbar