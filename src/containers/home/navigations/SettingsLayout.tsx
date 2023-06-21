/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { IAlert, ISettingsTab } from "../../../types/app.type";
import { IDriver } from "../../../types/driver.type";
import { ITeam } from "../../../types/team.type";
import TeamsTab from "../../team/TeamsTab";
import Drivers from "../../driver/Drivers";
import Okrs from "../../okr/Okrs";
import { SETTING_TABS } from "../../../utils/constants";
import { IOkr } from "../../../types/okr.type";

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
  }),
  content: {
    padding: 16
  }
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

type Props = {
  goToTeamCreation: () => void;
  goToDriverCreation: () => void;
  onTabChange: (tab: ISettingsTab) => void;
  teams: ITeam[];
  drivers: IDriver[];
  okrs: IOkr[];
  tab: ISettingsTab;
  onSelectDriver: (driver: IDriver) => void;
  alert?: IAlert;
  goToOkrCreation: () => void;
  onSelectOkr: (driver: IOkr) => void;
};
const SettingsLayout = ({
  goToDriverCreation,
  goToTeamCreation,
  teams,
  drivers,
  tab,
  onTabChange,
  onSelectDriver,
  alert,
  goToOkrCreation,
  okrs,
  onSelectOkr
}: Props) => {
  const handleTabChange = (value: ISettingsTab) => {
    onTabChange(value);
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
            onClick={() => handleTabChange(option.value)}
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
      <div className="flexColumn flex1 stretchSelf" css={classes.content}>
        {tab === SETTING_TABS.TEAMS && (
          <TeamsTab teams={teams} goToTeamCreation={goToTeamCreation} />
        )}
        {tab === SETTING_TABS.DRIVERS && (
          <Drivers
            drivers={drivers}
            goToDriverCreation={goToDriverCreation}
            onSelectDriver={onSelectDriver}
            alert={alert}
          />
        )}
        {tab === SETTING_TABS.OKR && (
          <Okrs
            okrs={okrs}
            goToOkrCreation={goToOkrCreation}
            onSelectOkr={onSelectOkr}
            alert={alert}
          />
        )}
      </div>
    </Box>
  );
};

export default SettingsLayout;
