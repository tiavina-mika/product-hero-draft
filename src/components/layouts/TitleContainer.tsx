/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { Theme } from "@emotion/react";
import { Box, Stack } from "@mui/material";

import { getAlignment } from "../../utils/utils";
import Description from "../typography/Description";
import Title from "../typography/Title";

const classes = {
  root: (alignment: "left" | "center" | "right") => (theme: Theme) => ({
    alignItems: getAlignment(alignment),
    [theme.breakpoints.up("md")]: {
      alignItems: "center"
    }
  })
};
type Props = {
  title: string;
  description: string;
  alignment?: "left" | "center" | "right";
};

const TitleContainer = ({
  title,
  description,
  alignment = "center"
}: Props) => {
  return (
    <Stack spacing={2} css={classes.root(alignment)}>
      <Title text={title} alignment={alignment} />
      <Box sx={{ width: 326 }}>
        <Description text={description} alignment={alignment} />
      </Box>
    </Stack>
  );
};

export default TitleContainer;
