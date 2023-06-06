/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReactNode, useState, MouseEvent, Fragment } from "react";
import { ISelectOption } from "../../../../types/app.type";
import { teamStatus } from "../../../../utils/team.utils";

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
      >
        {teamStatus.map((status: ISelectOption, index: number) => (
          <MenuItem
            key={status.label + index}
            onClick={() => handleSelect(status)}
          >
            <Stack direction="row" spacing={1}>
              <img alt="" src={"/icons/" + status.icon + ".svg"} />
              <span>{status.label}</span>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default SelectTeamStatusInput;