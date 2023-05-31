/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FormControl, FormHelperText } from "@mui/material";
import { FC, ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { IEntityOption } from "../../../types/team.type";
import AutocompleteInput from "../inputs/AutocompleteInput";

type Props = {
  name: string;
  label?: string;
  options: IEntityOption[];
  previewName: string;
  fullWidth?: boolean;
  helperText?: string;
  placeholder?: string;
  loading?: boolean;
  withPreview?: boolean;
  left?: ReactNode | string;
  right?: ReactNode;
};

const AutocompleteField: FC<Props> = ({
  name,
  label,
  fullWidth,
  helperText,
  placeholder,
  previewName,
  loading,
  left,
  right,
  options = [],
  withPreview = false
}) => {
  const {
    control,
    formState: { errors },
    setValue
  } = useFormContext();

  return (
    <FormControl
      component="fieldset"
      error={!!errors?.[name]}
      fullWidth={fullWidth}
    >
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <AutocompleteInput
            value={value}
            onChange={onChange}
            options={options}
            label={label}
            placeholder={placeholder}
            loading={loading}
            withPreview={withPreview}
            onChangeList={(values: IEntityOption[]) =>
              setValue(previewName, values)
            }
            left={left}
            right={right}
          />
        )}
      />
      {errors[name] ? (
        <FormHelperText error>{(errors as any)[name].message}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default AutocompleteField;
