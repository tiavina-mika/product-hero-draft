/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { css } from "@emotion/css";

import PageLayout from "../../../components/layouts/PageLayout";
import SectionCard from "../../../components/sections/SectionCard";
import SectionCardContentItem from "../../../components/sections/SectionCardContentItem";
import AvatarWithIcon from "../../../components/user/AvatarWithIcon";
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
  trustLevel: 80,
  leader: {
    objectId: "u01",
    firstName: "Tiks",
    lastName: "Kun",
    email: "user01@gmail.com"
  },
  followers: [
    {
      objectId: "u02",
      firstName: "Tiavina",
      lastName: "Michael",
      email: "user02@gmail.com"
    },
    {
      objectId: "u03",
      firstName: "Ralainirina",
      lastName: "Michael",
      email: "user03@gmail.com"
    }
  ]
};

const classes = {
  buttonContainer: {
    paddingTop: 24,
    bottom: 0,
    left: "100%"
  },
  root: css({
    paddingBottom: 24
  }),
  content: {
    marginTop: 27
  }
};

const ProbllematicSummaryV1 = () => {
  const handleBack = () => {
    console.log("onBack");
  };

  const handleFinalValidate = () => {
    console.log("handleFinalValidate");
  };

  const trustLevelOption = getTrustLevel(entity.trustLevel);

  return (
    <PageLayout
      title="Votre problématique"
      info="Vous pourrez la modifier à tout moment directement dans votre espace Mon Focus."
      rootClassName="positionRelative"
      contentClassName={classes.root}
      css={classes.content}
      textSpacing={1}
      titleSpacing={1.5}
      onBack={handleBack}
    >
      <Stack spacing={3} className="stretchSelf">
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
        {/* members */}
        <SectionCard title="Membres concernés">
          <Stack direction="row" spacing={2}>
            {entity.leader && (
              <AvatarWithIcon user={entity.leader} emoji="👑" />
            )}
            {entity.owner && <AvatarWithIcon user={entity.owner} emoji="👑" />}
            {entity.followers.map((follower, index) => (
              <AvatarWithIcon
                key={follower.objectId + index}
                user={follower}
                emoji="🗣"
              />
            ))}
          </Stack>
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
              <Typography
                color={`${trustLevelOption?.color}.main`}
                sx={{ fontSize: 14, lineHeight: 1 }}
              >
                {entity.trustLevel}
              </Typography>
            }
          />
        </SectionCard>
        {/* title */}
        <SectionCard title="Intitulé du problème" description={entity.title} />
      </Stack>
      <div className="positionSticky" css={classes.buttonContainer}>
        <Button variant="contained" onClick={handleFinalValidate}>
          Valider & créer
        </Button>
      </div>
    </PageLayout>
  );
};

export default ProbllematicSummaryV1;
