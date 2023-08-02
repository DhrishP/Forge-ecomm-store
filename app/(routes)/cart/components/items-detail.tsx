"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Currency from "@/lib/currencyconv"
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const ItemDetail = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('cancel')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return ( 
    <div
      className="mt-16 text-accent-focus rounded-lg bg-base-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-accent">
        Order Details
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-base-100 pt-4">
          <div className="text-base font-medium text-accent">Order total</div>
         <Currency value={totalPrice} />
        </div>
      </div>
      <button onClick={onCheckout} disabled={items.length === 0} className="btn w-full btn-primary mt-6">
        Checkout
      </button>
    </div>
  );
}
 
export default ItemDetail;