/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const MyFocusLayout = ({ children }: Props) => {
  return (
    <Box className="flexColumn spaceBetween flex1 stretchSelf">
      {/* --------- header ------- */}
      <div>
        {/* simulate React Router outlet component */}
        {children}
      </div>
    </Box>
  );
};

export default MyFocusLayout;
