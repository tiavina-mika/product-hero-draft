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
  root: (alignment: IAlignment, fullWidth = false, fullScreen = false) => (
    theme: Theme
  ) => ({
    "& .MuiDialog-container": {
      alignItems: getVerticalAlignment(alignment)
    },
    "& .MuiDialog-paper": {
      margin: 0,
      borderRadius: getDialogBorderRadius(alignment),
      ...(fullScreen ? { height: "100vh", borderRadius: 0 } : {}),
      ...(fullWidth || fullScreen ? { width: "100%" } : {})
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
  maxWidth?: DialogProps["maxWidth"];
  sxPaper?: SxProps<MUITheme>;
  formId?: string;
  description?: string;
  contentContainerClassName?: string;
  contentClassName?: string;
  loading?: boolean;
  withCloseButton?: boolean;
  fullScreen?: boolean;
  closeButtonPosition?: "end" | "start";
} & DialogProps;

const Dialog = ({
  className,
  contentContainerClassName,
  contentClassName,
  open,
  onClose,
  children,
  actions,
  title,
  sxPaper,
  formId,
  loading,
  description,
  withCloseButton = true,
  fullScreen = false,
  maxWidth = "sm",
  alignment = "bottom",
  closeButtonPosition = "end",
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
      // use dialog fullScreen in large screen instead of the style
      fullScreen={!isSmallScreen && fullScreen}
      aria-describedby="alert-dialog-slide-description"
      css={classes.root(
        alignment,
        dialogProps.fullWidth,
        // use style for full screen in mobile
        isSmallScreen && fullScreen
      )}
    >
      {withCloseButton && (
        <div
          className={cx(
            "flexRow",
            closeButtonPosition === "end" ? "justifyEnd" : "justifyStart"
          )}
          css={classes.closeButtonContainer}
        >
          <IconButton aria-label="close" onClick={onClose} className="endSelf">
            <img alt="close" src="/icons/close.svg" />
          </IconButton>
        </div>
      )}
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

      <DialogContent
        className={cx(
          "flexColumn stretch",
          className,
          contentContainerClassName
        )}
      >
        {description && (
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
        )}
        <div className={contentClassName}>{children}</div>
      </DialogContent>

      {/* actions, mainly buttons */}
      {actions && <DialogActions>{actions}</DialogActions>}

      {/* actions for form (the formId should the form formId) */}
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
