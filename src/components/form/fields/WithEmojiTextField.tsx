/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { TextFieldProps } from "@mui/material";
import TextField, { CustomTextFieldProps } from "./TextField";

const classes = {
  rootWithEmoji: {
    "& .MuiInputAdornment-root .MuiInputBase-root": {
      height: 50,
      "& fieldset": {
        border: "none"
      }
    },
    "& .MuiInputAdornment-root .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none !important"
      }
    }
  }
};

type Props = {
  iconName?: string;
} & TextFieldProps &
  CustomTextFieldProps;

const WithEmojiTextField = ({
  iconName = "icon",
  ...mainInputProps
}: Props) => {
  return (
    <TextField
      {...mainInputProps}
      css={classes.rootWithEmoji}
      left={<TextField name={iconName} />}
    />
  );
};

export default WithEmojiTextField;
