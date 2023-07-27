"use client";
import NextImage from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";

type Galleryprops = {
  Images: Image[] | undefined;
};

export default function Gallery({ Images = [] }: Galleryprops) {
  return (
    <div className=" p-2  ">
      <Tab.Group>
        <Tab.Panels>
          {Images.map((image) => (
            <Tab.Panel key={image.url}>
              <div className="card aspect-square sm:w-1/2  md:w-[60%] h-1/2 overflow-hidden   ">
                <figure>
                  <NextImage
                    className="object-cover aspect-square  object-center "
                    fill
                    src={image.url}
                    alt="Image"
                  />
                </figure>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {Images.map((image) => (
            <GalleryTab key={image.id} Image={image} />
          ))}
        </Tab.List>
      </div>
      </Tab.Group>
    </div>
  );
}
