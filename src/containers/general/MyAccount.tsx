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
import ChangePasswordDialog from "./ChangePasswordDialog";
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema
} from "../../validations/user.validation";
import { IChangePasswordInput } from "../../types/user.type";

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
  changePasswordButtonText: (theme: Theme) => ({
    color: theme.palette.grey[800]
  }),
  changePasswordButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  passwordRight: css({
    paddingLeft: 6,
    paddingRight: 6
  })
};

type IInputs = "firstName" | "lastName" | "email";
type Props = {
  onBack: () => void;
};
const MyAccount = ({ onBack }: Props) => {
  const [openFormDialog, setOpenFormDialog] = useState<IInputs | null>(null);
  const [openChangePasswordDialog, setOpenChangePasswordDialog] = useState<
    boolean
  >(false);

  const handleDisableNotification = () => console.log("disable Notification");

  const handleOpenDialog = (name: IInputs) => setOpenFormDialog(name);
  const closeDialog = () => setOpenFormDialog(null);

  const handleSaveLastName = <ILastNameInput extends unknown>(
    values: ILastNameInput
  ) => {
    console.log("handleSaveLastName values", values);
  };

  const handleSaveFirstName = <IFirstNameInput extends unknown>(
    values: IFirstNameInput
  ) => {
    console.log("handleSaveFirstName values", values);
  };

  const handleSaveEmail = <IEmailInput extends unknown>(
    values: IEmailInput
  ) => {
    console.log("handleSaveEmail values", values);
  };

  const handleChangePassword = (values: IChangePasswordInput) => {
    console.log("handleSaveEmail values", values);
  };

  const toggleChangePasswordDialog = () =>
    setOpenChangePasswordDialog(!openChangePasswordDialog);

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
                <Card
                  onClick={() => handleOpenDialog("lastName")}
                  label="Nom"
                  title={currentUser.lastName}
                />
                <Card
                  onClick={() => handleOpenDialog("firstName")}
                  label="Prénom"
                  title={currentUser.firstName}
                />
                <Card
                  onClick={() => handleOpenDialog("email")}
                  label="E-mail"
                  title={currentUser.email}
                />
                <Card
                  label="Mot de passe"
                  right={
                    <Button
                      variant="text"
                      type="button"
                      sx={{ px: 0 }}
                      css={classes.changePasswordButton}
                      onClick={toggleChangePasswordDialog}
                    >
                      <Typography css={classes.changePasswordButtonText}>
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
                      left={<img alt="push" src="/icons/record.svg" />}
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
      {/* ----------------------------- */}
      {/* ----------- Forms ----------- */}
      {/* ----------------------------- */}
      <DialogSingleInputForm
        title="Modifier le nom"
        open={openFormDialog === "lastName"}
        onClose={closeDialog}
        name="lastName"
        onSubmit={handleSaveLastName}
        schema={lastNameSchema}
        defaultValue={currentUser.lastName}
      />
      <DialogSingleInputForm
        title="Modifier le prénom"
        open={openFormDialog === "firstName"}
        onClose={closeDialog}
        name="firstName"
        onSubmit={handleSaveFirstName}
        schema={firstNameSchema}
        defaultValue={currentUser.firstName}
      />
      <DialogSingleInputForm
        title="Modifier l'email"
        open={openFormDialog === "email"}
        onClose={closeDialog}
        name="email"
        onSubmit={handleSaveEmail}
        schema={emailSchema}
        defaultValue={currentUser.email}
      />
      <ChangePasswordDialog
        open={openChangePasswordDialog}
        onClose={toggleChangePasswordDialog}
        onConfirm={handleChangePassword}
      />
    </PageLayout>
  );
};

export default MyAccount;
