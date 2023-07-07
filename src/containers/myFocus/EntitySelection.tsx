/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { IEntitySelectOption, IEntityType } from "../../types/entity.type";
import Card from "../../components/Card";
import { css } from "@emotion/css";

const selectOptions: IEntitySelectOption[] = [
  {
    icon: "problematic",
    label: "Problematique",
    value: "problematic"
  },
  {
    icon: "feature",
    label: "Fonctionnalité",
    value: "feature"
  },
  {
    icon: "user-story",
    label: "User story",
    value: "userStory"
  },
  {
    icon: "bug",
    label: "Bug",
    value: "bug"
  }
];

const classes = {
  card: css({
    minHeight: 80
  })
};
type Props = {
  onSelect: (type: IEntityType) => void;
};
const EntitySelection = ({ onSelect }: Props) => {
  const handleSelectEntityType = (type: IEntityType) => {
    onSelect(type);
  };

  return (
    <Grid container spacing={2} className="stretchSelf flex1">
      {selectOptions.map((option: IEntitySelectOption, index: number) => (
        <Grid xs={6} key={option.value + index}>
          <Card
            onClick={() => handleSelectEntityType(option.value)}
            className={classes.card}
            contentClassName="flexCenter"
            hasShadow
          >
            <Stack spacing={0.5}>
              <div className="flexCenter">
                <img
                  alt={option.label}
                  src={"/icons/" + option.icon + ".svg"}
                />
              </div>
              <Typography variant="h4">{option.label}</Typography>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EntitySelection;
