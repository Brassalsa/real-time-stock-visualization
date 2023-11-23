/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import RealTimeData from "./RealTimeData";
import React from "react";

test("Get Real Time Data", () => {
  const data = {
    o: 100,
    h: 200,
    l: 300,
    c: 400,
    d: 50,
    dp: 60,
  };
  const { getByTestId } = render(<RealTimeData data={data} />);
  expect(getByTestId("real-time-data-comp")).not.toBe(null);
});
