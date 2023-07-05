/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";

import * as React from "react";
import MUISlider from "@mui/material/Slider";

type IRootClass = {
  height?: number;
  thumbSize?: number;
  withLabel?: boolean;
};
const classes = {
  root: ({ height = 8, thumbSize = 24, withLabel = false }: IRootClass) => (
    theme: Theme
  ) => {
    const values: Record<string, any> = {
      color: theme.palette.info.main,
      height,
      "& .MuiSlider-track": {
        border: "none"
      },
      "& .MuiSlider-thumb": {
        height: thumbSize,
        width: thumbSize,
        backgroundColor: "#fff",
        backgroundImage: `url("/icons/cloud.svg")`,
        backgroundPosition: "50% 30%",
        backgroundRepeat: "no-repeat",
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

const Slider = () => {
  return (
    <MUISlider
      valueLabelDisplay="auto"
      aria-label="pretto slider"
      defaultValue={20}
      css={classes.root({})}
    />
  );
};

export default Slider;
