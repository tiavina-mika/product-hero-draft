/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Dialog from "../../components/Dialog";
import ButtonsSwitch from "../../components/ButtonsSwitch";

const options = [
  {
    label: "Roudoudou",
    value: "roudoudou"
  },
  {
    label: "+produit",
    value: "product"
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
      // css={classes.dialog}
    >
      <div className="flexCenter stretchSelf flex1">
        <ButtonsSwitch
          onSelect={handleSelectWorkspace}
          // css={classes.switchRoot}
          options={options}
        />
      </div>
    </Dialog>
  );
};

export default EntitySelectionDialog;
