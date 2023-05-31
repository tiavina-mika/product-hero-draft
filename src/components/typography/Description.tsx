/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Theme } from "@emotion/react";
import { createStyles, SxProps, Typography } from "@mui/material";

type Props = {
  text: string;
  alignment?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
};

const classes2 = {
  root: ({ alignment }: any) => (theme: Theme) => ({
    [theme.breakpoints.up("md")]: {
      textAlign: "center"
    },
    fontSize: 14,
    lineHeight: 1.8,
    letterSpacing: "0.01em",
    color: theme.palette.grey[800],
    textAlign: alignment
  })
};
const classes = {
  root: {
    fontSize: 14,
    lineHeight: 1.8,
    letterSpacing: "0.01em",
    color: "red",
    textAlign: "center"
  }
};

const Description = ({ text, alignment, sx }: Props) => {
  return (
    <Typography variant="body1" sx={sx} css={classes.root}>
      {text}
    </Typography>
  );
};

export default Description;
