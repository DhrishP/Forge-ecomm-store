"use client";

import { useState } from "react";
import { Plus, X, XIcon } from "lucide-react";
import { Dialog } from "@headlessui/react";

import Filters from "@/components/ui/filters";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <button onClick={onOpen} className="btn my-10 rounded-xl flex items-center gap-x-2 btn-neutral lg:hidden">
        Filters
        <Plus size={20} />
      </button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <button onClick={onClose} className="flex items-center justify-end px-4 ">
              <XIcon className="h-4 w-5" />
            </button>

            <div className="p-4">
              <Filters searchKey="sizesId" name="Sizes" data={sizes} />
              <Filters searchKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
