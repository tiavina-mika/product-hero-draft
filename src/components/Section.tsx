/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const Section = ({ title, children }: Props) => {
  return (
    <Stack component="section" className="stretchSelf flex1" spacing={2.8}>
      <Stack>
        <Typography variant="h3">{title}</Typography>
      </Stack>
      {children}
    </Stack>
  );
};

export default Section;
