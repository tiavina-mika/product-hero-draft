/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";

import PageLayout from "../../components/layouts/PageLayout";
import Card from "../../components/Card";
import { css } from "@emotion/css";

const currentUser = {
  email: "tiavinamika@entreprise.com",
  lastName: "Ralainirina",
  firstName: "Tiavina",
  role: "Administrateur"
};

const classes = {
  changePasswordButton: (theme: Theme) => ({
    color: theme.palette.grey[800]
  }),
  passwordRight: css({
    paddingLeft: 6,
    paddingRight: 6
  })
};

type Props = {
  onBack: () => void;
};
const MyAccount = ({ onBack }: Props) => {
  const handleClickPassword = () => console.log("change password");

  return (
    <PageLayout
      title="Mon compte"
      textSpacing={1}
      onBack={onBack}
      contentClassName="flex1"
    >
      <Box sx={{ mt: 3 }} className="flex1 stretchSelf">
        <Stack spacing={3}>
          {/* ---------- Mes informations ---------- */}
          <Card label="Nom" title={currentUser.lastName} />
          <Card label="Prénom" title={currentUser.firstName} />
          <Card label="E-mail" title={currentUser.email} />
          <Card
            label="Mot de passe"
            right={
              <Button
                variant="text"
                type="button"
                sx={{ px: 0 }}
                onClick={handleClickPassword}
              >
                <Typography css={classes.changePasswordButton}>
                  Modifier
                </Typography>
              </Button>
            }
            rightClassName={classes.passwordRight}
          >
            <Typography>••••••••••</Typography>
          </Card>
          <Card
            label="Role"
            title={currentUser.role}
            titleTextClassName="h4Grey600"
          />
        </Stack>
      </Box>
    </PageLayout>
  );
};

export default MyAccount;
