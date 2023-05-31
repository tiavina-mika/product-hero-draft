/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";

type Props = {
  text: string;
  alignment?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
};

const classes = {
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

const Description = ({ text, alignment, sx }: Props) => {
  return (
    // @ts-ignore
    <Typography variant="body1" sx={sx} css={classes.root({ alignment })}>
      {text}
    </Typography>
  );
};

export default Description;
