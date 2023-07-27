import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filters from "@/components/ui/filters";
import getCategory from "@/data-fetchers/get-category";
import getColors from "@/data-fetchers/get-colors";
import getProducts from "@/data-fetchers/get-products";
import getSizes from "@/data-fetchers/get-sizes";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
type CategoryMainProps = {
  params: { categoriesId: string };
  searchParams: {
    colorId: string;
    sizesId: string;
  };
};
const CategoryMain = async ({ params, searchParams }: CategoryMainProps) => {
  const products = await getProducts({
    colorId: searchParams.colorId,
    sizesId: searchParams.sizesId,
    CategoriesId: params.categoriesId,
  });
  const sizes:Size[] = await getSizes();
  const colors:Color[] = await getColors();
  const category:Category = await getCategory(params.categoriesId);

  return (
    <div className="bg-base-100 py-10">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 md:px-8">
          <div className="md:grid grid-cols-5 gap-6 ">
            <div>
            <Filters data={sizes} name="Sizes" searchKey="sizesId"/>
            <Filters data={colors} name="Colors" searchKey="colorId"/>
            </div>
            <div className="col-span-4" >
              <ProductList title="Products" items={products}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryMain;
