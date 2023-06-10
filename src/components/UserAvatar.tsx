/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Avatar } from "@mui/material";
import {
  getUserFullName,
  getUserFullNameAbbreviation
} from "../utils/user.utils";
import { IUser } from "../types/user.type";
import { cx } from "@emotion/css";

const classes = {
  avatar: (size: number) => (theme: Theme) => ({
    width: size,
    height: size,
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
  size?: number;
  className?: string;
};

const UserAvatar = ({ user, className, size = 24 }: Props) => {
  if ((user as any)?.image) {
    return (
      <Avatar
        css={classes.avatar(size)}
        alt={getUserFullName(user)}
        src={(user as any).image}
        className={className}
      />
    );
  }

  return (
    <Avatar css={classes.avatar(size)} className={cx("flexCenter", className)}>
      {getUserFullNameAbbreviation(user)}
    </Avatar>
  );
};

export default UserAvatar;
