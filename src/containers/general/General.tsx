/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

import Section from "../../components/Section";
import Card from "../../components/Card";
import { LAYOUT_CONTENT_PADDING_X } from "../../utils/constants";

const classes = {
  general: {
    marginTop: 6
  },
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

const data = {
  email: "tiavinamika@entreprise.com",
  billing: {
    name: "Roadmap - 49€/mois",
    features: "1 rôle + 3 utilisateurs"
  }
};

type Props = {
  goToMyAccount: () => void;
};
const General = ({ goToMyAccount }: Props) => {
  // sections
  const handleGoToInformation = () => goToMyAccount();
  const handleGoToBillings = () => console.log("go to billings");

  // cards
  const handleGoToCurrentBilling = () => console.log("go to billing");
  const handleGoToAssistance = () => console.log("go to assistance");
  const handleGoToRating = () => console.log("go to rating");
  const handleGoToPolicy = () => console.log("go to policy");
  const handleGoToVersion = () => console.log("go to version");

  const handleLogout = () => console.log("logout");
  return (
    <div className="stretchSelf" css={classes.general}>
      <Stack spacing={7.1}>
        <Stack spacing={7.4}>
          {/* ---------- Mes informations ---------- */}
          <Section
            title="Mes informations"
            css={classes.section}
            onClick={handleGoToInformation}
          >
            <Card label="E-mail" title={data.email} />
            <div css={classes.divider} />
          </Section>
          {/* ---------- Plan & Billing ---------- */}
          <Section
            title="Plan & Billing"
            css={classes.section}
            onClick={handleGoToBillings}
          >
            <Card
              left={<img alt="billing" src="/icons/money.svg" />}
              title={data.billing.name}
              description={data.billing.features}
              withArrow
              onClick={handleGoToCurrentBilling}
            />
            <div css={classes.divider} />
          </Section>
          {/* ---------- Assistance ---------- */}
          <Section title="Assistance" css={classes.section}>
            <Card
              left={<img alt="assistance" src="/icons/message.svg" />}
              title="Contacter l'assistance"
              withArrow
              onClick={handleGoToAssistance}
            />
            <div css={classes.divider} />
          </Section>
          {/* ---------- Plus ---------- */}
          <Section title="Plus" css={classes.section}>
            <Stack spacing={2}>
              <Card
                left={<img alt="assistance" src="/icons/star.svg" />}
                title="Évaluer l'application"
                withArrow
                onClick={handleGoToRating}
              />
              <Card
                left={<img alt="policy" src="/icons/eye.svg" />}
                title="Politique de confidentialité"
                withArrow
                onClick={handleGoToPolicy}
              />
              <Card
                left={<img alt="policy" src="/icons/phone.svg" />}
                title="Version"
                onClick={handleGoToVersion}
                right={<img alt="assistance" src="/icons/chevron-down.svg" />}
                withRightDivider={false}
              />
            </Stack>
            <div css={classes.divider} />
          </Section>
        </Stack>
        {/* ---------- Deconnection ---------- */}
        <Card onClick={handleLogout} hasShadow contentClassName="flexCenter">
          <Typography variant="h4" color="error.main">
            Deconnexion
          </Typography>
        </Card>
      </Stack>
    </div>
  );
};

export default General;
