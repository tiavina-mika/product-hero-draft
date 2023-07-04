/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Dialog from "../../components/Dialog";
import ButtonsSwitch from "../../components/ButtonsSwitch";
import { css } from "@emotion/css";

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
  activeButton: css({
    backgroundColor: "#fff"
  })
};
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
      <div className="flexCenter stretchSelf flex1">
        <ButtonsSwitch
          onSelect={handleSelectWorkspace}
          options={options}
          className="stretchSelf"
          // buttonActiveClassname={classes.activeButton}
          color="default"
        />
      </div>
    </Dialog>
  );
};

export default EntitySelectionDialog;
