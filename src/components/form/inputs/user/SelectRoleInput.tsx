/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReactNode, useState, MouseEvent } from "react";

interface ISelectOption {
  icon?: ReactNode;
  label: string;
  value: any;
}
type Props = {
  children: ReactNode;
  options: ISelectOption[];
  onSelect: (value: ISelectOption) => void;
};
const SelectRoleInput = ({ children, options, onSelect }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: ISelectOption) => {
    handleClose();
    onSelect(value);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.label + index}
            onClick={() => handleSelect(option)}
          >
            <Stack direction="row">
              {option.icon} {option.label}
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SelectRoleInput;
