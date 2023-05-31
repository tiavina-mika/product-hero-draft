/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { Theme } from "@emotion/react";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  root: (theme: Theme) => ({
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      width: 400
    }
  })
};

type Props = {
  children: ReactNode;
};

const FormLayout = ({ children }: Props) => {
  return (
    <div className="flexRow justifyCenter">
      <Stack
        spacing={8}
        alignItems="center"
        justifyContent="center"
        css={classes.root}
      >
        {children}
      </Stack>
    </div>
  );
};

export default FormLayout;
