/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Stack, Button, SxProps, Theme, Alert } from "@mui/material";
import { FormEvent, ReactNode } from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  onSubmit?: (() => void) | ((event: FormEvent<HTMLFormElement>) => void);
  form?: any;
  loading?: boolean;
  children?: ReactNode;
  primaryButtonText?: string;
  error?: string;
  buttonSx?: SxProps<Theme>;
};

const Form = ({
  onSubmit,
  form,
  error,
  children,
  primaryButtonText,
  loading,
  buttonSx
}: Props) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="stretchSelf">
        {error && (
          <Alert severity="error" sx={{ mb: 1.5 }}>
            {error}
          </Alert>
        )}
        <Stack spacing={3} justifyContent="center">
          {children}
          <Button
            type="submit"
            variant="contained"
            className="endSelf"
            sx={buttonSx}
          >
            {loading ? "..." : primaryButtonText}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default Form;
