/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import {
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Slide
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactNode } from "react";
import { getVerticalAlignment } from "../utils/utils";
import { useBreakpoint } from "../hooks/useBreakpoint";

const classes = {
  dialogTitle: (theme: Theme) => ({
    fontFamily: "Product Sans Regular",
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.3,
    letterSpacing: "0.01em",
    color: theme.palette.grey[800],
    paddingBottom: 8,
    paddingLeft: 6
  }),
  content: {
    padding: "0px 6px 18px 6px"
  }
};

const getDialogBorderRadius = (alignment: "top" | "center" | "bottom") => {
  if (alignment === "top") {
    return "0 0 10px 10px";
  }

  if (alignment === "center") {
    return 10;
  }

  return "10px 10px 0 0";
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  children: ReactNode;
  actions?: ReactNode;
  title?: string;
  open: boolean;
  toggle: () => void;
  alignment?: "top" | "center" | "bottom";
  className?: string;
  maxWidth?: DialogProps["maxWidth"];
} & DialogProps;
const Dialog = ({
  className,
  open,
  toggle,
  children,
  actions,
  title,
  maxWidth = "sm",
  alignment = "bottom",
  ...dialogProps
}: Props) => {
  const isSmallScreen = useBreakpoint();
  return (
    <MUIDialog
      {...dialogProps}
      maxWidth={isSmallScreen ? "xl" : maxWidth}
      className={className}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggle}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiDialog-container": {
          alignItems: getVerticalAlignment(alignment)
        }
      }}
      PaperProps={{
        sx: {
          m: 0,
          borderRadius: getDialogBorderRadius(alignment),
          ...(isSmallScreen && dialogProps.fullWidth ? { width: "100%" } : {})
        }
      }}
    >
      {title && <DialogTitle css={classes.dialogTitle}>{title}</DialogTitle>}
      <DialogContent className="flexColumn stretch" css={classes.content}>
        {children}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MUIDialog>
  );
};

export default Dialog;
