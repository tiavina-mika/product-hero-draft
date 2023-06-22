/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";

import PageLayout from "../../components/layouts/PageLayout";
import Card from "../../components/Card";
import { LAYOUT_CONTENT_PADDING_X } from "../../utils/constants";
import { css } from "@emotion/css";

const classes = {
  general: {
    marginTop: 6
  },
  billingCard: css({
    minHeight: 68
  }),
  section: {
    // https://github.com/emotion-js/emotion/issues/2444
    position: "relative" as "relative"
  },
  divider: (theme: Theme) => ({
    height: 1,
    backgroundColor: theme.palette.grey[100],
    position: "absolute" as "absolute",
    left: -LAYOUT_CONTENT_PADDING_X /* this override the parent pagging */,
    right: -LAYOUT_CONTENT_PADDING_X /* this override the parent pagging */,
    bottom: -33
  })
};

const currentUser = {
  email: "tiavinamika@entreprise.com",
  lastName: "Ralainirina",
  firstName: "Tiavina",
  role: "Administrateur"
};

type Props = {
  onBack: () => void;
};
const MyAccount = ({ onBack }: Props) => {
  const handleClickPassword = () => console.log("change password");

  return (
    <PageLayout title="Mon compte" textSpacing={1} onBack={onBack}>
      <Stack spacing={7.4}>
        {/* ---------- Mes informations ---------- */}
        <Card label="Nom" title={currentUser.lastName} />
        <Card label="Prénom" title={currentUser.firstName} />
        <Card label="E-mail" title={currentUser.email} />
        <Card
          label="Mot de passe"
          right={
            <Button type="button" onClick={handleClickPassword}>
              Modifier
            </Button>
          }
        >
          <Typography>••••••••••</Typography>
        </Card>
        <Card label="Role" title={currentUser.role} />
      </Stack>
    </PageLayout>
  );
};

export default MyAccount;
