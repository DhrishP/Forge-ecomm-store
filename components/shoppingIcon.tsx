"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


const ShoppingIcon = () => {
  const [IsMounted, setIsMounted] = useState(false);
  const cartItems = useCart((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) {
    return null;
  }
  return (
    <Link
      href="/cart"
      className="btn btn-sqaure flex  hover:btn-accent btn-neutral  "
    >
      <ShoppingBag className="h-5 w-5" />
      <div className="text-sm">{cartItems.length}</div>
    </Link>
  );
};

export default ShoppingIcon;
