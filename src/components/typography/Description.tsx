/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  root: ({ alignment }: any) => (theme: Theme) => ({
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1.6,
    letterSpacing: "0.01em",
    color: theme.palette.grey[600],
    textAlign: alignment
  })
};

type Props = {
  text: string | ReactNode;
  alignment?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
  className?: string;
};

const Description = ({ text, alignment, sx, className }: Props) => {
  return (
    <Typography
      variant="body1"
      sx={sx}
      css={classes.root({ alignment })}
      className={className}
    >
      {text}
    </Typography>
  );
};

export default Description;
