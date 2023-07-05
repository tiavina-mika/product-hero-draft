/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Slider from "../inputs/Slider";
import { getSliderColorByPercent } from "../../../utils/app.utils";

import { useState } from "react";
import { useTheme } from "@mui/material";

/**
 * just simulate the field
 * use formik controlled field instead
 */
const DriverSliderField = () => {
  const [value, setValue] = useState<number | number[]>(20);
  const theme = useTheme();

  const onChange = (newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <div className="flexColumn stretchSelf flex1">
      <Slider
        thumbIcon="/icons/cloud.svg"
        value={value}
        onChange={onChange}
        withLabel={false}
        color={getSliderColorByPercent(value as number, theme.palette) as any}
      />
    </div>
  );
};

export default DriverSliderField;
