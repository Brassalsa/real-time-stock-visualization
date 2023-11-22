import React from "react";

export type RealTimeDataType = {
  o: number;
  h: number;
  l: number;
  c: number;
  d: number;
  dp: number;
};

function RealTimeData({ data }: { data: RealTimeDataType }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between mb-5 px-4">
        <h2 className="text-xl font-semibold w-full text-center">
          Stock Information
        </h2>
        <p>
          <span>Open:</span> $ {data.o}
        </p>
        <p>
          <span>High:</span>$ {data.h}
        </p>
        <p>
          <span>Low:</span>$ {data.l}
        </p>
        <p>
          <span>Close:</span>$ {data.c}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-between px-4 mb-4">
        <h2 className="text-xl font-semibold w-full text-center">
          Dividend Information
        </h2>
        <p className={data.d < 0 ? "text-red-500" : "text-green-500"}>
          <span>Dividend Amount:</span> {data.d}
        </p>
        <p className={data.dp < 0 ? "text-red-500" : "text-green-500"}>
          <span>Dividend Percentage:</span> {data.dp}
        </p>
      </div>
    </>
  );
}

export default RealTimeData;

export function RealTimeDataLoader() {
  return (
    <div className="animate-pulse w-3/4 mx-auto">
      <div className="h-4 bg-gray-500 rounded w-20 mx-auto mb-2"></div>
      <div className="space-y-2 flex flex-col justify-between">
        <div className="h-4 w-28 bg-gray-500 rounded mx-auto"></div>
        <div className="h-4 bg-gray-500 rounded w-5/6 mx-auto"></div>
        <div className="h-4 w-28 bg-gray-500 rounded mx-auto"></div>
        <div className="h-4 bg-gray-500 rounded w-5/6 mx-auto"></div>
      </div>
    </div>
  );
}
