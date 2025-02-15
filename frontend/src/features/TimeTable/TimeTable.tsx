"use client";
import TimeTableLiteral from "@/components/TimeTable/TimeTable";
import appBarContext from "@/features/AppBar/appBarContext";
import React, { useContext, useEffect, useState } from "react";
import { lecture } from "../../util/timeTable";
import Period from "./component/Period";
import TimeTableContainer from "./component/TimeTableContainer";
import TimeTableDayItem from "./component/TimeTableDayItem";
import Filter from "./Filter";

export default function TimeTable({
  timeTable,
}: {
  timeTable: lecture[];
}): JSX.Element {
  const [filteredTimeTable, setFilteredTimeTable] =
    useState<lecture[]>(timeTable);
  const setAppBar = useContext(appBarContext);
  useEffect(() => {
    setAppBar(
      <Filter lectures={timeTable} applyFilter={setFilteredTimeTable} />
    );
  }, []);
  return (
    <TimeTableLiteral
      data={filteredTimeTable}
      xArray={["月", "火", "水", "木", "金", "土", "日"]}
      yArray={[1, 2, 3, 4, 5, 6, 7, 8]}
      xKey="dateTime.date"
      yKey="dateTime.period"
      className="timeTable"
      RenderCell={Period}
      RenderColumn={TimeTableDayItem}
      TimeTableContainer={TimeTableContainer}
    />
  );
}
