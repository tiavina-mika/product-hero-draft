/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import {
  Button,
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  IconButton,
  Slide,
  SxProps,
  Theme as MUITheme
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactNode } from "react";
import { getVerticalAlignment } from "../utils/utils";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { cx } from "@emotion/css";
import { RESPONSIVE_BREAKPOINT } from "../utils/constants";

type IAlignment = "top" | "center" | "bottom";
const getDialogBorderRadius = (alignment: IAlignment) => {
  if (alignment === "top") {
    return "0 0 10px 10px";
  }

  if (alignment === "center") {
    return 10;
  }

  return "10px 10px 0 0";
};

const classes = {
  root: (alignment: IAlignment, fullWidth = false) => (theme: Theme) => ({
    "& .MuiDialog-container": {
      alignItems: getVerticalAlignment(alignment)
    },
    "& .MuiDialog-paper": {
      margin: 0,
      borderRadius: getDialogBorderRadius(alignment),
      [theme.breakpoints.down(RESPONSIVE_BREAKPOINT)]: {
        ...(fullWidth ? { width: "100%" } : {})
      }
    }
  }),
  titleContainer: {
    paddingLeft: 32,
    paddingRight: 32
  },
  titleContainerWithDescription: {
    marginBottom: 17
  },
  closeButtonContainer: {
    marginBottom: 2,
    paddingLeft: 32,
    paddingRight: 32
  }
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
  onClose: () => void;
  alignment?: IAlignment;
  className?: string;
  rootClassName?: string;
  maxWidth?: DialogProps["maxWidth"];
  sxPaper?: SxProps<MUITheme>;
  formId?: string;
  description?: string;
  loading?: boolean;
} & DialogProps;

const Dialog = ({
  rootClassName,
  className,
  open,
  onClose,
  children,
  actions,
  title,
  sxPaper,
  formId,
  loading,
  description,
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
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      css={classes.root(alignment, dialogProps.fullWidth)}
    >
      <div className="flexRow justifyEnd" css={classes.closeButtonContainer}>
        <IconButton aria-label="close" onClick={onClose} className="endSelf">
          <img alt="close" src="/icons/close.svg" />
        </IconButton>
      </div>
      {title && (
        <div
          css={[
            classes.titleContainer,
            !description && classes.titleContainerWithDescription
          ]}
        >
          <DialogTitle>{title}</DialogTitle>
        </div>
      )}
      <DialogContent className={cx("flexColumn stretch", className)}>
        {description && (
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
      {formId && (
        <DialogActions>
          <Button type="submit" variant="contained" fullWidth form={formId}>
            {loading ? "..." : "Enregistrer"}
          </Button>
        </DialogActions>
      )}
    </MUIDialog>
  );
};

export default Dialog;
