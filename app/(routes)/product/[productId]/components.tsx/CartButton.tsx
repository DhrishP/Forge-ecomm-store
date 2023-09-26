"use client"
import useCart from '@/hooks/use-cart'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

type CartButtonProps ={
    product:Products
}

const CartButton = ({
    product
}:CartButtonProps) => {
    const cart = useCart()
    const HandleAdd = () =>{
        cart.addItem(product)
    }
  return (
    <button onClick={HandleAdd} className="btn-neutral rounded-full hover:btn-accent py-2  btn btn-sm   mt-4">
    Add to cart
    <ShoppingCart className="h-4 w-4" />
  </button>
  )
}

export default CartButton