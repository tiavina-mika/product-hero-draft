/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { Stack } from "@mui/material";
import { LAYOUT_CONTENT_PADDING_X } from "../../utils/constants";

const classes = {
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
    top: 96
  })
};

const data = {
  email: "tiavinamika@entreprise.com",
  billing: {
    name: "Roadmap - 49€/mois",
    features: "1 rôle + 3 utilisateurs"
  }
};
const General = () => {
  // sections
  const handleGoToInformation = () => console.log("go to information");
  const handleGoToBillings = () => console.log("go to billings");

  // cards
  const handleGoToCurrentBilling = () => console.log("go to billing");
  const handleGoToAssistance = () => console.log("go to assistance");
  const handleGoToRating = () => console.log("go to rating");
  const handleGoToPolicy = () => console.log("go to policy");
  const handleGoToVersion = () => console.log("go to version");

  return (
    <div className="stretchSelf">
      <Stack spacing={8.1}>
        <Section
          title="Mes informations"
          css={classes.section}
          onClick={handleGoToInformation}
        >
          <Card title={data.email} />
          <div css={classes.divider} />
        </Section>
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
        <Section title="Assistance" css={classes.section}>
          <Card
            left={<img alt="assistance" src="/icons/message.svg" />}
            title="Contacter l'assistance"
            withArrow
            onClick={handleGoToAssistance}
          />
          <div css={classes.divider} />
        </Section>
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
              left={<img alt="policy" src="/icons/eye.svg" />}
              title="Version"
              withArrow
              onClick={handleGoToVersion}
            />
          </Stack>
        </Section>
      </Stack>
    </div>
  );
};

export default General;
