/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack, Theme, Typography, Card } from "@mui/material";
import { ISelectedOptionValue, ISelectOption } from "../../../types/app.type";

const classes = {
  card: (theme: Theme) => ({
    border: "1px solid " + theme.palette.grey[100],
    boxShadow: "0px 0px 8px rgba(31, 31, 31, 0.05)",
    borderRadius: 6,
    padding: "8px 12px",
    cursor: "pointer"
  }),
  active: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  })
};
type Props = {
  onChange?: (value: ISelectedOptionValue[]) => void;
  value?: ISelectedOptionValue[];
  options: ISelectOption[];
};

const CardCheckboxInput = ({ onChange, value = [], options = [] }: Props) => {
  const handleChange = (selectedValue: string): void => {
    onChange?.([selectedValue, ...value]);
  };

  return (
    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
      {options.map((option: ISelectOption, index: number) => (
        <Card
          key={option.value + index}
          onClick={() => handleChange(option.value)}
          css={[classes.card, value.includes(option.value) && classes.active]}
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            <span>{option.icon}</span>
            <Typography
              sx={{
                color: value.includes(option.value) ? "#fff" : "inherit"
              }}
            >
              {option.label}
            </Typography>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default CardCheckboxInput;
