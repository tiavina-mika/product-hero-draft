/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import { jsx, Theme } from "@emotion/react";
import PageLayout from "../../../components/layouts/PageLayout";
import SectionCard from "../../../components/SectionCard";

const classes = {
  layout: css({
    marginTop: 74
  }),
  section: {
    marginTop: 56
  },
  sectionTitle: css({
    fontSize: 16,
    fontWeight: 700
  }),
  description: (theme: Theme) => ({
    lineHeight: 1.5,
    color: theme.palette.grey[600]
  })
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
      {/* <h1>cool</h1> */}
      <SectionCard
        title="Problème"
        description={"“Nous constatons une réduction du nombre d’inscription.”"}
      />
    </PageLayout>
  );
};

export default ProbllematicSummary;
