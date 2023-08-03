import Gallery from "@/components/gallery";
import ProductList from "@/components/ui/product-list";
import Container from "@/components/ui/container";
import Currency from "@/lib/currencyconv";
import getProduct from "@/data-fetchers/get-product";
import getProducts from "@/data-fetchers/get-products";
import { ShoppingCart } from "lucide-react";
import React from "react";
import CartButton from "./components.tsx/CartButton";
export const revalidate = 0;
const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const product: Products = await getProduct(params.productId);
  const relatedItems = await getProducts({
    CategoriesId: product.categories?.id,
  });

  return (
    <>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 ">
          <div className="grid  md:grid-cols-2 lg:items-start px-10 py-5 md:py-8 lg:py-10  ">
            <div className="">
              <Gallery Images={product.Image} />
            </div>
            <div>
              <h2 className="font-semibold text-2xl  ">{product.name}</h2>
              <h3 className=" text-lg  ">
                <Currency value={product.price} />
              </h3>
              <hr className="my-2" />
              <div className="flex items-center gap-x-4">
                <h3>Size:</h3>
                <p className="font-medium">{product?.size?.name}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <h3>Color:</h3>
                <div
                  className="border  rounded-full h-5 w-5"
                  style={{ backgroundImage: product.color.value }}
                ></div>
              </div>
              <CartButton product={product}/>
            </div>
          </div>
          <hr className="my-10" />
          <div className="">
            <ProductList title="Related items" items={relatedItems} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductIdPage;
