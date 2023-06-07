/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import { Card as MUICard, CardContent } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  // root: ({ alignment }: any) => (theme: Theme) => ({
  //   fontFamily: "ProductSans Regular",
  //   fontWeight: 400,
  //   fontSize: 12,
  //   lineHeight: 1.6,
  //   letterSpacing: "0.01em",
  //   color: theme.palette.grey[600],
  //   textAlign: alignment
  // })
  root: (theme: Theme) => ({
    border: "1px solid " + theme.palette.grey[100],
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    bordeRadius: 6,
    minHeight: 48
  }),
  content: {
    padding: "0px !important"
    // borderRight: '1px solid ' + theme.palette.grey[100],
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
  })
};

type Props = {
  className?: string;
  rootClassName?: string;
  children: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
  isActive?: boolean;
};

const Card = ({
  children,
  className,
  rootClassName,
  left,
  right,
  isActive = false
}: Props) => {
  return (
    <MUICard
      css={[classes.root, isActive && classes.active]}
      className={cx("flexColumn stretchSelf", rootClassName)}
    >
      <CardContent
        className={cx("flexRow flex1 justifyCenter stretchSelf", className)}
        css={classes.content}
      >
        {left && (
          <div
            className="flexCenter stretchSelf"
            css={[classes.left, isActive && classes.active]}
          >
            {left}
          </div>
        )}
        <div className="flexCenter flex1 stretchSelf">{children}</div>
        {right && (
          <div
            className="flexCenter stretchSelf"
            css={[classes.right, isActive && classes.active]}
          >
            {right}
          </div>
        )}
      </CardContent>
    </MUICard>
  );
};

export default Card;
