/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FormControl, FormHelperText } from "@mui/material";
import { FC, ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { IEntityOption } from "../../../types/team.type";
import MultiSelectAutocompleteInput from "../inputs/MultiSelectAutocompleteInput";

type Props = {
  name: string;
  label?: string;
  options: IEntityOption[];
  fullWidth?: boolean;
  helperText?: string;
  placeholder?: string;
  loading?: boolean;
  left?: ReactNode | string;
  right?: ReactNode;
};

const MemberAutocompleteField: FC<Props> = ({
  name,
  label,
  fullWidth,
  helperText,
  placeholder,
  loading,
  left,
  right,
  options = []
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
          <MultiSelectAutocompleteInput
            value={value}
            onChange={onChange}
            options={options}
            label={label}
            placeholder={placeholder}
            loading={loading}
            left={left}
            right={right}
            onChangeList={(values: IEntityOption[]) =>
              setValue("members", values)
            }
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

export default MemberAutocompleteField;
