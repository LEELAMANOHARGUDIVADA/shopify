"use client"

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name: String;
    description: String;
    currency: string;
    image: any;
    price: number;
    price_id: string;
}

export default function AddToCart({ name, description, currency, image, price, price_id }) {
    const {addItem, handleCartClick} = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
  return (
    <Button onClick={() => {addItem(product), handleCartClick()}}>
      Add to Cart
    </Button>
  )
}