"use client";

import UsePreview from "@/hooks/use-preview-modal";
import Modal from "./modal";
import Gallery from "../gallery";
import Currency from "../../lib/currencyconv";

const PreviewModal = () => {
  const previewState = UsePreview();
  const productData = UsePreview((state) => state.data);
  return (
    <Modal onClose={previewState.onClose} open={previewState.Open}>
      <div className="grid text-accent-focus w-full grid-cols-1 items-startgap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4  lg:col-span-6">
          <Gallery Images={productData?.Image} />
        </div>
        <div className="sm:col-span-8 lg:col-span-6">
          <h2 className="font-semibold text-2xl  ">{productData?.name}</h2>
          <h3 className=" text-lg  ">
            <Currency value={productData?.price} />
          </h3>
          <hr className="my-2" />
          <div className="flex items-center gap-x-4">
            <h3>Size:</h3>
            <p className="font-medium">{productData?.size?.name}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <h3>Color:</h3>
            <div
              className="border  rounded-full h-5 w-5"
              style={{ backgroundImage: productData?.color.value }}
            ></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
