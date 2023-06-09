/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  Theme,
  Typography
} from "@mui/material";
import { ReactNode, forwardRef } from "react";

const classes = {
  rootWithIcons: (theme: Theme) => ({
    "& .MuiInputBase-root": {
      padding: 0
    },
    "& .MuiInputAdornment-root": {
      padding: "16.5px 0",
      width: 65,
      height: "100%",
      display: "flex",
      justifyItems: "center",
      alignItems: "center"
    },
    "& .MuiInputAdornment-positionEnd": {
      borderLeft: "1px solid " + theme.palette.grey[800],
      borderTopRightRadius: theme.shape.borderRadius + "px",
      borderBottomRightRadius: theme.shape.borderRadius + "px"
    },
    "& .MuiInputAdornment-positionStart": {
      borderRight: "1px solid " + theme.palette.grey[800],
      borderTopLeftRadius: theme.shape.borderRadius + "px",
      borderBottomLeftRadius: theme.shape.borderRadius + "px"
    },

    "& .MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-input": {
        color: "#fff",
        "&::placeholder": {
          color: theme.palette.grey[300],
          opacity: 1,
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1
        }
      },
      "&:hover fieldset": {
        border: "none"
      },
      "&.Mui-focused fieldset": {
        border: "none"
      }
    }
  }),
  root: (theme: Theme) => ({
    "& .MuiInputBase-root": {
      padding: 0
    },
    "& .MuiInputAdornment-root": {
      padding: "14px 0",
      borderTopLeftRadius: theme.shape.borderRadius + "px",
      borderBottomLeftRadius: theme.shape.borderRadius + "px",
      width: 65,
      height: "100%",
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
      borderRight: "1px solid " + theme.palette.grey[800]
    }
  }),
  leftText: (theme: Theme) => ({
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 14,
    color: theme.palette.grey[800]
  })
};

type Props = {
  left?: ReactNode | string;
  right?: ReactNode;
  rightClassName?: string;
  leftClassName?: string;
} & TextFieldProps;

/**
 * should use `forwardRef` if using an refactored component with emotion
 * issue: https://stackoverflow.com/questions/66312566/how-to-type-forwardref-in-separate-select-component
 */
const TextFieldInput = forwardRef<HTMLDivElement, Props>(
  ({ left, right, rightClassName, leftClassName, ...otherProps }, ref) => {
    return (
      <TextField
        ref={ref}
        {...otherProps}
        css={left || right ? classes.rootWithIcons : classes.root}
        InputProps={{
          ...otherProps.InputProps,
          startAdornment: left ? (
            <InputAdornment position="start" className={leftClassName}>
              <div className="flex1 flexCenter">
                {typeof left === "string" ? (
                  <Typography css={classes.leftText}>{left}</Typography>
                ) : (
                  left
                )}
              </div>
            </InputAdornment>
          ) : null,
          endAdornment: right ? (
            <InputAdornment position="end" className={rightClassName}>
              <div className="flex1 flexCenter">{right}</div>
            </InputAdornment>
          ) : null
        }}
      />
    );
  }
);

export default TextFieldInput;
