import { create } from "zustand";

type UsePreviewProps = {
  Open: boolean;
  data?: Products;
  onOpen: (data: Products) => void;
  onClose: () => void;
};

const UsePreview = create<UsePreviewProps>((set) => ({
  Open: false,
  data: undefined,
  onOpen: (data: Products) => set({ Open: true, data: data }),
  onClose: () => set({ Open: false }),
}));

export default UsePreview