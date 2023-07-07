/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import { jsx, Theme } from "@emotion/react";
import { Button } from "@mui/material";
import PageLayout from "../../components/layouts/PageLayout";
import Section from "../../components/Section";

import { IEntityType } from "../../types/entity.type";
import EntitySelection from "./EntitySelection";

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
const EntityCreationSuccess = () => {
  const handleSelectEntityType = (type: IEntityType) => {
    console.log("type", type);
  };

  return (
    <PageLayout
      image="/icons/celebrate.svg"
      title={
        <span>
          Votre problématique <br />
          est prête !
        </span>
      }
      description={
        <span css={classes.description}>
          Vous pourrez la modifier à tout moment directement
          <br />
          dans votre espace Mon Focus.
        </span>
      }
      rootClassName={classes.layout}
      textSpacing={1}
      titleSpacing={1.5}
      alignment="center"
    >
      <Section
        alignment="center"
        titleClassName={classes.sectionTitle}
        css={classes.section}
        title="Souhaitez vous créer une nouvelle entité ?"
      >
        <div className="stretchSelf flex1">
          <EntitySelection onSelect={handleSelectEntityType} />
        </div>
        <div className="flexRow justifyEnd">
          <Button variant="contained">Mon focus</Button>
        </div>
      </Section>
    </PageLayout>
  );
};

export default EntityCreationSuccess;
