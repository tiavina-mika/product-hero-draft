/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { Theme } from "@emotion/react";
import { Card as MUICard, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  root: (theme: Theme) => ({
    border: "1px solid " + theme.palette.grey[100],
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    bordeRadius: 6,
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
  right: (theme: Theme) => ({
    paddingLeft: 17,
    paddingRight: 17,
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
  }
};

type Props = {
  className?: string;
  rootClassName?: string;
  children?: ReactNode;
  content?: string;
  left?: ReactNode;
  right?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const Card = ({
  children,
  className,
  content,
  rootClassName,
  left,
  right,
  onClick,
  isActive = false
}: Props) => {
  return (
    <MUICard
      css={[classes.root, isActive && classes.active]}
      className={cx("flexColumn stretchSelf", rootClassName)}
      onClick={onClick}
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
        <div className="flexCenter flex1 stretchSelf">
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
            css={[classes.right, isActive && classes.active]}
          >
            {right}
          </div>
        )}
        {onClick && (
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
