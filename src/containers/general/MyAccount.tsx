/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";

import PageLayout from "../../components/layouts/PageLayout";
import Card from "../../components/Card";
import { css } from "@emotion/css";
import UploadAvatar from "../../components/UploadAvatar";
import Section from "../../components/Section";
import { useState } from "react";
import DialogSingleInputForm from "../../components/form/DialogSingleInputForm";

const currentUser = {
  objectId: "xxx",
  email: "tiavinamika@entreprise.com",
  lastName: "Ralainirina",
  firstName: "Tiavina",
  role: {
    objectId: "rolexxxx",
    name: "Administrateur"
  }
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

// const inputs = [
//   {
//     name: "lastName",
//     label: "Nom",
//     title: currentUser.lastName
//   }
// ]
type IInputs = "firstName" | "lastName" | "email";
type Props = {
  onBack: () => void;
};
const MyAccount = ({ onBack }: Props) => {
  const [openFormDialog, setOpenFormDialog] = useState<IInputs | null>(null);
  const handleClickPassword = () => console.log("change password");
  const handleDisableNotification = () => console.log("disable Notification");

  const handleOpenDialog = (name: IInputs) => setOpenFormDialog(name);
  const closeDialog = () => setOpenFormDialog(null);

  return (
    <PageLayout
      title="Mon compte"
      textSpacing={1}
      onBack={onBack}
      contentClassName="flex1"
      withHeaderDivider
    >
      <Box className="flex1 stretchSelf" sx={{ mt: 5.8 }}>
        <Stack spacing={3}>
          <UploadAvatar user={currentUser} />
          <Box className="flex1 stretchSelf">
            <Stack spacing={4}>
              <Stack spacing={3}>
                {/* ---------- Mes informations ---------- */}
                <Card
                  onClick={() => handleOpenDialog("lastName")}
                  label="Nom"
                  title={currentUser.lastName}
                />
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
                  title={currentUser.role.name}
                  titleTextClassName="h4Grey600"
                />
              </Stack>
              <div>
                <Section title="Notifications">
                  <Stack spacing={2}>
                    <Card
                      left={<img alt="disable" src="/icons/disabled.svg" />}
                      title="Ne pas déranger"
                      description="Désactivé"
                      withArrow
                      withRightDivider={false}
                      onClick={handleDisableNotification}
                    />
                    <Card
                      left={<img alt="push" src="/icons/disabled.svg" />}
                      title="Push"
                      description="Activer les notifications"
                      withArrow
                      withRightDivider={false}
                      onClick={handleDisableNotification}
                    />
                  </Stack>
                </Section>
              </div>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <DialogSingleInputForm
        title="Modifier le nom"
        open={openFormDialog === "lastName"}
        onClose={closeDialog}
      />
    </PageLayout>
  );
};

export default MyAccount;
