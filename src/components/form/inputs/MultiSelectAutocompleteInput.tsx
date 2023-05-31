/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Autocomplete, Avatar, Box, Stack, Typography } from "@mui/material";
import {
  FC,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useMemo,
  useState
} from "react";

import { IEntityOption } from "../../../types/team.type";
import { getUserFullNameAbbreviation } from "../../../utils/utils";

import TextFieldInput from "./TextFieldInput";

// const fakes = [
//   {
//     label: "Tiks kun",
//     value: {
//       firstName: "Tiks",
//       lastName: "Kun",
//       role: { name: "Produit - Product Designer" }
//     }
//   },
//   {
//     label: "Tiavina Michael",
//     value: {
//       firstName: "Tiavina",
//       lastName: "Michael",
//       role: { name: "Produit - Product Owner" }
//     }
//   }
// ];

const classes = {
  autocomplete: {
    "& .MuiAutocomplete-input": {
      paddingTop: "13.5px !important",
      paddingBottom: "13.5px !important"
    },
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
    minHeight: "calc(66px - 24px)",
    paddingTop: 12,
    paddingBottom: 12
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
  avatar: (theme: Theme) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main
  }),
  left: {
    padding: "5px 14px"
  },
  right: {
    padding: "5px 20px",
    cursor: "pointer"
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
  const originalOptions = useMemo(() => [...options], [options]);

  useEffect(() => {
    setDynamicOptions(options);
  }, [options]);

  // input change
  const handleChange = (_: SyntheticEvent, value: IEntityOption) => {
    onChange(value);

    const newValues = [value, ...values];
    setValues(newValues);
    onChangeList?.(newValues);
    onChange(value);

    // --------- udpate options --------- //
    const index = options.findIndex(
      (option: IEntityOption) => option.value === value.value
    );
    options.splice(index, 1);
    setDynamicOptions(options);
  };

  const handleDelete = (id: string) => {
    const newValues = values.filter(
      (value: IEntityOption) => value.value.objectId !== id
    );
    setValues(newValues);
    onChangeList?.(newValues);

    // --------- udpate options --------- //
    const removedValue = values.find(
      (value: IEntityOption) => value.value.objectId === id
    );
    if (!removedValue) return;

    // add the removed value to options
    setDynamicOptions((prev: IEntityOption[]): IEntityOption[] => [
      removedValue,
      ...prev
    ]);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <Stack spacing={1.6}>
      <Stack spacing={2} justifyContent="center">
        {values.map((value, index) => (
          <div
            key={value.label + index}
            className="flexRow center"
            css={classes.listContainer}
          >
            <div css={classes.left}>
              {(value.value as any).image ? (
                <Avatar
                  css={classes.avatar}
                  alt={value.label}
                  src={(value.value as any).image}
                />
              ) : (
                <Avatar css={classes.avatar} className="flexCenter">
                  {getUserFullNameAbbreviation(value.value)}
                </Avatar>
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
                    {(value.value.role as any).name}
                  </Typography>
                )}
              </Stack>
            </div>
            <div css={classes.divider} />
            <button
              css={[classes.right, classes.button]}
              className="flexCenter stretchSelf"
              onClick={() => handleDelete(value.value.objectId)}
            >
              <img alt="minus" src="/icons/minus.svg" />
            </button>
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
          getOptionLabel={(option: IEntityOption) => {
            return option.label || "";
          }}
          isOptionEqualToValue={(
            option: IEntityOption,
            value: IEntityOption
          ) => {
            return originalOptions.find(
              (option: IEntityOption) =>
                option.value.objectId === value.value.objectId
            );
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
