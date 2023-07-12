/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import UserAvatar from "../UserAvatar";
import { IUser } from "../../types/user.type";

const classes = {
  iconContainer: {
    bottom: -2,
    left: 5
  }
};

type Props = {
  user: IUser;
  emoji?: string;
  icon?: string;
  size?: number;
};
const AvatarWithIcon = ({ user, emoji, icon, size = 56 }: Props) => {
  return (
    <div className="positionRelative">
      <UserAvatar size={size} user={user} />
      <div className="positionAbsolute" css={classes.iconContainer}>
        {emoji && (
          <span role="img" aria-label="icon">
            {emoji}
          </span>
        )}
        {icon && <img alt="icon" src={icon} />}
      </div>
    </div>
  );
};

export default AvatarWithIcon;
