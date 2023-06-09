/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import { Typography } from "@mui/material";

const classes = {
  root: ({ alignment }: any) => (theme: Theme) => ({
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.3,
    letterSpacing: "0.01em",
    color: theme.palette.grey[800],
    textAlign: alignment
  })
};

type Props = {
  text: string;
  alignment?: "left" | "center" | "right";
  className?: string;
};

const Title = ({ text, alignment, className }: Props) => {
  return (
    <Typography
      variant="h1"
      className={className}
      css={classes.root({ alignment })}
    >
      {text}
    </Typography>
  );
};

export default Title;
