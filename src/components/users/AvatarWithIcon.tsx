/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import UserAvatar from "../components/UserAvatar";
import { IUser } from "../../types/user.type";

const classes = {
  iconContainer: {
    bottom: 0,
    left: 10
  }
};

type Props = {
  user: IUser;
  emoji?: string;
  icon?: string;
  size?: number;
};
const AvatarWithIcon = ({ user, emoji, icon, size }: Props) => {
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
