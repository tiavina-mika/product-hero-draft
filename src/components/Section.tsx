/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { getAlignment } from "../utils/utils";

const classes = {
  titleContainer: (alignment: "left" | "center" | "right") => ({
    justifyContent: !alignment ? "flex-start" : getAlignment(alignment)
  })
};
type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  onClick?: () => void;
  alignment?: "left" | "center" | "right";
};
const Section = ({
  alignment,
  title,
  children,
  className,
  onClick,
  titleClassName
}: Props) => {
  return (
    <Stack
      component="section"
      className={cx("stretchSelf flex1", className)}
      spacing={2.2}
    >
      <div
        className={cx("flexRow center", onClick && "spaceBetween")}
        css={classes.titleContainer(alignment)}
      >
        {/* ----- title ----- */}
        <Typography
          className={titleClassName}
          variant="h3"
          sx={{ fontFamily: "Product Sans Bold" }}
        >
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
