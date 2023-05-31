/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { Theme } from "@emotion/react";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  content: (theme: Theme) => ({
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      width: 400
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 500
    },
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      paddingLeft: 50,
      paddingRight: 50
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
        css={classes.content}
      >
        {children}
      </Stack>
    </div>
  );
};

export default FormLayout;
