import React from "react";

export default function SoulScaling() {
  const soulBreakPoints = [
    "0",
    "400",
    "800",
    "1.2K",
    "1.5K",
    "2.2K",
    "3K",
    "3.5K",
    "4.5K",
    "5.2K",
    "6K",
    "7.5K",
    "8K",
    "9K",
    "9.7K",
    "10.5K",
    "12K",
    "13K",
    "14K",
    "15K",
    "16K",
    "18K",
    "20K",
    "22K",
    "24K",
    "27K",
    "30K",
    "33K",
    "36K",
    "39K",
    "42K",
    "45K",
    "48K",
  ];
  const unlockAUPI = [
    "AU",
    "AU",
    "",
    "PI",
    "AU",
    "PI",
    "AU",
    "",
    "PI",
    "",
    "PI",
    "PI",
    "",
    "PI",
    "",
    "PI",
    "PI",
    "PI",
    "PI",
    "PI",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const unlockAP = [
    "",
    "AP",
    "AP",
    "",
    "",
    "AP",
    "",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "",
    "AP",
    "",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
    "AP",
  ];
  return (
    <div className="grid grid-cols-3 row-span-3 4 h-full w-full">
      <div className="bg-zinc-200  grid grid-cols-1 grid-rows-33 text-center">
        {unlockAUPI.reverse().map((aupi, index) => (
          <div className="h-3" key={index}>
            {aupi}
          </div>
        ))}
      </div>
      <div className="bg-zinc-400 grid grid-cols-1 grid-rows-33 text-center">
        {soulBreakPoints.reverse().map((breakPoint) => {
          return (
            <div className="h-3" key={breakPoint}>
              {breakPoint}
            </div>
          );
        })}
      </div>
      <div className="bg-zinc-200 grid grid-cols-1 grid-rows-33 text-center">
        {unlockAP.reverse().map((ap, index) => (
          <div className="h-3" key={index}>
            {ap}
          </div>
        ))}
      </div>
    </div>
  );
}
