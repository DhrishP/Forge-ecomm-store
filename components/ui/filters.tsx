"use client";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

type FiltersProps = {
  data: (Color | Size)[];
  searchKey: string;
  name: string;
};

const Filters = ({ data, searchKey, name }: FiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const HandleClick = (id: string,event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    const ParseUrl = qs.parse(searchParams.toString());

    const query = {
      ...ParseUrl,
      [searchKey]: id, //[] is used make the value to a string and id is passed as a argumentz
    };
    if (ParseUrl[searchKey] === id) {
      query[searchKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true }
    );
    // Manually update the URL without a full page reload

  // Trigger the route change using Next.js router
  router.push(url,{scroll:false});
    
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-neutral-focus">Filters</h2>
        <h3 className="text-accent-focus ">{name}</h3>
        <div className="grid md:grid-cols-2 grid-cols-4 ">
          {data.map((filter) => (
            <button
              key={filter.id}
              
              onClick={(e) => {
                HandleClick(filter.id,e);
              }}
              className={cn(
                "btn btn-sm rounded-sm mr-4 mb-2",
                searchParams.get(searchKey) === filter.id
                  ? "bg-neutral-focus text-base-100 hover:bg-base-100 hover:text-neutral-focus"
                  : "btn-outline"
              )}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
