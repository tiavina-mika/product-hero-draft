/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  label: {
    maxWidth: 80
  }
};

type Props = {
  label?: string;
  className?: string;
  children: ReactNode;
};
const SummaryItem = ({ label, className, children }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      className="stretchSelf"
      spacing={8.1}
    >
      {/* left */}
      <div css={classes.label}>
        <Typography>{label}</Typography>
      </div>
      {/* right */}
      <div className={className}>{children}</div>
    </Stack>
  );
};

export default SummaryItem;
