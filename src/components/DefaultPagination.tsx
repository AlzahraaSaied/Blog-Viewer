"use client";


import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function DefaultPagination() {
  const [active, setActive] = useState<number>(1);

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center justify-between gap-1 container mx-auto">
      <button
        onClick={prev}
        disabled={active === 1}
        className="inline-flex font-semibold items-center justify-center align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent text-black hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none"
      >
        <ArrowLeftIcon strokeWidth={1.5} className="mr-1.5 h-4 w-4" />
        Previous
      </button>
  
      <div>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md
              ${
                active === page
                  ? "shadow-sm hover:shadow-md bg-gray-200 border-gray-200 text-black hover:bg-gray-300 hover:border-gray-300"
                  : "bg-transparent border-transparent text-black hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>
  
      <button
        onClick={next}
        disabled={active === 5}
        className="inline-flex font-semibold items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-black hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none"
      >
        Next
        <ArrowRightIcon strokeWidth={1.5} className="ml-1.5 h-4 w-4" />
      </button>
    </div>
  );
  
}
