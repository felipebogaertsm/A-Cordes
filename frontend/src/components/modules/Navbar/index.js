// -*- coding: utf-8 -*-
// Licensed as the GNU General Public License as published by the Free Software
// Foundation, version 3.
// Author: Felipe Bogaerts de Mattos
// Contact me at me@felipebm.com

import { useContext, useState } from "react"
import Link from "next/link"

// Components:
import { NavbarItem, NavbarUserDropdown } from ".."

// Contexts:
import { AuthContext } from "../../../contexts/auth"
import { ButtonIcon1 } from "../../elements"

// Styles:
import styles from "./Navbar.module.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const { user } = useContext(AuthContext)

    return (
        <div className="w-full">
            <div
                className="
                    bg-dark text-light md:py-0 whitespace-nowrap
                    px-2 md:px-4 select-none no-scrollbar w-full
                "
            >
                <div className="py-4 flex flex-row">
                    <div className="my-auto">
                        <Link href="/">
                            <h3
                                className="
                                    lowercase text-light cursor-pointer w-min 
                                    transition-all duration-200
                                "
                            >
                                à cordes
                            </h3>
                        </Link>
                    </div>

                    <div
                        className={`my-auto ml-auto transition-all duration-200 ease-out lg:hidden invert ${
                            isOpen && "rotate-90"
                        }`}
                    >
                        <ButtonIcon1
                            src="/icons/menu-list.svg"
                            onClick={(e) => setIsOpen(!isOpen)}
                        />
                    </div>

                    <div className="hidden lg:inline mx-auto">
                        <div className="flex md:flex-row flex-col col-span-6 gap-2">
                            <NavbarItem to="/">Home</NavbarItem>
                            <NavbarItem to="/makers">Makers</NavbarItem>
                            <NavbarItem to="/makers">Bows</NavbarItem>
                            <NavbarItem to="/makers">Instruments</NavbarItem>
                            <NavbarItem to="/makers">Accessories</NavbarItem>
                        </div>
                    </div>

                    <div className="hidden lg:inline">
                        <div className="flex md:flex-row flex-col ml-auto gap-2">
                            {user && user !== {} && (
                                <>
                                    <NavbarItem to="/cart">Cart</NavbarItem>
                                    <NavbarUserDropdown />
                                </>
                            )}

                            {!user && (
                                <NavbarItem to="/auth/login">Login</NavbarItem>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className={[
                        styles.dropdownContainer,
                        "lg:hidden bg-zinc-800 w-full",
                    ].join(" ")}
                >
                    <div className="flex flex-col col-span-6 gap-2 text-white p-8">
                        <NavbarItem to="/">Home</NavbarItem>
                        <NavbarItem to="/makers">Makers</NavbarItem>
                        <NavbarItem to="/makers">Bows</NavbarItem>
                        <NavbarItem to="/makers">Instruments</NavbarItem>
                        <NavbarItem to="/makers">Accessories</NavbarItem>
                    </div>
                </div>
            )}
        </div>
    )
}
