import { FC } from "react";

import { Box, FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import CardCheckboxInput from "../inputs/CardCheckboxInput";
import { ISelectOption } from "../../../types/app.type";

type Props = {
  name: string;
  label?: string;
  helperText?: string;
  options: ISelectOption[];
};

const CardCheckboxField: FC<Props> = ({
  name,
  label,
  helperText,
  options,
  ...rest
}) => {
  // hooks
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Box>
          <CardCheckboxInput
            onChange={onChange}
            value={value}
            options={options}
            {...rest}
          />

          {/* ----------- errors ----------- */}
          {errors[name] && (
            <FormHelperText error sx={{ my: 1 }}>
              {(errors as any)[name]?.message}
            </FormHelperText>
          )}

          {/* ----------- helper text ----------- */}
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </Box>
      )}
    />
  );
};

export default CardCheckboxField;
