/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Avatar } from "@mui/material";

import { IUser } from "../../../../types/user.type";
import {
  getUserFullName,
  getUserFullNameAbbreviation
} from "../../../../utils/utils";

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
  user: IUser;
};

const MemberAvatar = ({ user }: Props) => {
  if ((user as any)?.image) {
    return (
      <Avatar
        css={classes.avatar}
        alt={getUserFullName(user)}
        src={(user as any).image}
      />
    );
  }

  return (
    <Avatar css={classes.avatar} className="flexCenter">
      {getUserFullNameAbbreviation(user)}
    </Avatar>
  );
};

export default MemberAvatar;
