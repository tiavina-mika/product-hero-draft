/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Slider from "../../components/form/inputs/Slider";

import { useState } from "react";

const MyFocus = () => {
  const [value, setValue] = useState<number | number[]>(20);

  const onChange = (newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <div className="flexColumn stretchSelf flex1">
      <Slider
        thumbIcon="/icons/cloud.svg"
        value={value}
        onChange={onChange}
        withLabel
      />
    </div>
  );
};

export default MyFocus;
