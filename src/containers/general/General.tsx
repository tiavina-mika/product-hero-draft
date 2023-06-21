/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { Stack } from "@mui/material";

const classes = {
  products: {
    marginTop: 40
  }
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
    <Stack spacing={6}>
      <Section title="Mes informations" css={classes.products}>
        <Card content={data.email} />
      </Section>
      <Section title="Plan & Billing" css={classes.products}>
        <Card
          left={<img alt="billing" src="/icons/money.svg" />}
          title={data.billing.name}
          description={data.billing.features}
          withArrow
        />
      </Section>
      <Section title="Assistance" css={classes.products}>
        <Card
          left={<img alt="assistance" src="/icons/message.svg" />}
          title="Contacter l'assistance"
          withArrow
        />
      </Section>
      <Section title="Plus" css={classes.products}>
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
  );
};

export default General;
