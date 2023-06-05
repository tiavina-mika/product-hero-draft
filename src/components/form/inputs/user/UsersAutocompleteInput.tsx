/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Paper,
  Stack
} from "@mui/material";
import {
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useMemo,
  useState
} from "react";
import { ISelectOption } from "../../../../types/app.type";

import { IEntityOption } from "../../../../types/team.type";

import TextFieldInput from "../TextFieldInput";
import UsersAutocompleteInputOption from "./UsersAutocompleteInputOption";

const fakes = [
  {
    label: "Tiks kun",
    value: {
      firstName: "Tiks",
      lastName: "Kun",
      role: { name: "Produit - Product Designer" }
    }
  },
  {
    label: "Tiavina Michael",
    value: {
      firstName: "Tiavina",
      lastName: "Michael",
      role: { name: "Produit - Product Owner" }
    }
  }
];

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
  bluredAutocomplete: {
    "& .MuiAutocomplete-input": {
      paddingTop: "13.5px !important",
      paddingBottom: "13.5px !important"
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
  onChangeList?: (value: IEntityOption[]) => void;
  onChangeTeamType: (type: string, user: IEntityOption) => void;
};

const UsersAutocompleteInput = ({
  value,
  label,
  onChange,
  placeholder,
  options = [],
  loading,
  left,
  right,
  onChangeTeamType,
  onChangeList
}: Props) => {
  const [values, setValues] = useState<IEntityOption[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState<IEntityOption[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  const originalOptions = useMemo(() => [...options], [options]);
  const [seletedTeamType, setSelectedTeamType] = useState<ISelectOption | null>(
    null
  );
  // console.log('value', value)

  useEffect(() => {
    setDynamicOptions(options);
  }, [options]);

  // input change
  const handleChange = (_: SyntheticEvent, value: IEntityOption) => {
    onChange(value);

    const newValues = [value, ...values];
    setValues(newValues);
    onChangeList?.(newValues);

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

  const handleTeamTypeSelect = (type: ISelectOption, user: IEntityOption) => {
    // console.log('type', { type, user })
    onChangeTeamType(type.value, user);
  };

  return (
    <Stack spacing={1.6}>
      {values.length > 0 && (
        // {values.length > 0 && (
        <Stack spacing={2} justifyContent="center" sx={{ pl: 0 }}>
          {values.map((value, index) => (
            <UsersAutocompleteInputOption
              key={value.label + index}
              selectedOption={value}
              onDelete={handleDelete}
              onTeamTypeSelect={handleTeamTypeSelect}
              // seletedTeamType={seletedTeamType}
            />
          ))}
        </Stack>
      )}
      <Box className="flexRow">
        <Autocomplete
          loading={loading}
          sx={{ flex: 1 }}
          css={[
            classes.autocomplete,
            focused ? classes.bluredAutocomplete : null
          ]}
          value={value}
          onChange={handleChange}
          options={dynamicOptions}
          getOptionLabel={(option: IEntityOption) => {
            return option.label || "";
          }}
          isOptionEqualToValue={(_: IEntityOption, value: IEntityOption) => {
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
          renderInput={(params: AutocompleteRenderInputParams) => (
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
          renderOption={(
            params: HTMLAttributes<HTMLLIElement>,
            option: IEntityOption
          ) => {
            return (
              <li {...params} className="flex1">
                <UsersAutocompleteInputOption
                  selectedOption={option}
                  isInputOption
                />
              </li>
            );
          }}
          PaperComponent={({ children }) => {
            return <Paper elevation={0}>{children}</Paper>;
          }}
        />
      </Box>
    </Stack>
  );
};

export default UsersAutocompleteInput;
