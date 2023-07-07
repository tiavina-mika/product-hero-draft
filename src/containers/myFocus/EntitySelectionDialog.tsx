/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Dialog from "../../components/Dialog";
import ButtonsSwitch from "../../components/ButtonsSwitch";
import { Stack } from "@mui/material";

import { IEntityType } from "../../types/entity.type";
import EntitySelection from "./EntitySelection";
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

const classes = {
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
          <EntitySelection onSelect={handleSelectEntityType} />
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
