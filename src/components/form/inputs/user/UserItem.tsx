/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { useState } from "react";
import { cx } from "@emotion/css";
import { Stack, Typography } from "@mui/material";

import { IEntityOption } from "../../../../types/team.type";
import SelectTeamTypeInput from "./SelectTeamTypeInput";
import { ISelectOption } from "../../../../types/app.type";
import UserItemAvatar from "./UserItemAvatar";
import { TEAM_TYPE_ENUM } from "../../../../utils/user.utils";

const classes = {
  button: {
    backgroundColor: "transparent",
    border: "none"
  },
  root: {
    minHeight: "calc(66px - 24px)",
    paddingTop: 12,
    paddingBottom: 12
  },
  defaultRoot: {
    background: "#FFFFFF",
    border: "1px solid #dddddd"
    // border: '1px solid #F3F3F3',
  },
  selectedRoot: (theme: Theme) => ({
    background: theme.palette.warning.light,
    border: "1px solid " + theme.palette.warning.main
  }),
  rootResult: {
    borderRadius: 6
  },
  rootOption: {
    borderRadius: 0
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
    padding: "5px 20px !important",
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
  },
  selectedDivider: (theme: Theme) => ({
    background: theme.palette.warning.main
  })
};
type Props = {
  selectedOption: IEntityOption;
  onDelete?: (id: string) => void;
  className?: string;
  isInputOption?: boolean;
  onTeamTypeSelect?: (type: ISelectOption, user: IEntityOption) => void;
};

const UserItem = ({
  selectedOption,
  onDelete,
  className,
  onTeamTypeSelect,
  isInputOption = false,
  ...selectParams
}: Props) => {
  const [
    selectedTeamType,
    setSelectedTeamType
  ] = useState<ISelectOption | null>(null);

  const handleDelete = (id: string) => {
    onDelete?.(id);
  };

  const handleSelectTeamType = (type: ISelectOption) => {
    onTeamTypeSelect?.(type, selectedOption);
    setSelectedTeamType(type);
  };

  const isLeaderSelected =
    selectedTeamType?.value === TEAM_TYPE_ENUM.LEADER && !isInputOption;

  return (
    <div
      {...selectParams}
      className={cx("flexRow center", className)}
      css={[
        classes.root,
        isLeaderSelected ? classes.selectedRoot : classes.defaultRoot,
        isInputOption ? classes.rootOption : classes.rootResult
      ]}
    >
      {/* ----------- left ----------- */}
      <div css={classes.left} className="stretchSelf flexCenter">
        <SelectTeamTypeInput onSelect={handleSelectTeamType}>
          {selectedTeamType ? (
            <div className="flexCenter stretchSelf flex1">
              <img alt="" src={"/icons/" + selectedTeamType.icon + ".svg"} />
            </div>
          ) : (
            <UserItemAvatar selectedOption={selectedOption} />
          )}
        </SelectTeamTypeInput>
      </div>
      <div
        css={[classes.divider, isLeaderSelected && classes.selectedDivider]}
      />
      {/* ----------- center ----------- */}
      <div className="flex1" css={classes.center}>
        <Stack spacing={1}>
          <Typography variant="h3" css={classes.name}>
            {selectedOption.label}
          </Typography>
          {selectedOption.value.role && (
            <Typography css={classes.role}>
              {(selectedOption.value.role as any).name}
            </Typography>
          )}
        </Stack>
      </div>
      <div
        css={[classes.divider, isLeaderSelected && classes.selectedDivider]}
      />
      {/* ----------- right ----------- */}
      <button
        css={[classes.right, classes.button]}
        className="flexCenter stretchSelf"
        onClick={() => handleDelete(selectedOption.value.objectId)}
      >
        <img alt="minus" src="/icons/minus.svg" />
      </button>
    </div>
  );
};

export default UserItem;
