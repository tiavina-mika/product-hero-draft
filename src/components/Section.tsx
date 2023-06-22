/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
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
      spacing={2.2}
    >
      <div className="flexRow spaceBetween center">
        {/* ----- title ----- */}
        <Typography variant="h3" sx={{ fontFamily: "Product Sans Bold" }}>
          {title}
        </Typography>
        {/* ----- right icon ----- */}
        {onClick && (
          <IconButton onClick={onClick}>
            <img alt="" src="/icons/superior.svg" />
          </IconButton>
        )}
        {/* simulate the button height */}
        {!onClick && <Box sx={{ height: 27 }} />}
      </div>
      {children}
    </Stack>
  );
};

export default Section;
