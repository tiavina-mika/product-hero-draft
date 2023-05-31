/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Autocomplete, Avatar, Box, Button, Stack } from "@mui/material";
import {
  FC,
  Fragment,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState
} from "react";

import { IEntityOption } from "../../../types/team.type";

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
  },
  button: {
    backgroundColor: "transparent",
    border: "none"
  }
};
type Props = {
  value: any;
  label?: string;
  options: any[];
  onChange: (value: any) => void;
  placeholder?: string;
  loading?: boolean;
  left?: ReactNode | string;
  right?: ReactNode;
};

const MultiSelectAutocompleteInput: FC<Props> = ({
  value,
  label,
  onChange,
  placeholder,
  options = [],
  loading,
  left,
  right
}) => {
  // const [values, setValues] = useState<IEntityOption[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState<IEntityOption[]>([]);

  // const originalOptions = useMemo(() => [...options], [options]);

  useEffect(() => {
    setDynamicOptions(options);
  }, [options]);

  const handleChange = (_: SyntheticEvent, value: IEntityOption) => {
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
            options={dynamicOptions}
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
                right={
                  <button css={classes.button}>
                    {right || <img alt="plus" src="/icons/plus.svg" />}
                  </button>
                }
              />
            )}
          />
        </Box>
      </Stack>
    </Fragment>
  );
};

export default MultiSelectAutocompleteInput;
