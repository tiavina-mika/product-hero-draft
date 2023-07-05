/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Dialog from "../../components/Dialog";
import ButtonsSwitch from "../../components/ButtonsSwitch";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { IEntitySelectOption, IEntityType } from "../../types/ennity.type";
import Card from "../../components/Card";
import { css } from "@emotion/css";
import { useState } from "react";

const options = [
  {
    label: "Roudoudou",
    value: "roudoudou"
  },
  {
    label: "+Produit",
    value: "product"
  }
];

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
  }),
  dialog: {
    "& .MuiDialog-paper": {
      padding: "28px 16px"
    }
  }
};
type Props = {
  open: boolean;
  onClose: () => void;
};
const EntitySelectionDialog = ({ open, onClose }: Props) => {
  const [
    selectedEntityType,
    setSelectedEntityType
  ] = useState<IEntityType | null>(null);

  const handleSelectWorkspace = () => {};
  const closeSelectEntityTypeDialog = () => setSelectedEntityType(null);

  const handleSelectEntityType = (type: IEntityType) => {
    setSelectedEntityType(type);
    onClose();
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="xl"
      withCloseButton={false}
      css={classes.dialog}
    >
      <Stack spacing={2} className="flexCenter stretchSelf flex1">
        <ButtonsSwitch
          onSelect={handleSelectWorkspace}
          options={options}
          className="stretchSelf"
          color="default"
        />
        <div className="stretchSelf flex1">
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
        </div>
      </Stack>
      <Dialog
        onClose={closeSelectEntityTypeDialog}
        open={selectedEntityType === "problematic"}
        fullWidth
        maxWidth="xl"
        withCloseButton
        closeButtonPosition="start"
      >
        xx
      </Dialog>
    </Dialog>
  );
};

export default EntitySelectionDialog;
