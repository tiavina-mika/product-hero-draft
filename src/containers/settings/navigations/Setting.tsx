/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "../AddIcon";

const PADDING_Y = 9;
const classes = {
  top: (theme: Theme) => ({
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
  pageTitle: {
    fontWeight: 500,
    fontSize: 32,
    lineHeight: 1,
    color: "#000"
  }
};
type TabType = "drivers" | "okr" | "teams" | "profils";

interface IOption {
  url: string;
  label: any;
  value: TabType;
}

const options: IOption[] = [
  {
    url: "/drivers",
    label: "Drivers",
    value: "drivers"
  },
  {
    url: "/okr",
    label: "OKR",
    value: "okr"
  },
  {
    url: "/teamS",
    label: "Équipes",
    value: "teams"
  },
  {
    url: "/profils",
    label: "Profils",
    value: "profils"
  }
];

enum TABS {
  DRIVERS = "drivers",
  OKR = "okr",
  TEAMS = "teams",
  PROFILS = "profils"
}

const Setting = () => {
  const [tab, setTab] = useState<TabType>(TABS.TEAMS);

  const onTabChange = (value: TabType) => {
    setTab(value);
  };

  return (
    <Box className="flexColumn spaceBetween flex1 stretchSelf">
      {/* ------ top ------ */}
      <div
        css={classes.top}
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
        <div>
          <AddIcon onClick={() => {}} />
        </div>
      </div>
    </Box>
  );
};

export default Setting;
