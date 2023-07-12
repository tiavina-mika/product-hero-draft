/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { css } from "@emotion/css";

import Dialog from "../../components/Dialog";
import SectionCard from "../../components/sections/SectionCard";
import SectionCardContentItem from "../../components/sections/SectionCardContentItem";
import AvatarWithIcon from "../../components/user/AvatarWithIcon";
import { getTrustLevel } from "../../utils/entity.utils";
import { ReactNode } from "react";

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
  label: {
    maxWidth: 80
  },
  dialogContent: css({
    // paddingBottom: 24
    marginTop: 61
  }),

  dialog: {
    paddingTop: 3
    // '& .MuiDialog-paper': {
    //   padding: '28px 16px',
    // },
  }
};

type Props = {
  label?: string;
  children: ReactNode;
};
const SummaryItem = ({ label, children }: Props) => {
  return (
    <div className="flexRow stretchSelf">
      <div css={classes.label}>
        <Typography>{label}</Typography>
      </div>
      <div className="flex1">{children}</div>
    </div>
  );
};

export default SummaryItem;
