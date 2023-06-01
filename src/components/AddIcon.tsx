/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Fab } from "@mui/material";
import MUIAddIcon from "@mui/icons-material/Add";

type Props = {
  onClick: () => void;
};
const AddIcon = ({ onClick }: Props) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "absolute", bottom: 94, right: 24 }}
      onClick={onClick}
    >
      <MUIAddIcon />
    </Fab>
  );
};

export default AddIcon;
