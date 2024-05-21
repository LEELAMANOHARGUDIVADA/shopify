"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Men', href: '/Men'},
    {name: 'Women', href: '/Women'},
    {name: 'Kids', href: '/Kids'},
]

const Navbar = () => {
    const pathname = usePathname();

    const {handleCartClick} = useShoppingCart();

  return (
    <header className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <Link href={`/`}>
                <h1 className="text-xl md:text-3xl font-bold text-primary">Shopify</h1>
            </Link>

            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {navLinks.map((link,index) => (
                    <ul key={index}>
                        {pathname === link.href ? (
                            <Link href={link.href}>
                                <li className="text-primary font-semibold text-sm">{link.name}</li>
                            </Link>
                        ) : (
                            <Link href={link.href}>
                                <li className="text-gray-600 font-semibold transition duration-100 text-sm hover:text-primary">{link.name}</li>
                            </Link>
                        )}

                    </ul>
                ))}
            </nav>

            <div className="flex divide-x">
                <Button onClick={() => handleCartClick()} variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-24 rounded-none border-none">
                    <ShoppingBag size={20} />
                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Navbar