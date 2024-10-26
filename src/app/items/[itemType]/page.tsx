import classNames from "classnames";
import React from "react";
import { GiAmmoBox } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";
import { getItems } from "./items-helper";

export const revalidate = 0;

export default async function ItemsPage({ params }: any) {
  const items = await getItems(params.itemType);
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
          className={classNames("grid grid-cols-11", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} color={"green"} /> 500
          </div>
          {items
            .filter(
              (item: any) => item.price === 500 && item.type === params.itemType
            )
            .map((item: any) => (
              <Item key={item.name} item={item} itemtype={item.type} />
            ))}
        </div>
        <div
          className={classNames("grid grid-cols-11", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} color={"green"} /> 1,250
          </div>
          {items
            .filter(
              (item: any) =>
                item.price >= 1250 &&
                item.price < 3000 &&
                item.type === params.itemType
            )
            .map((item: any) => (
              <Item key={item.name} item={item} itemtype={item.type} />
            ))}
        </div>
        <div
          className={classNames("grid grid-cols-11 overflow-auto", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} color={"green"} /> 3000+
          </div>
          {items
            .filter(
              (item: any) =>
                item.price >= 3000 &&
                item.price < 6200 &&
                item.type === params.itemType
            )
            .map((item: any) => (
              <Item key={item.name} item={item} itemtype={item.type} />
            ))}
        </div>
        <div
          className={classNames("grid grid-cols-11", {
            "odd:bg-[#B28044] even:bg-[#946A36] hover:bg-[#F2A23E]":
              params.itemType === "weapon",
            "odd:bg-[#4D7214] even:bg-[#405F0F]":
              params.itemType === "vitality",
            "odd:bg-[#372248] even:bg-[#2D1B3C]": params.itemType === "spirit",
          })}
        >
          <div className="flex text-xl gap-2 justify-center items-center rotate-[270deg]">
            <MdCurrencyExchange size={30} color={"green"} /> 6200+
          </div>
          {items
            .filter(
              (item: any) => item.price >= 6200 && item.type === params.itemType
            )
            .map((item: any) => (
              <Item key={item.name} item={item} itemtype={item.type} />
            ))}
        </div>
      </div>
    </div>
  );
}

function Item({ item, itemtype }: any) {
  return (
    <div className="p-10">
      <div className="shadow-[12px_12px_0px_3px_rgba(0,0,0,0.3)] h-full rounded">
        <div
          className={classNames(
            "flex items-center justify-center rounded-t-md h-1/2 ",
            {
              "bg-[#D08D3E]": itemtype === "weapon",
              "bg-[#74B01C]": itemtype === "vitality",
              "bg-[#DE9CFF]": itemtype === "spirit",
            }
          )}
        >
          <GiAmmoBox size={45} />
        </div>
        <div className="flex items-center rounded-b-md bg-[#F0E1CB] h-1/2 justify-center text-center font-bold">
          {item.name}
        </div>
      </div>
    </div>
  );
}
