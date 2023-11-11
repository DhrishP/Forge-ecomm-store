"use client";
import ItemsDetail from "@/app/(routes)/cart/components/items-detail";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import ItemsList from "./components/items-list";

const Cart = () => {
  const [IsMounted, setIsMounted] = useState<Boolean>(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) return null;

  return (
    <div className="h-full w-full bg-base-100">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-accent-focus">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <ItemsList key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <ItemsDetail />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
