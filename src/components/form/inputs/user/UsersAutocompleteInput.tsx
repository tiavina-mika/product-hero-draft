/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
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
import {
  addTeamStatusToMembers,
  TEAM_STATUS_ENUM
} from "../../../../utils/team.utils";

import TextFieldInput from "../TextFieldInput";
import Member from "./Member";

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
  autocomplete: (theme: Theme) => ({
    "& .MuiAutocomplete-inputRoot": {
      paddingRight: "0px !important",
      paddingTop: 0,
      paddingBottom: 0
    },
    "& .MuiFormControl-root": {
      padding: "0px !important",
      border: "1px solid " + theme.palette.grey[800],
      borderRadius: 6
    },
    "& .MuiInputBase-input": {
      paddingLeft: "16px !important",
      paddingRight: "16px !important"
    },
    // use the textField border
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    }
  }),
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
  onChangeTeamStatus: (type: string, user: IEntityOption) => void;
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
  onChangeTeamStatus,
  onChangeList
}: Props) => {
  const [members, setMembers] = useState<IEntityOption[]>([]);
  const [dynamicOptions, setDynamicOptions] = useState<IEntityOption[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  const originalOptions = useMemo(() => [...options], [options]);

  useEffect(() => {
    setDynamicOptions(options);
  }, [options]);

  // input change
  const handleChange = (_: SyntheticEvent, value: IEntityOption) => {
    onChange(value);

    const newValues = [value, ...members];
    setMembers(newValues);
    onChangeList?.(newValues);

    // --------- udpate options --------- //
    const index = dynamicOptions.findIndex(
      (option: IEntityOption) => option.value === value.value
    );
    dynamicOptions.splice(index, 1);
    setDynamicOptions(dynamicOptions);
  };

  const handleDelete = (id: string) => {
    const newValues = members.filter(
      (value: IEntityOption) => value.value.objectId !== id
    );
    setMembers(newValues);
    onChangeList?.(newValues);

    // --------- udpate options --------- //
    const removedValue = members.find(
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

  const handleTeamStatusSelect = (type: ISelectOption, user: IEntityOption) => {
    onChangeTeamStatus(type.value, user);

    // add the selected type to users
    const newMembers = addTeamStatusToMembers(members, user, type.value);

    setMembers(newMembers);
  };

  return (
    <Stack spacing={1.6}>
      {members.length > 0 && (
        <Stack spacing={2} justifyContent="center" sx={{ pl: 0 }}>
          {members.map((value, index) => (
            <Member
              key={value.label + index}
              team={value.value as any}
              type={value.value.type}
              onDelete={handleDelete}
              onTeamStatusSelect={(type) => handleTeamStatusSelect(type, value)}
              isLeaderSelected={value.value.type === TEAM_STATUS_ENUM.LEADER}
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
                <Member team={option.value as any} isInputOption />
              </li>
            );
          }}
          PaperComponent={({ children }) => {
            return (
              <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
                {children}
              </Paper>
            );
          }}
        />
      </Box>
    </Stack>
  );
};

export default UsersAutocompleteInput;
