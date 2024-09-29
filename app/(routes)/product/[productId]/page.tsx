import Gallery from "@/components/gallery";
import ProductList from "@/components/ui/product-list";
import Container from "@/components/ui/container";
import Currency from "@/lib/currencyconv";
import getProduct from "@/data-fetchers/get-product";
import getProducts from "@/data-fetchers/get-products";
import React from "react";
import CartButton from "./components.tsx/CartButton";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { ComponentPropsWithoutRef } from 'react';

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
              <CartButton product={product} />

              {/* Description Component */}
              {product.description && (
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-2">Description:</h3>
                  <div className="p-4 border rounded-md bg-gray-50 prose prose-sm max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({
                          node,
                          inline,
                          className,
                          children,
                          ...props
                        }: ComponentPropsWithoutRef<"code"> & {
                          inline?: boolean;
                          node?: any;
                        }) {
                          const match = /language-(\w+)/.exec(className || '');
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={vscDarkPlus as any}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
                        li: ({ node, children, ...props }) => (
                          <li className="my-1" {...props}>
                            <span className="inline-block">{children}</span>
                          </li>
                        ),
                        p: ({ node, ...props }) => <p className="my-4 whitespace-pre-wrap" {...props} />,
                        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-6" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-5" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-lg font-medium my-4" {...props} />,
                        blockquote: ({ node, ...props }) => (
                          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6" {...props} />
                        ),
                      }}
                    >
                      {product.description}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {/* YouTube Video Embed */}
              {product.ytURL && (
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-2">Product Video:</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(product.ytURL)}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
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

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

export default ProductIdPage;