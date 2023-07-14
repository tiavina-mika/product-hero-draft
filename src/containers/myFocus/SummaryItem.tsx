/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  label: {
    width: 80
  }
};

type Props = {
  label?: string;
  className?: string;
  children: ReactNode;
};
const SummaryItem = ({ label, className, children }: Props) => {
  return (
    <div className="flexRow center stretchSelf">
      {/* left */}
      <div css={classes.label}>
        <Typography sx={{ fontWeight: 400 }} variant="body2">
          {label}
        </Typography>
      </div>
      {/* right */}
      {(children as ReactNode[]).length > 1 ? (
        <Stack spacing={2.1} direction="row" className={className}>
          {children}
        </Stack>
      ) : (
        <div className={className}>{children}</div>
      )}
    </div>
  );
};

export default SummaryItem;
