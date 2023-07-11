/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack } from "@mui/material";
import PageLayout from "../../../components/layouts/PageLayout";
import SectionCard from "../../../components/sections/SectionCard";
import SectionCardContentItem from "../../../components/sections/SectionCardContentItem";

const entity = {
  drivers: [
    { driver: { objectId: "d01", name: "Acquisition" } },
    { driver: { objectId: "d02", name: "Expérience Client" } }
  ],
  results: [
    { objectId: "r01", name: "FTB Croissance 20%" },
    { objectId: "r02", name: "PS +20 sur les nouveaux clients" },
    { objectId: "r03", name: "Automatiser le parcours à 80%" }
  ]
};

const ProbllematicSummary = () => {
  const handleBack = () => {
    console.log("onBack");
  };

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
          description={
            "“Nous constatons une réduction du nombre d’inscription.”"
          }
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
      </Stack>
    </PageLayout>
  );
};

export default ProbllematicSummary;
