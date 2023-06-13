/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import {
  TextFieldProps,
  FormHelperText,
  Stack,
  TextField
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const classes = {
  root: (theme: Theme) => ({
    border: `1px solid ${theme.palette.grey[300]}`,
    "& label.Mui-focused": {
      fontWeight: 400,
      color: theme.palette.grey[800]
    },
    "& .MuiInputBase-root": {
      padding: 10,
      border: `1px solid transparent`,
      "& fieldset, &.Mui-focused fieldset,  .MuiInputBase-input": {
        border: "none"
      },
      "& .MuiInputBase-input": {
        padding: 0,
        "&::placeholder": {
          color: theme.palette.grey[300],
          fontSize: 14,
          opacity: 1
        }
      }
    }
  })
};

export type Props = {
  name: string;
  fullWidth?: boolean;
  errorMessage?: string;
  className?: string;
} & TextFieldProps;

const TextareaField = ({
  name,
  fullWidth = true,
  errorMessage,
  className,
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
          <TextField
            {...field}
            {...inputProps}
            error={!!errors[name] || !!errorMessage}
            multiline
            rows={4}
            css={classes.root}
            className={className}
            InputProps={{
              disableUnderline: true
            }}
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

export default TextareaField;
