/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Typography } from "@mui/material";
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
    <div
      // direction="row"
      // alignItems="center"
      className="flexRow center stretchSelf"
      // spacing={8.1}
    >
      {/* left */}
      <div css={classes.label}>
        <Typography variant="body2">{label}</Typography>
      </div>
      {/* right */}
      <div className={className}>{children}</div>
    </div>
  );
};

export default SummaryItem;
