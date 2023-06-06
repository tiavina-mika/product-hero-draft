/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReactNode, useState, MouseEvent, Fragment } from "react";
import { ISelectOption } from "../../../../types/app.type";
import { teamStatus } from "../../../../utils/team.utils";

const classes = {
  menu: (theme: Theme) => ({
    "& .MuiPaper-root": {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      marginTop: 17,
      marginLeft: -15
    },
    "& .MuiMenu-list": {
      padding: 0
    },
    "& .MuiMenuItem-root": {
      paddingTop: 12,
      paddingBottom: 12,
      border: "1px solid " + theme.palette.grey[100]
    }
  })
};

type Props = {
  children: ReactNode;
  onSelect: (value: ISelectOption) => void;
};
const SelectTeamStatusInput = ({ children, onSelect }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: ISelectOption) => {
    onSelect(value);
    handleClose();
  };

  return (
    <Fragment>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="transparentButton flex1 stretchSelf flexCenter"
        type="button"
      >
        {children}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        css={classes.menu}
      >
        {teamStatus.map((status: ISelectOption, index: number) => (
          <MenuItem
            key={status.label + index}
            onClick={() => handleSelect(status)}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <div className="flexCenter flex1 stretchSelf">
                <img alt="" src={"/icons/" + status.icon + ".svg"} />
              </div>
              <Typography>{status.label}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default SelectTeamStatusInput;
