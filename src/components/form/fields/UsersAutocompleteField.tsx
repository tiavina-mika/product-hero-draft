/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FormControl, FormHelperText } from "@mui/material";
import { ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { IEntityOption } from "../../../types/team.type";
import { TEAM_STATUS_ENUM } from "../../../utils/team.utils";
import UsersAutocompleteInput from "../inputs/user/UsersAutocompleteInput";

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
  listName: string;
};

const UsersAutocompleteField = ({
  name,
  listName,
  label,
  fullWidth,
  helperText,
  placeholder,
  loading,
  left,
  right,
  options = []
}: Props) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch
  } = useFormContext();

  const onChangeTeamStatus = (type: string, user: IEntityOption) => {
    // the followers field is an array
    // so we need the old values
    if (type === TEAM_STATUS_ENUM.FOLLOWERS) {
      const previousFollowers = watch(TEAM_STATUS_ENUM.FOLLOWERS);
      setValue(type, [user, ...previousFollowers]);
      return;
    }

    setValue(type, user);
  };

  const onChangeMembers = (values: IEntityOption[]) => {
    setValue(listName, values);
  };

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
          <UsersAutocompleteInput
            value={value}
            onChange={onChange}
            options={options}
            label={label}
            placeholder={placeholder}
            loading={loading}
            left={left}
            right={right}
            onChangeList={onChangeMembers}
            onChangeTeamStatus={onChangeTeamStatus}
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

export default UsersAutocompleteField;
