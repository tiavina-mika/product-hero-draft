/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import { Typography } from "@mui/material";
import { useState } from "react";
import { ISelectOption, ISelectedOptionValue } from "../types/app.type";

const classes = {
  root: (theme: Theme) => ({
    borderRadius: 100,
    backgroundColor: theme.palette.grey[100],
    padding: 4,
    height: 40
  }),
  activeButton: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main
  }),
  inactiveButton: {
    cursor: "pointer"
  },
  defaultButton: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: 100,
    border: "none"
  },
  activeLabel: {
    color: "#fff"
  }
};

type Props = {
  className?: string;
  buttonActiveClassname?: string;
  labelActiveClassname?: string;
  options: ISelectOption[];
  onSelect: (value: ISelectedOptionValue) => void;
};
const ButtonsSwitch = ({
  className,
  options,
  onSelect,
  buttonActiveClassname,
  labelActiveClassname
}: Props) => {
  const [checkedOption, setCheckedOption] = useState<ISelectedOptionValue>(
    options[0].value
  );

  const handleCheck = (value: ISelectedOptionValue) => {
    setCheckedOption(value);
    onSelect(value);
  };
  return (
    <div css={classes.root} className={cx("flexRow center", className)}>
      {options.map((option: ISelectOption, index: number) => (
        <button
          key={index}
          css={[
            classes.defaultButton,
            option.value === checkedOption
              ? classes.activeButton
              : classes.inactiveButton
          ]}
          className={cx("flex1 stretchSelf", buttonActiveClassname)}
          onClick={() => handleCheck(option.value)}
        >
          <Typography
            variant="body2"
            css={option.value === checkedOption ? classes.activeLabel : null}
            className={labelActiveClassname}
          >
            {option.label}
          </Typography>
        </button>
      ))}
    </div>
  );
};

export default ButtonsSwitch;
