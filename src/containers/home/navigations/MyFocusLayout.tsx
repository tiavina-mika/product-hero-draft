/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import { Fragment, ReactNode, useState } from "react";
import UserAvatar from "../../../components/UserAvatar";
import ButtonsSwitch from "../../../components/ButtonsSwitch";
import Dialog from "../../../components/Dialog";
import { users } from "../../../utils/data/user";
import { getUserFullName } from "../../../utils/user.utils";
import { ISelectedOptionValue } from "../../../types/app.type";

const currentUser = users[0];
const workspace = "Roudoudou Inc.";
const role = "Administrateur";

const classes = {
  top: {
    padding: 24
  },
  content: {
    padding: 16
  },
  dialog: {
    "& .MuiDialog-paper": {
      height: 136
    }
  },
  switchRoot: {
    width: 294
  }
};

type Props = {
  children: ReactNode;
};
const MyFocusLayout = ({ children }: Props) => {
  const [openWorkspaceDialog, setOpenWorkspaceDialog] = useState<boolean>(
    false
  );

  const workspaceOptions = [
    {
      label: workspace,
      value: "selectedWorskpace"
    },
    {
      label: "+ Espace de travail",
      value: "otherWorkspace"
    }
  ];

  const toggleOpenWorkspaceDialog = () =>
    setOpenWorkspaceDialog(!openWorkspaceDialog);

  const handleSelectWorkspace = (value: ISelectedOptionValue) => {
    console.log("handleSelectWorkspace value", value);
  };

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
        <div css={classes.content} className="stretchSelf">
          {/* simulate React Router outlet component */}
          {children}
        </div>
      </div>
      <Dialog
        onClose={toggleOpenWorkspaceDialog}
        open={openWorkspaceDialog}
        fullWidth
        maxWidth="xl"
        css={classes.dialog}
      >
        <div className="flexCenter stretchSelf flex1">
          <ButtonsSwitch
            onSelect={handleSelectWorkspace}
            css={classes.switchRoot}
            options={workspaceOptions}
          />
        </div>
      </Dialog>
    </Fragment>
  );
};

export default MyFocusLayout;
