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
    left: -LAYOUT_CONTENT_PADDING_X,
    right: -LAYOUT_CONTENT_PADDING_X,
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
  return (
    <div className="stretchSelf">
      <Stack spacing={8.1}>
        <Section title="Mes informations" css={classes.section}>
          <Card content={data.email} />
          <div css={classes.divider} />
        </Section>
        <Section title="Plan & Billing" css={classes.section}>
          <Card
            left={<img alt="billing" src="/icons/money.svg" />}
            title={data.billing.name}
            description={data.billing.features}
            withArrow
          />
          <div css={classes.divider} />
        </Section>
        <Section title="Assistance" css={classes.section}>
          <Card
            left={<img alt="assistance" src="/icons/message.svg" />}
            title="Contacter l'assistance"
            withArrow
          />
          <div css={classes.divider} />
        </Section>
        <Section title="Plus" css={classes.section}>
          <Stack>
            <Card
              left={<img alt="assistance" src="/icons/star.svg" />}
              title="Évaluer l'application"
              withArrow
            />
            <Card
              left={<img alt="policy" src="/icons/eye.svg" />}
              title="Politique de confidentialité"
              withArrow
            />
            <Card
              left={<img alt="policy" src="/icons/eye.svg" />}
              title="Version"
              withArrow
            />
          </Stack>
        </Section>
      </Stack>
    </div>
  );
};

export default General;
