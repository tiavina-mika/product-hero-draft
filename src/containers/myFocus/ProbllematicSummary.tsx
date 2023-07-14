/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";

import Dialog from "../../components/Dialog";
import { getTrustLevel } from "../../utils/entity.utils";
import SummaryItem from "./SummaryItem";
import RoundedCard from "../../components/card/RoundedCard";

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
      // rootClassName="positionRelative"
      // contentClassName={classes.root}
      open
      // css={classes.content}
      // textSpacing={1}
      // titleSpacing={1.5}
      // fullScreen
      onClose={handleClose}
      withCloseButton
      contentClassName={classes.dialogContent}
      closeButtonPosition="start"
      // fullWidth
      // maxWidth="xl"
      css={classes.dialog}
      fullScreen
    >
      <SummaryItem label="Objectifs">
        {entity.okrs.map((okr, index) => (
          <RoundedCard
            key={okr.objectId + index}
            title={okr.name}
            icon={<span css={{ lineHeight: 1 }}>{okr.icon}</span>}
          />
        ))}
      </SummaryItem>
    </Dialog>
  );
};

export default ProbllematicSummary;
