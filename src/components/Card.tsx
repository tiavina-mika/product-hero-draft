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
  content: {
    padding: "0px !important"
  },
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
  hasShadow?: boolean;
  description?: string;
  title?: string;
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
  titleClassName,
  description,
  title,
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
        hasShadow && classes.shadow
      ]}
      className={cx("flexColumn stretchSelf", rootClassName)}
      onClick={onClick}
      elevation={0}
    >
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
            <Stack spacing={0.3}>
              <div className={titleClassName}>
                {title && <Typography variant="h4">{title}</Typography>}
              </div>
              <div className={descriptionClassName}>
                {description && (
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
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
            className="flexCenter stretchSelf"
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
            <img alt="" src="/icons/input.svg" />
          </div>
        )}
      </CardContent>
    </MUICard>
  );
};

export default Card;
