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
  selectedOption: IEntityOption;
};

const UserItemAvatar = ({ selectedOption }: Props) => {
  if ((selectedOption.value as any)?.image) {
    return (
      <Avatar
        css={classes.avatar}
        alt={selectedOption.label}
        src={(selectedOption.value as any).image}
      />
    );
  }

  return (
    <Avatar css={classes.avatar} className="flexCenter">
      {getUserFullNameAbbreviation(selectedOption.value)}
    </Avatar>
  );
};

export default UserItemAvatar;
