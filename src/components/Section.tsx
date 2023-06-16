/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};
const Section = ({ title, children, className }: Props) => {
  return (
    <Stack
      component="section"
      className={cx("stretchSelf flex1", className)}
      spacing={2.8}
    >
      <Stack>
        <Typography variant="h3">{title}</Typography>
      </Stack>
      {children}
    </Stack>
  );
};

export default Section;
