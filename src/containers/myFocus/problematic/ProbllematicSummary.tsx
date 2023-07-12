/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack, Typography, useTheme } from "@mui/material";
import { get } from "react-hook-form";
import PageLayout from "../../../components/layouts/PageLayout";
import SectionCard from "../../../components/sections/SectionCard";
import SectionCardContentItem from "../../../components/sections/SectionCardContentItem";
import { getSliderColorByPercent } from "../../../utils/app.utils";
import { getTrustLevel } from "../../../utils/entity.utils";

const entity = {
  title: "Retrouver la croissance du volume d’inscrits",
  description: "Nous constatons une réduction du nombre d’inscription.",
  drivers: [
    { driver: { objectId: "d01", name: "Acquisition" }, impact: 80 },
    { driver: { objectId: "d02", name: "Expérience Client" }, impact: 80 }
  ],
  results: [
    { objectId: "r01", name: "FTB Croissance 20%" },
    { objectId: "r02", name: "PS +20 sur les nouveaux clients" },
    { objectId: "r03", name: "Automatiser le parcours à 80%" }
  ],
  endDate: "17 Mai 2024",
  trustLevel: 80
};

const ProbllematicSummary = () => {
  const handleBack = () => {
    console.log("onBack");
  };

  const trustLevelOption = getTrustLevel(entity.trustLevel);

  return (
    <PageLayout
      title="Votre problématique"
      description="Vous pourrez la modifier à tout moment directement dans votre espace Mon Focus."
      // rootClassName={classes.layout}
      textSpacing={1}
      titleSpacing={1.5}
      onBack={handleBack}
    >
      <Stack spacing={3}>
        {/* description */}
        <SectionCard
          title="Problème"
          description={`“${entity.description}.”`}
        />
        {/* drivers */}
        <SectionCard title="Drivers">
          {entity.drivers.map((driver, index) => (
            <SectionCardContentItem
              title={driver.driver.name}
              key={driver.driver.objectId + index}
            />
          ))}
        </SectionCard>
        {/* results */}
        <SectionCard title="Résultats attendus">
          {entity.results.map((result, index) => (
            <SectionCardContentItem
              title={result.name}
              key={result.objectId + index}
            />
          ))}
        </SectionCard>
        {/* endDate */}
        <SectionCard title="Deadline">
          <SectionCardContentItem
            icon="/icons/calendar.svg"
            title={entity.endDate}
          />
        </SectionCard>
        {/* trustLevel */}
        <SectionCard title="Niveau de confiance">
          <SectionCardContentItem
            // TODO: change the icon
            icon="/icons/calendar.svg"
            title={trustLevelOption?.title || ""}
            action={
              <Typography color={`${trustLevelOption?.color}.main`}>
                {entity.trustLevel}
              </Typography>
            }
          />
        </SectionCard>
        {/* title */}
        <SectionCard title="Intitulé du problème" description={entity.title} />
      </Stack>
    </PageLayout>
  );
};

export default ProbllematicSummary;
