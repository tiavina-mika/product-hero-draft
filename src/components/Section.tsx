/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};
const Section = ({ title, children, className, onClick }: Props) => {
  return (
    <Stack
      component="section"
      className={cx("stretchSelf flex1", className)}
      spacing={2.8}
    >
      <div className="flexRow spaceBetween center">
        <Typography variant="h3">{title}</Typography>
        {onClick && (
          <IconButton onClick={onClick}>
            <img alt="" src="/icons/superior.svg" />
          </IconButton>
        )}
      </div>
      {children}
    </Stack>
  );
};

export default Section;
