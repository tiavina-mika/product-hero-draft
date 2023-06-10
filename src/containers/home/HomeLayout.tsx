/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { IHomeTab } from "../../types/app.type";
import { ITeam } from "../../types/team.type";
import { HOME_TABS } from "../../utils/constants";
import SettingsLayout from "./navigations/SettingsLayout";
import MyFocusLayout from "./navigations/MyFocusLayout";
import MyFocus from "../myFocus/MyFocus";

const classes = {
  tabs: {
    boxShadow: "0px -4px 8px rgba(31, 31, 31, 0.05)",
    height: 78,
    backgroundColor: "#fff",
    paddingLeft: 40,
    paddingRight: 40
  },
  tabsContent: (theme: Theme) => ({
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
  })
};

interface IOption {
  label: any;
  icon: ReactNode | string;
  value: IHomeTab;
}

const options: IOption[] = [
  {
    label: "Mon focus",
    icon: "my-focus",
    value: "myFocus"
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

type Props = {
  onTabChange: (tab: IHomeTab) => void;
  goToTeamCreation: () => void;
  teams: ITeam[];
  tab: IHomeTab;
};
const HomeLayout = ({ tab, onTabChange, goToTeamCreation, teams }: Props) => {
  const handleTabChange = (value: IHomeTab) => {
    onTabChange(value);
  };

  return (
    <Box sx={{ minHeight: "100vh " }} className="flexColumn spaceBetween">
      {/* ------ content ------ */}
      <div className="flexColumn flex1 stretchSelf">
        {/* ------ tabs ------ */}
        {tab === HOME_TABS.SETTINGS && (
          <SettingsLayout teams={teams} goToTeamCreation={goToTeamCreation} />
        )}
        {tab === HOME_TABS.MY_FOCUS && (
          <MyFocusLayout>
            {/* simulate React Router outlet component */}
            <MyFocus />
          </MyFocusLayout>
        )}
      </div>

      {/* ------ tabs ------ */}
      <div
        css={classes.tabs}
        className="flexRow center justifyCenter stretchSelf"
      >
        <div className="flexRow spaceBetween" css={classes.tabsContent}>
          {options.map((option: IOption, index: number) => (
            <button
              className="transparentButton"
              onClick={() => handleTabChange(option.value)}
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
