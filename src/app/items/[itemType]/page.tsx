import classNames from "classnames";
import React from "react";
import { GiAmmoBox } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";

export default function ItemsPage({ params }: any) {
  return (
    <div
      className={classNames("h-[calc(100%-3.5rem)] border-t-[10px]", {
        "border-orange-300": params.itemType === "weapon",
        "border-lime-600": params.itemType === "vitality",
        "border-purple-300": params.itemType === "spirit",
      })}
    >
      <div className="h-full w-full grid grid-cols-1 grid-rows-4">
        <div
          className={classNames("grid grid-cols-10", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl gap-2 justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} /> 500
          </div>
        </div>
        <div
          className={classNames("grid grid-cols-10", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl gap-2 justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} /> 1,250
          </div>
        </div>
        <div
          className={classNames("grid grid-cols-10", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl gap-2 justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} /> 3000+
          </div>
        </div>
        <div
          className={classNames("grid grid-cols-10", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl gap-2 justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} /> 6200+
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ item }: any) {
  <div className="p-10">
    <div className="flex items-center justify-center rounded-t-md bg-[#D08D3E] h-1/2">
      <GiAmmoBox size={45} />
    </div>
    <div className="flex items-center rounded-b-md bg-[#F0E1CB] h-1/2 justify-center text-center font-bold p-6">
      Basic Magazine
    </div>
  </div>;
}
