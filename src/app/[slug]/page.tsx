"use client";
import { useEffect, useState, useTransition } from "react";
import Chart from "react-google-charts";
import Loading from "../loading";
import ErrorComponent from "../error";
import navLinks from "@/utils/nav_links";
import RealTimeData from "./component/realTimeData";
import { useParams } from "next/navigation";

type Error =
  | undefined
  | {
      status?: number;
      message?: string;
    };

function StockData() {
  const params = useParams();
  // page slug
  const { slug } = params;
  // chart data state
  const [chartData, setChartData] = useState<(string | Date | number)[][]>([]);

  const label = navLinks.find((i) => i[1] == slug);
  const [isloading, setIsloading] = useState(true);
  const [err, setErr]: [err: Error, setErr: Function] = useState<Error>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/stock-collection?stock=${slug}`);
      if (!res.ok) {
        setErr({
          status: res.status,
          message: res.statusText,
        });
        setIsloading(false);
      }
      const stocksData = await res.json();

      const data: (string | Date | number)[][] = [["Time", "$ Price"]];
      for (let i = 0; i < stocksData?.t?.length; i++) {
        data.push([new Date(stocksData.t[i] * 1000), stocksData.c[i]]);
      }
      setChartData(data);
      setIsloading(false);
      if (data.length == 1) {
        setErr({
          status: 500,
          message: "Data Not Avaliable",
        });
      }
    };
    getData();
  }, []);

  if (isloading) {
    return <Loading />;
  }
  if (err) {
    return (
      <ErrorComponent
        customError={{ status: err?.status, message: err?.message }}
      />
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {chartData.length > 1 && (
        <>
          <RealTimeData recent={chartData[chartData.length - 1][1]} />
          <Chart
            width={"95%"}
            height={"400px"}
            chartType="LineChart"
            className="rounded-md"
            data={chartData}
            options={{
              title: `${label?.[0]}`,
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "$ Price",
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default StockData;
