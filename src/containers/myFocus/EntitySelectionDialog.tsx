/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Dialog from "../../components/Dialog";
import ButtonsSwitch from "../../components/ButtonsSwitch";
import { Grid, Stack, Typography } from "@mui/material";
import { ISelectOption } from "../../types/app.type";
import Card from "../../components/Card";

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

const selectOptions = [
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

type Props = {
  open: boolean;
  onClose: () => void;
};
const EntitySelectionDialog = ({ open, onClose }: Props) => {
  const handleSelectWorkspace = () => {};

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="xl"
      withCloseButton={false}
      // css={classes.dialog}
    >
      <Stack spacing={0.01} className="flexCenter stretchSelf flex1">
        <ButtonsSwitch
          onSelect={handleSelectWorkspace}
          options={options}
          className="stretchSelf"
          // buttonActiveClassname={classes.activeButton}
          color="default"
        />
        <Grid container spacing={2}>
          {selectOptions.map((option: ISelectOption, index: number) => (
            <Grid item xs={6} key={option.value + index}>
              <Card className="flexCenter" hasShadow>
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
      </Stack>
    </Dialog>
  );
};

export default EntitySelectionDialog;
