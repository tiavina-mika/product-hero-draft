/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  bottom: {
    boxShadow: "0px -4px 8px rgba(31, 31, 31, 0.05)",
    // border: '1px solid rgba(31, 31, 31, 0.5)',
    height: 78,
    backgroundColor: "#fff",
    paddingLeft: 40,
    paddingRight: 40
  },
  bottomContent: (theme: Theme) => ({
    // [theme.breakpoints.up('sm')]: {
    //   width: 400,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   flex: 1
    // }
    [theme.breakpoints.up("sm")]: {
      flex: 1
    }
  }),
  label: (theme: Theme) => ({
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 1,
    color: theme.palette.grey[600],
    marginTop: 2
  })
};
interface IOption {
  url: string;
  label: any;
  icon: ReactNode | string;
}

const options: IOption[] = [
  {
    url: "/",
    label: "Mon focus",
    icon: "user-activity"
  },
  {
    url: "/",
    label: "Vues",
    icon: "roadmap"
  },
  {
    url: "/",
    label: "Backlog",
    icon: "catalogue"
  },
  {
    url: "/",
    label: "Vues",
    icon: "setting"
  }
];

const Settings = () => {
  return (
    <Box sx={{ minHeight: "100vh " }} className="flexColumn spaceBetween">
      <h1>Hello</h1>
      <div
        css={classes.bottom}
        className="flexRow center justifyCenter stretchSelf"
      >
        <div className="flexRow spaceBetween" css={classes.bottomContent}>
          {options.map((option: IOption, index: number) => (
            <button className="transparentButton">
              <div key={option.label + index}>
                <img
                  alt={option.label}
                  src={"/icons/" + option.icon + ".svg"}
                />
              </div>
              <Typography css={classes.label}>{option.label}</Typography>
            </button>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Settings;
