/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import PageLayout from "../../../components/layouts/PageLayout";
import UserAvatar from "../../../components/UserAvatar";
import { users } from "../../../utils/data/user";
import { getUserFullName } from "../../../utils/user.utils";

const currentUser = users[0];
const workspace = "Roudoudou Inc.";
const role = "Administrateur";

type Props = {
  children: ReactNode;
};
const MyFocusLayout = ({ children }: Props) => {
  return (
    <PageLayout className="flexColumn flex1 stretchSelf">
      {/* --------- header ------- */}
      <Stack direction="row" className="center" spacing={1.3}>
        <UserAvatar user={currentUser} size={46} />
        <Stack spacing={0.5} className="justifyCenter">
          <Typography variant="h6">{getUserFullName(currentUser)}</Typography>
          <Typography variant="h3">{workspace}</Typography>
          <Typography variant="body2">{role}</Typography>
        </Stack>
      </Stack>
      <Box sx={{ mt: 5 }}>
        {/* simulate React Router outlet component */}
        {children}
      </Box>
    </PageLayout>
  );
};

export default MyFocusLayout;
