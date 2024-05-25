import Link from "next/link";
import React from 'react'

const Navbar = () => {
    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];
  return (
    <nav className="my-16 animate-fade-in">
    <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className="text-lg duration-500 text-zinc-300 hover:text-zinc-300"
            >
                {item.name}
            </Link>
        ))}

    </ul>
</nav>

  )
}

export default Navbar