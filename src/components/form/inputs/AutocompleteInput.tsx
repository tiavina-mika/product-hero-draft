/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Autocomplete, Avatar, Box, Stack } from "@mui/material";
import {
  FC,
  Fragment,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState,
  useMemo
} from "react";

import { IEntityOption } from "../../../types/team.type";
import { getUserFullNameAbbreviation } from "../../../utils/user.utils";

import TextFieldInput from "./TextFieldInput";

const classes = {
  autocomplete: {
    "& .MuiAutocomplete-inputRoot": {
      paddingRight: "0px !important",
      paddingTop: 0,
      paddingBottom: 0
    },
    "& .MuiFormControl-root": {
      padding: "0px !important",
      border: "1px solid #303030",
      borderRadius: 6
    }
  }
};
type Props = {
  value: any;
  label?: string;
  options: any[];
  onChange: (value: any) => void;
  placeholder?: string;
  onChangeList?: (value: IEntityOption[]) => void;
  loading?: boolean;
  withPreview?: boolean;
  left?: ReactNode | string;
  right?: ReactNode;
};

const AutocompleteInput: FC<Props> = ({
  value,
  label,
  onChange,
  placeholder,
  onChangeList,
  options = [],
  loading,
  withPreview,
  left,
  right
}) => {
  const [values, setValues] = useState<IEntityOption[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState<IEntityOption[]>([]);

  const originalOptions = useMemo(() => [...options], [options]);

  useEffect(() => {
    setDynamicOptions(options);
  }, [options]);

  const handleChange = (_: SyntheticEvent, value: IEntityOption) => {
    if (withPreview) {
      const newValues = [value, ...values];
      setValues(newValues);
      onChangeList?.(newValues);
      onChange(value);

      const index = options.findIndex(
        (option: IEntityOption) => option.value === value.value
      );
      options.splice(index, 1);
      setDynamicOptions(options);
      return;
    }

    onChange(value);
  };

  return (
    <Fragment>
      <Stack spacing={1.6}>
        <Box className="flexRow">
          <Autocomplete
            loading={loading}
            sx={{ flex: 1 }}
            css={classes.autocomplete}
            value={value}
            onChange={handleChange}
            options={withPreview ? dynamicOptions : originalOptions}
            getOptionLabel={(option) => {
              return option.label || "";
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            disableClearable
            renderInput={(params) => (
              <TextFieldInput
                {...params}
                placeholder={placeholder}
                label={label}
                left={left}
                right={right}
              />
            )}
          />
        </Box>

        {/* ------- preview ------- */}
        {withPreview && values.length > 0 && (
          <Stack direction="row" spacing={2}>
            {values.map((preview: IEntityOption, index: number) => (
              <Stack key={preview.label + index} direction="row" spacing={2}>
                {preview.value.image ? (
                  <Avatar alt={preview.label} src={preview.value.image} />
                ) : (
                  <Avatar>{getUserFullNameAbbreviation(preview.value)}</Avatar>
                )}
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
    </Fragment>
  );
};

export default AutocompleteInput;
