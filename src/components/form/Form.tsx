/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { Stack, Button, SxProps, Theme, Alert } from "@mui/material";
import { FormEvent, ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { FORM_FIELDS_SPACING } from "../../utils/constants";

type Props = {
  onSubmit?: (() => void) | ((event: FormEvent<HTMLFormElement>) => void);
  form?: any;
  loading?: boolean;
  children?: ReactNode;
  primaryButtonText?: string;
  error?: string;
  buttonSx?: SxProps<Theme>;
  withSpacing?: boolean;
  formId?: string;
};

const Form = ({
  formId,
  onSubmit,
  form,
  error,
  children,
  primaryButtonText,
  loading,
  buttonSx,
  withSpacing
}: Props) => {
  const {
    formState: { isDirty }
  } = form;

  return (
    <FormProvider {...form}>
      <form
        id={formId}
        onSubmit={onSubmit}
        className="flexColumn stretchSelf flex1"
      >
        {error && (
          <Alert severity="error" sx={{ mb: 1.5 }}>
            {error}
          </Alert>
        )}
        <div className="flexColumn flex1 stretchSelf spaceBetween">
          <div className="stretchSelf">
            {withSpacing ? (
              <Stack spacing={FORM_FIELDS_SPACING}>{children}</Stack>
            ) : (
              children
            )}
          </div>
          {!formId && (
            <Button
              type="submit"
              variant="contained"
              className="endSelf"
              sx={buttonSx}
              disabled={!isDirty || form.getFieldState().invalid}
            >
              {loading ? "..." : primaryButtonText}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
