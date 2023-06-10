/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import { Fragment, ReactNode, useState } from "react";
import UserAvatar from "../../../components/UserAvatar";
import Dialog from "../../../components/Dialog";
import { users } from "../../../utils/data/user";
import { getUserFullName } from "../../../utils/user.utils";

const currentUser = users[0];
const workspace = "Roudoudou Inc.";
const role = "Administrateur";

const classes = {
  top: {
    padding: 24
  },
  content: {
    padding: 16
  }
};
type Props = {
  children: ReactNode;
};
const MyFocusLayout = ({ children }: Props) => {
  const [openWorkspaceDialog, setOpenWorkspaceDialog] = useState<boolean>(
    false
  );

  const toggleOpenWorkspaceDialog = () =>
    setOpenWorkspaceDialog(!openWorkspaceDialog);

  return (
    <Fragment>
      <div className="flexColumn flex1 stretchSelf">
        {/* --------- header ------- */}
        <div css={classes.top} className="flexRow spaceBetween stretchSelf">
          {/* left */}
          <button
            className="transparentButton"
            onClick={toggleOpenWorkspaceDialog}
          >
            <Stack direction="row" className="center" spacing={1.7}>
              <UserAvatar user={currentUser} size={46} />
              <Stack spacing={0.58} className="justifyCenter">
                <Typography variant="h6">
                  {getUserFullName(currentUser)}
                </Typography>
                <Typography variant="h3">{workspace}</Typography>
                <Typography variant="body2">{role}</Typography>
              </Stack>
              <div className="stretchSelf flexCenter">
                <img alt="chevron-down" src="/icons/chevron-down.svg" />
              </div>
            </Stack>
          </button>
          {/* right */}
          <div>
            <Stack direction="row" className="center" spacing={1}>
              <IconButton>
                <img alt="search" src="/icons/search.svg" />
              </IconButton>
              <IconButton>
                <img alt="setting" src="/icons/app-setting.svg" />
              </IconButton>
            </Stack>
          </div>
        </div>
        <div css={classes.content}>
          {/* simulate React Router outlet component */}
          {children}
        </div>
      </div>
      <Dialog
        toggle={toggleOpenWorkspaceDialog}
        open={openWorkspaceDialog}
        fullWidth
        maxWidth="xl"
      >
        <h1>cool</h1>
      </Dialog>
    </Fragment>
  );
};

export default MyFocusLayout;
