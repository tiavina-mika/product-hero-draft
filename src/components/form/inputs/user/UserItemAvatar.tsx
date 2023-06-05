/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Avatar } from "@mui/material";

import { IEntityOption } from "../../../../types/team.type";
import { getUserFullNameAbbreviation } from "../../../../utils/utils";

const classes = {
  avatar: (theme: Theme) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main
  })
};
type Props = {
  option: IEntityOption;
};

const UserItemAvatar = ({ option }: Props) => {
  if ((option.value as any)?.image) {
    return (
      <Avatar
        css={classes.avatar}
        alt={option.label}
        src={(option.value as any).image}
      />
    );
  }

  return (
    <Avatar css={classes.avatar} className="flexCenter">
      {getUserFullNameAbbreviation(option.value)}
    </Avatar>
  );
};

export default UserItemAvatar;
