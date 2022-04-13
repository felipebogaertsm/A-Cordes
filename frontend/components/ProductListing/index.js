// -*- coding: utf-8 -*-
// Licensed as the GNU General Public License as published by the Free Software
// Foundation, version 3.
// Author: Felipe Bogaerts de Mattos
// Contact me at felipe.bogaerts@engenharia.ufjf.br

import { useRouter } from "next/router"

// Components:
import { Button, ListItem } from "../"

export default function ProductListing({ items, removeHandler, ...props }) {
    const router = useRouter()

    return (
        <div className="flex flex-col space-y-4">
            {items.map((item, index) => (
                <ListItem key={index} number={index + 1}>
                    <div className="flex md:flex-row flex-col space-x-4">
                        <img
                            className="
                                aspect-[4/3] object-cover md:h-12 md:w-min
                                rounded-xl shadow-xl my-auto cursor-pointer
                            "
                            src={item.product.image}
                            onClick={(e) =>
                                router.push(`/products/${item.product._id}`)
                            }
                        ></img>
                        <div className="my-auto">
                            <h5 className="my-auto">{item.product.name}</h5>
                            <p className="my-auto text-sm">
                                Quantity: <strong>{item.quantity}</strong>
                            </p>
                        </div>
                        <div className="grow"></div>
                        <div className="my-auto">
                            <h6 className="my-auto">
                                ${" "}
                                <span className="text-3xl">
                                    {item.product.price}
                                </span>
                            </h6>
                        </div>
                        {removeHandler && (
                            <div className="my-auto text-sm">
                                <Button
                                    onClick={(e) => removeHandler(e, item._id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        )}
                    </div>
                </ListItem>
            ))}
        </div>
    )
}
