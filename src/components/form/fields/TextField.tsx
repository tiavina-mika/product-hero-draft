/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import {
  TextField as MUITextField,
  TextFieldProps,
  FormHelperText,
  Stack
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const classes = {
  root: (theme: Theme) => ({
    "& label.Mui-focused": {
      fontWeight: 400,
      color: theme.palette.grey[800]
    },
    "& .MuiInputBase-root": {
      height: 50,
      "& fieldset": {
        border: `1px solid ${theme.palette.grey[800]}`,
        borderRadius: 6,
        transition: "all 0.125s ease 0s"
      },
      "& .MuiInputBase-input": {
        color: theme.palette.grey[800],
        "&::placeholder": {
          color: theme.palette.grey[300],
          fontSize: 14,
          opacity: 1
        }
      },
      "& .MuiInputLabel-shrink": {
        backgroundColor: "red"
      },
      "&.Mui-focused fieldset": {
        border: `1px solid ${theme.palette.grey[800]}`
      }
    }
  })
};

type Props = {
  name: string;
  fullWidth?: boolean;
  errorMessage?: string;
} & TextFieldProps;

const TextField = ({
  name,
  fullWidth = true,
  errorMessage,
  ...inputProps
}: Props) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Stack>
          <MUITextField
            {...field}
            {...inputProps}
            css={classes.root}
            variant="outlined"
            fullWidth={fullWidth}
            error={!!errors[name] || !!errorMessage}
          />
          {errors[name] && (
            <FormHelperText error>
              {(errors as any)[name].message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};

export default TextField;
