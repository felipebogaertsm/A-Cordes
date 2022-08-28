// -*- coding: utf-8 -*-
// Licensed as the GNU General Public License as published by the Free Software
// Foundation, version 3.
// Author: Felipe Bogaerts de Mattos
// Contact me at me@felipebm.com

import { useContext } from "react"

// Components:
import { NavbarItem, NavbarUserDropdown } from ".."

// Contexts:
import { AuthContext } from "../../../contexts/auth"

export default function Navbar() {
    const { user } = useContext(AuthContext)

    return (
        <div className="w-full">
            <div
                className="
                    bg-dark text-light md:py-0 whitespace-nowrap
                    px-2 md:px-4 border-b-2 border-light select-none
                    no-scrollbar w-full
                "
            >
                <div
                    className="
                    flex md:flex-row flex-col h-full py-3
                "
                >
                    <NavbarItem to="/">
                        <div className="flex flex-row justify-end">
                            <h3 className="lowercase textlight font-semibold">
                                à cordes
                            </h3>
                            <p className="pl-3 lowercase mt-auto tracking-wider">
                                fine instruments shop
                            </p>
                        </div>
                    </NavbarItem>

                    <div className="grow"></div>

                    <NavbarItem to="/makers">
                        <div className="flex flex-row space-x-2">
                            <img
                                src="/icons/violin.svg"
                                className="
                                invert h-4 my-auto
                            "
                            ></img>
                            <p className="my-auto">Makers</p>
                        </div>
                    </NavbarItem>

                    {user && user !== {} && (
                        <>
                            <NavbarItem to="/cart">
                                <div className="flex flex-row space-x-2">
                                    <img
                                        src="/icons/cart.svg"
                                        className="
                                            invert h-6 my-auto
                                        "
                                    ></img>
                                    <p className="my-auto">Cart</p>
                                </div>
                            </NavbarItem>

                            <NavbarUserDropdown />
                        </>
                    )}

                    {!user && (
                        <NavbarItem to="/auth/login">
                            <div className="flex flex-row space-x-2">
                                <img
                                    src="/icons/user.svg"
                                    className="
                                        invert opacity-80 h-4 my-auto
                                    "
                                ></img>
                                <p className="my-auto">Login</p>
                            </div>
                        </NavbarItem>
                    )}
                </div>
            </div>
        </div>
    )
}
