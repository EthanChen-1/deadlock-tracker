import React from "react";

export default function loading() {
  const arr = new Array(21).fill(<div></div>, 0, 21);
  return (
    <div className="grid grid-cols-12 grid-rows-24 p-2 gap-2 h-screen">
      {arr.map((thing, index) => {
        return (
          <div
            key={index}
            className={
              "relative bg-zinc-100 col-span-6  2xl:col-span-4 row-span-1 2xl:row-span-2 flex flex-col justify-center items-left pl-4 hover:shadow-gray-700 hover:shadow-inner transition-colors animate-pulse h-36"
            }
          >
            <div className="w-48 h-8 bg-slate-200 mb-2 rounded-md"></div>
            <div className="w-80 h-5 bg-slate-200 rounded-md"></div>
            <div
              className={
                "absolute right-2 bottom-2 h-24 w-20 bg-slate-200 rounded-md"
              }
            ></div>
          </div>
        );
      })}
    </div>
  );
}
