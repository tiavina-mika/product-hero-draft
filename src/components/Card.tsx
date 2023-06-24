/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { Theme } from "@emotion/react";
import { Card as MUICard, CardContent, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  root: (theme: Theme) => ({
    border: "1px solid " + theme.palette.grey[100],
    borderRadius: 6,
    minHeight: 48
  }),
  rootWithDescription: {
    minHeight: 68
  },
  rootWithLabel: {
    overflow: "initial"
  },
  content: {
    padding: "0px !important"
  },
  labelContainer: {
    top: -5,
    left: 10
  },
  label: (theme: Theme) => ({
    color: theme.palette.grey[800]
  }),
  left: (theme: Theme) => ({
    paddingLeft: 17,
    paddingRight: 17,
    borderRight: "1px solid " + theme.palette.grey[100]
  }),
  active: (theme: Theme) => ({
    borderColor: theme.palette.warning.main,
    backgroundColor: theme.palette.warning.light
  }),
  center: {
    paddingLeft: 14,
    paddingRight: 14
  },
  right: {
    paddingLeft: 17,
    paddingRight: 17
  },
  withRightDivider: (theme: Theme) => ({
    borderLeft: "1px solid " + theme.palette.grey[100]
  }),
  rightArrow: {
    border: "none"
  },
  typography: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1
  },
  shadow: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)"
  }
};

type Props = {
  className?: string;
  rootClassName?: string;
  children?: ReactNode;
  content?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  left?: ReactNode;
  right?: ReactNode;
  isActive?: boolean;
  withArrow?: boolean;
  withRightDivider?: boolean;
  onClick?: () => void;
  contentClassName?: string;
  rightClassName?: string;
  titleTextClassName?: string;
  hasShadow?: boolean;
  description?: string;
  title?: string;
  label?: string;
};

const Card = ({
  children,
  className,
  content,
  rootClassName,
  left,
  right,
  onClick,
  contentClassName,
  descriptionClassName,
  rightClassName,
  titleClassName,
  description,
  titleTextClassName,
  title,
  label,
  withArrow = false,
  isActive = false,
  hasShadow = false,
  withRightDivider = true
}: Props) => {
  return (
    <MUICard
      css={[
        classes.root,
        isActive && classes.active,
        hasShadow && classes.shadow,
        label && classes.rootWithLabel,
        description && classes.rootWithDescription
      ]}
      className={cx(
        "flexColumn stretchSelf positionRelative",
        rootClassName,
        onClick ? "cursorPointer" : ""
      )}
      onClick={onClick}
      elevation={0}
    >
      {/* ---------- label ---------- */}
      {label && (
        <div css={classes.labelContainer} className="positionAbsolute">
          <Typography css={classes.label} variant="body2">
            {label}
          </Typography>
        </div>
      )}
      {/* ---------- body ---------- */}
      <CardContent
        className={cx("flexRow flex1 justifyCenter stretchSelf", className)}
        css={classes.content}
      >
        {/* ----- left ----- */}
        {left && (
          <div
            className="flexCenter stretchSelf"
            css={[classes.left, isActive && classes.active]}
          >
            {left}
          </div>
        )}
        {/* ----- center ----- */}
        <div
          className={cx("flex1 centerSelf", contentClassName)}
          css={classes.center}
        >
          {/* ------- title & description ------- */}
          {(title || description) && (
            <Stack spacing={0.22}>
              <div className={titleClassName}>
                {title && (
                  <Typography variant="h4" className={titleTextClassName}>
                    {title}
                  </Typography>
                )}
              </div>
              <div className={descriptionClassName}>
                {description && (
                  <Typography variant="body1" sx={{ lineHeight: 0.8 }}>
                    {description}
                  </Typography>
                )}
              </div>
            </Stack>
          )}
          {/* text content */}
          {content && (
            <Typography css={classes.typography} alignSelf="flex-start">
              {content}
            </Typography>
          )}
          {/* component content */}
          {children}
        </div>
        {/* ----- right ----- */}
        {right && (
          <div
            className={cx("flexCenter stretchSelf", rightClassName)}
            css={[
              classes.right,
              isActive && classes.active,
              withRightDivider && classes.withRightDivider
            ]}
          >
            {right}
          </div>
        )}
        {onClick && withArrow && (
          <div
            className="flexCenter stretchSelf"
            css={[classes.right, classes.rightArrow]}
          >
            <img alt="" src="/icons/superior.svg" />
          </div>
        )}
      </CardContent>
    </MUICard>
  );
};

export default Card;
