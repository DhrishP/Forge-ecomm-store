import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UseCartProps = {
  items: Products[];
  addItem: (data: Products) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

 const useCart = create(
  persist<UseCartProps>(
    (set, get) => ({
      items: [],
      addItem: (item: Products) => {
        const currentitem = get().items;
        if (currentitem.find((i) => i.id === item.id)) {
          toast.error("Item already exists in the cart");
          return null
        }
        set({ items: [...get().items, item] });
        toast.success("Item added to cart");
      },
      removeItem: (itemId: string) => {
        set({
          items: [...get().items.filter((i) => i.id !== itemId)],
        });
        toast.success("Item removed from the cart")
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-items",
      storage: createJSONStorage(()=>localStorage),
    }
  )
);
export default useCart