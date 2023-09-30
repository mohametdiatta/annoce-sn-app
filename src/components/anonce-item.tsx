/* eslint-disable @next/next/no-img-element */
"use client";

import { MapPinIcon } from "lucide-react";

function AnnonceItem() {
  return (
    <div className=" w-[300px] rounded-lg bg-white p-3 flex items-center flex-col h-[230px]">
      <div className="w-full h-[110px] rounded-lg">
        <img
          src={
            "https://images.unsplash.com/photo-1695754190419-bedddd21ccb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
          alt=""
          className="rounded-sm h-full w-full"
        />
      </div>
      <p className="flex flex-col w-full items-start font-semibold text-base mt-1">
        100 0000 CFA
      </p>
      <div className="flex flex-col w-full items-start text-xs font-medium">
        <span>
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur....
        </span>
        <div className=" flex self-end">
          <MapPinIcon size={15} /> Dakar,Senegal
        </div>
      </div>
    </div>
  );
}

export default AnnonceItem;
