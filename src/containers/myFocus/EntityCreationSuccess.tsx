/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import { jsx } from "@emotion/react";
import PageLayout from "../../components/layouts/PageLayout";
import Section from "../../components/Section";

import { IEntityType } from "../../types/entity.type";
import EntitySelection from "./EntitySelection";

const classes = {
  sectionTitle: css({
    fontSize: 16,
    fontWeight: 700
  })
};
const EntityCreationSuccess = () => {
  const handleSelectEntityType = (type: IEntityType) => {
    console.log("type", type);
  };

  return (
    <PageLayout
      title="Ajouter un driver"
      description="Les drivers servent à prioriser les problématiques, fonctionnalités et User Story."
      // css={classes.layout}
      // contentClassName={classes.content}
      textSpacing={1}
      alignment="center"
      // onBack={onBack}
    >
      <Section
        alignment="center"
        titleClassName={classes.sectionTitle}
        title="Souhaitez vous créer une nouvelle entité ?"
      >
        <div className="stretchSelf flex1">
          <EntitySelection onSelect={handleSelectEntityType} />
        </div>
      </Section>
    </PageLayout>
  );
};

export default EntityCreationSuccess;
