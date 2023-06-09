/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ISettingsTab } from "../../../types/app.type";
import Teams from "../../team/Teams";

const PADDING_Y = 9;
const classes = {
  header: {
    height: "calc(104px - 48px)",
    padding: 24
  },
  pageTitle: {
    fontWeight: 500,
    fontSize: 32,
    lineHeight: 1,
    color: "#000"
  },
  tabs: (theme: Theme) => ({
    height: `calc(72px - ${PADDING_Y}px)`,
    backgroundColor: "#fff",
    borderBottom: "1px solid " + theme.palette.grey[600]
    // overflowX: 'scroll',
  }),
  label: (theme: Theme) => ({
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1,
    color: theme.palette.grey[600],
    paddingTop: PADDING_Y,
    paddingBottom: PADDING_Y
  }),
  active: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: 100
  })
};

interface IOption {
  label: any;
  value: ISettingsTab;
}

const options: IOption[] = [
  {
    label: "Drivers",
    value: "drivers"
  },
  {
    label: "OKR",
    value: "okr"
  },
  {
    label: "Équipes",
    value: "teams"
  },
  {
    label: "Profils",
    value: "profiles"
  }
];

enum TABS {
  DRIVERS = "drivers",
  OKR = "okr",
  TEAMS = "teams",
  PROFILES = "profiles"
}

type Props = {
  goToTeamCreation: () => void;
}
const SettingsLayout = ({ goToTeamCreation }: Props) => {
  const [tab, setTab] = useState<ISettingsTab>(TABS.TEAMS);

  const onTabChange = (value: ISettingsTab) => {
    setTab(value);
  };

  return (
    <Box className="flexColumn spaceBetween flex1 stretchSelf">
      {/* --------- header ------- */}
      <Box
        css={classes.header}
        className="flexRow spaceBetween flexEnd stretchSelf"
      >
        <Typography variant="h3" css={classes.pageTitle}>
          Paramètres
        </Typography>
        <IconButton>
          <img alt="setting" src="/icons/app-setting.svg" />
        </IconButton>
      </Box>

      {/* ------ tabs ------ */}
      <div
        css={classes.tabs}
        className="flexRow center justifyCenter stretchSelf"
      >
        {options.map((option: IOption, index: number) => (
          <button
            className="transparentButton flex1"
            key={index}
            onClick={() => onTabChange(option.value)}
          >
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
      <div className="flexCenter flex1 stretchSelf">
        {tab === TABS.TEAMS && <Teams goToTeamCreation={goToTeamCreation} />}
      </div>
    </Box>
  );
};

export default SettingsLayout;
