"use client";

import RealTimeData, {
  RealTimeDataLoader,
  RealTimeDataType,
} from "./RealTimeData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const GetRealTimeData = ({
  recent,
  slug,
}: {
  recent?: any;
  slug: string | string[];
}) => {
  const [data, setData] = useState<RealTimeDataType>();
  const [isLoading, setLoading] = useState(true);
  const params = useParams();

  const getLatestData = async () => {
    const res = await fetch(`/api/stock-data?stock=${slug}`);
    if (!res.ok) {
      setLoading(false);
      return;
    }
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    // running on load
    getLatestData();
  }, []);

  useEffect(() => {
    // running on every minute
    const interval = setInterval(getLatestData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <RealTimeDataLoader />;
  }

  return (
    <>
      <div className="flex gap-3 font-medium text-xl text-green-700">
        <span className="text-green-500"> $ {data?.c || recent}</span>
      </div>

      {data && <RealTimeData data={data} />}
    </>
  );
};

export default GetRealTimeData;
