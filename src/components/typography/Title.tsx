/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  root: ({ alignment }: any) => ({
    textAlign: alignment
  })
};

type Props = {
  text: string | ReactNode;
  alignment?: "left" | "center" | "right";
  className?: string;
};

const Title = ({ text, alignment, className }: Props) => {
  return (
    <Typography
      variant="h2"
      className={className}
      css={classes.root({ alignment })}
    >
      {text}
    </Typography>
  );
};

export default Title;
