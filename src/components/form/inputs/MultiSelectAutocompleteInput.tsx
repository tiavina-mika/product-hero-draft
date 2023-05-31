/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import {
  Autocomplete,
  Avatar,
  Box,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import { FC, ReactNode, SyntheticEvent, useEffect, useState } from "react";

import { IEntityOption } from "../../../types/team.type";
import { getUserFullNameAbbreviation } from "../../../utils/utils";

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
  },
  listContainer: {
    background: "#FFFFFF",
    border: "1px solid #dddddd",
    // border: '1px solid #F3F3F3',
    borderRadius: 6,
    minHeight: 66
  },
  name: (theme: Theme) => ({
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1,
    color: theme.palette.grey[800]
  }),
  role: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 1,
    color: "#A0A0A0"
  },
  leftAndRight: {
    padding: "5px 14px"
  },
  center: {
    paddingLeft: 14,
    paddingRight: 14
  },
  divider: {
    width: 1,
    background: "#dddddd",
    alignSelf: "stretch"
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
  onChangeList?: (value: IEntityOption[]) => void;
};

const MultiSelectAutocompleteInput: FC<Props> = ({
  value,
  label,
  onChange,
  placeholder,
  options = [],
  loading,
  left,
  right,
  onChangeList
}) => {
  const [values, setValues] = useState<IEntityOption[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState<IEntityOption[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  // const originalOptions = useMemo(() => [...options], [options]);

  useEffect(() => {
    setDynamicOptions(options);
  }, [options]);

  const handleChange = (_: SyntheticEvent, value: IEntityOption) => {
    onChange(value);

    const newValues = [value, ...values];
    setValues(newValues);
    onChangeList?.(newValues);
    onChange(value);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  const fakes = [
    {
      label: "Tiks kun",
      value: {
        firstName: "Tiks",
        lastName: "Kun",
        role: { name: "Produit - Product designer" }
      }
    }
  ];

  return (
    <Stack spacing={1.6}>
      <Stack css={classes.listContainer} justifyContent="center">
        {fakes.map((value, index) => (
          <div key={value.label + index} className="flexRow center">
            <div css={classes.leftAndRight}>
              {(value.value as any).image ? (
                <Avatar alt={value.label} src={(value.value as any).image} />
              ) : (
                <Avatar>{getUserFullNameAbbreviation(value.value)}</Avatar>
              )}
            </div>
            <div css={classes.divider} />
            <div className="flex1" css={classes.center}>
              <Stack spacing={1}>
                <Typography variant="h3" css={classes.name}>
                  {value.label}
                </Typography>
                {value.value.role && (
                  <Typography css={classes.role}>
                    {value.value.role.name}
                  </Typography>
                )}
              </Stack>
            </div>
            <div css={classes.divider} />
            <div css={classes.leftAndRight} className="flexCenter">
              <button css={classes.button} className="flexCenter">
                <img alt="minus" src="/icons/minus.svg" />
              </button>
            </div>
          </div>
        ))}
      </Stack>
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
          onFocus={onFocus}
          onBlur={onBlur}
          renderInput={(params) => (
            <TextFieldInput
              {...params}
              placeholder={placeholder}
              label={label}
              left={left}
              right={
                focused ? null : (
                  <button css={classes.button}>
                    {right || <img alt="plus" src="/icons/plus.svg" />}
                  </button>
                )
              }
            />
          )}
        />
      </Box>
    </Stack>
  );
};

export default MultiSelectAutocompleteInput;
