/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";

import Dialog from "../../components/Dialog";
import { getTrustLevel } from "../../utils/entity.utils";
import SummaryItem from "./SummaryItem";
import RoundedCard from "../../components/card/RoundedCard";
import { Stack } from "@mui/material";

const entity = {
  title: "Retrouver la croissance du volume d’inscrits",
  description: "Nous constatons une réduction du nombre d’inscription.",
  drivers: [
    {
      driver: { objectId: "d01", name: "Acquisition", icon: "👑" },
      impact: 80
    },
    {
      driver: { objectId: "d02", name: "Fidélisation", icon: "💸" },
      impact: 80
    }
  ],
  results: [
    { objectId: "r01", name: "FTB Croissance 20%" },
    { objectId: "r02", name: "PS +20 sur les nouveaux clients" },
    { objectId: "r03", name: "Automatiser le parcours à 80%" }
  ],
  endDate: "17 Mai 2024",
  okrs: [
    { objectId: "okr01", name: "Améliorer notre acquisition", icon: "⭐️" },
    { objectId: "okr02", name: "Améliorer notre", icon: "⭐️" }
  ],
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
  dialogContent: css({
    marginTop: 61
  }),

  dialog: {
    paddingTop: 3
    // '& .MuiDialog-paper': {
    //   padding: '28px 16px',
    // },
  }
};

const ProbllematicSummary = () => {
  const handleClose = () => {
    console.log("onBack");
  };

  const handleFinalValidate = () => {
    console.log("handleFinalValidate");
  };

  const trustLevelOption = getTrustLevel(entity.trustLevel);

  return (
    <Dialog
      title="Retrouver la croissance du volume d’inscrits"
      description="Vous pourrez la modifier à tout moment directement dans votre espace Mon Focus."
      open
      onClose={handleClose}
      withCloseButton
      contentClassName={classes.dialogContent}
      closeButtonPosition="start"
      css={classes.dialog}
      fullScreen
    >
      <Stack spacing={2}>
        {/* okrs */}
        <SummaryItem label="Objectifs">
          {entity.okrs.map((okr, index) => (
            <RoundedCard
              key={okr.objectId + index}
              title={okr.name}
              icon={<span css={{ lineHeight: 1 }}>{okr.icon}</span>}
            />
          ))}
        </SummaryItem>
        {/* okrs */}
        <SummaryItem label="Drivers">
          {entity.drivers.map((driver, index) => (
            <RoundedCard
              key={driver.driver.objectId + index}
              title={driver.driver.name}
              icon={<span css={{ lineHeight: 1 }}>{driver.driver.icon}</span>}
            />
          ))}
        </SummaryItem>
      </Stack>
    </Dialog>
  );
};

export default ProbllematicSummary;
