"use client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { lectureArray2Filter } from "../utils/lectureArray2Filter";
import { lectureWithApplicantsAmount } from "@/types/lecture";
import { filters } from "../types/filter";

const keyLabelDict = {
  title: "講義名",
  category: "科目区分",
  teacher: "先生",
  targetStudent: "対象学生",
};

export default function DrawerContent({
  lectures,
  applyFilter,
}: {
  lectures: lectureWithApplicantsAmount[];
  applyFilter: React.Dispatch<
    React.SetStateAction<lectureWithApplicantsAmount[]>
  >;
}): React.ReactNode {
  const filterTarget = lectureArray2Filter(lectures);
  const [filter, setFilters] = React.useState<filters>([]);

  React.useEffect(() => {
    if (filter.length === 0) {
      applyFilter(lectures);
    } else {
      applyFilter(
        lectures.filter((lec) => filter.some((f) => lec[f.key] === f.value))
      );
    }
  }, [filter, lectures, applyFilter]);

  return (
    <Autocomplete
      value={filter}
      onChange={(event, newValue) => {
        setFilters(newValue);
      }}
      multiple
      options={filterTarget}
      groupBy={(option) =>
        keyLabelDict[option.key as keyof typeof keyLabelDict]
      }
      getOptionLabel={(option) => option.value}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="フィルター"
          placeholder="フィルター"
          variant="outlined"
        />
      )}
    />
  );
}
