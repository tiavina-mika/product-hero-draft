/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";

import * as React from "react";
import MUISlider, { SliderProps } from "@mui/material/Slider";

type IRootClass = {
  height?: number;
  thumbSize?: number;
  withLabel?: boolean;
  thumbIcon?: string;
  color?: string;
};

const classes = {
  root: ({
    thumbIcon,
    color,
    height = 8,
    thumbSize = 24,
    withLabel = false
  }: IRootClass) => (theme: Theme) => {
    const values: Record<string, any> = {
      color: color || theme.palette.info.main,
      height,
      "& .MuiSlider-track": {
        border: "none"
      },
      "& .MuiSlider-thumb": {
        height: thumbSize,
        width: thumbSize,
        background: thumbIcon
          ? `#fff url("${thumbIcon}") no-repeat 50% 30%`
          : "#fff",
        // backgroundPosition: "50% 30%",
        // backgroundRepeat: "no-repeat",
        border: "1px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
          boxShadow: "inherit"
        },
        "&:before": {
          display: "none"
        }
      },
      "& .MuiSlider-rail": {
        opactity: 1,
        backgroundColor: theme.palette.grey[100]
      }
    };

    if (withLabel) {
      values["& .MuiSlider-valueLabel"] = {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        height: 20,
        backgroundColor: "none",
        color: theme.palette.grey[800],
        fontWeight: 700,
        fontFamily: "Product Sans Bold",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
          transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
        },
        "& > *": {
          transform: "rotate(45deg)"
        }
      };
    } else {
      values["& .MuiSlider-valueLabel"] = {
        display: "none"
      };
    }

    return values;
  }
};

type Props = {
  className?: string;
  color?: string;
  value: number | number[];
  onChange: (value: number | number[]) => void;
} & IRootClass &
  Omit<SliderProps, "onChange">; // use our ownn onChange

const Slider = ({
  className,
  value,
  onChange,
  height,
  withLabel = true,
  thumbSize,
  thumbIcon,
  color,
  ...props
}: Props) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    onChange(newValue);
  };

  return (
    <MUISlider
      {...props}
      className={className}
      valueLabelDisplay="auto"
      aria-label="pretto slider"
      value={value}
      onChange={handleSliderChange}
      css={classes.root({
        thumbSize,
        height,
        withLabel,
        thumbIcon,
        color
      })}
    />
  );
};

export default Slider;
