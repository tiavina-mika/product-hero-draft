/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import SettingsLayout from "./navigations/SettingsLayout";

const classes = {
  top: {
    height: "calc(104px - 48px)",
    padding: 24
  },
  bottom: {
    boxShadow: "0px -4px 8px rgba(31, 31, 31, 0.05)",
    height: 78,
    backgroundColor: "#fff",
    paddingLeft: 40,
    paddingRight: 40
  },
  bottomContent: (theme: Theme) => ({
    [theme.breakpoints.up("sm")]: {
      width: 400
    },
    [theme.breakpoints.down("sm")]: {
      flex: 1
    }
  }),
  label: (theme: Theme) => ({
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 1,
    color: theme.palette.grey[600],
    marginTop: 2
  }),
  active: (theme: Theme) => ({
    color: theme.palette.primary.main
  }),
  pageTitle: {
    fontWeight: 500,
    fontSize: 32,
    lineHeight: 1,
    color: "#000"
  }
};

interface IOption {
  label: any;
  icon: ReactNode | string;
  value: IHomeTab;
}

const options: IOption[] = [
  {
    label: "Mon focus",
    icon: "user-activity",
    value: "userActivity"
  },
  {
    label: "Vues",
    icon: "roadmap",
    value: "roadmap"
  },
  {
    label: "Backlog",
    icon: "catalogue",
    value: "backlog"
  },
  {
    label: "Paramètres",
    icon: "setting",
    value: "settings"
  }
];

enum TABS {
  SETTINGS = "settings",
  ROADMAP = "roadmap",
  BACKLOG = "backlog",
  USER_ACTIVITY = "userActivity"
}

const HomeLayout = () => {
  const [tab, setTab] = useState<IHomeTab>(TABS.SETTINGS);

  const onTabChange = (value: IHomeTab) => {
    setTab(value);
  };

  return (
    <Box sx={{ minHeight: "100vh " }} className="flexColumn spaceBetween">
      {/* ------ top ------ */}
      <Box
        css={classes.top}
        className="flexRow spaceBetween flexEnd stretchSelf"
      >
        <Typography variant="h3" css={classes.pageTitle}>
          Paramètres
        </Typography>
        <IconButton>
          <img alt="setting" src="/icons/app-setting.svg" />
        </IconButton>
      </Box>

      {/* ------ center ------ */}
      <div className="flexColumn flex1 stretchSelf">
        {/* ------ tabs ------ */}
        {tab === TABS.SETTINGS && <SettingsLayout />}
      </div>

      {/* ------ bottom ------ */}
      <div
        css={classes.bottom}
        className="flexRow center justifyCenter stretchSelf"
      >
        <div className="flexRow spaceBetween" css={classes.bottomContent}>
          {options.map((option: IOption, index: number) => (
            <button
              className="transparentButton"
              onClick={() => onTabChange(option.value)}
              key={option.label + index}
            >
              <div key={option.label + index}>
                <img
                  alt={option.label}
                  src={`/icons/${option.icon}${
                    tab === option.value ? "-active" : ""
                  }.svg`}
                />
              </div>
              <Typography
                css={[
                  classes.label,
                  tab === option.value ? classes.active : null
                ]}
              >
                {option.label}
              </Typography>
            </button>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default HomeLayout;
