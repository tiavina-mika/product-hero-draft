/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import UserAvatar from "./UserAvatar";
import { IUser } from "../types/user.type";
import { cx } from "@emotion/css";


const classes = {
  changePasswordButton: (theme: Theme) => ({
    color: theme.palette.grey[800]
  }),
  img: {
    bottom: 2,
    right: -3
  }
};

type Props = {
  // onBack: () => void;
  user: IUser;
  className?: string;
};
const UploadAvatar = ({ user, className }: Props) => {
  return (
    <div className={cx('flexCenter stretchSelf', className)}>
      <div className="positionRelative">
        <UserAvatar user={user} size={70} />
        <img css={classes.img} className="positionAbsolute" alt="upload" src="/icons/edit.svg" />
      </div>
    </div>
  );
};

export default UploadAvatar;
