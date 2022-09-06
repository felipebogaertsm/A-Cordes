// -*- coding: utf-8 -*-
// Licensed as the GNU General Public License as published by the Free Software
// Foundation, version 3.
// Author: Felipe Bogaerts de Mattos
// Contact me at me@felipebm.com

import Link from "next/link"

// Styles:
import styles from "./NavbarItem.module.css"

export default function NavbarItem(props) {
    return (
        <div className="my-auto" {...props}>
            <Link href={props.to}>
                <div
                    className="
                        bg-transparent cursor-pointer uppercase tracking-wider
                        font-light rounded-none hover:rounded-2xl
                        transition-all duration-100 ease-out bg-translate-y-2
                "
                    onClick={props.onClick}
                >
                    <p className={styles.content}>{props.children}</p>
                </div>
            </Link>
        </div>
    )
}
