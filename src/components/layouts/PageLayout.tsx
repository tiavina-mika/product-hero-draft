/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { Theme } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { getAlignment } from "../../utils/utils";

import TopIcon from "./TopIcon";
import { LAYOUT_CONTENT_PADDING_X } from "../../utils/constants";

const classes = {
  pageLayoutRoot: {
    height: "100svh"
  },
  pageLayoutContent: (theme: Theme) => ({
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 32,
    paddingRight: 32,
    [theme.breakpoints.up("md")]: {
      width: 400
    },
    [theme.breakpoints.down("sm")]: {
      flex: 1
    }
  }),
  titleContainer: (alignment: "left" | "center" | "right") => ({
    alignItems: getAlignment(alignment)
  }),
  title: ({ alignment }: any) => ({
    textAlign: alignment
  }),
  description: ({ alignment }: any) => ({
    lineHeight: 1.6,
    letterSpacing: "0.01em",
    textAlign: alignment
  }),
  imageContainer: (alignment: "left" | "center" | "right") => ({
    "& img": {
      width: "100%"
    },
    justifyContent: getAlignment(alignment)
  }),
  divider: (theme: Theme) => ({
    height: 1,
    backgroundColor: theme.palette.grey[100],
    position: "absolute" as "absolute",
    left: -LAYOUT_CONTENT_PADDING_X /* this override the parent pagging */,
    right: -LAYOUT_CONTENT_PADDING_X /* this override the parent pagging */,
    top: 34
  })
};

type Props = {
  children?: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  alignment?: "left" | "center" | "right";
  image?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  rootClassName?: string;
  className?: string;
  titleSpacing?: number;
  contentClassName?: string;
  textSpacing?: number;
  imageContainerClassName?: string;
  onBack?: () => void;
  onSearch?: () => void;
  withHeaderDivider?: boolean;
};

const PageLayout = ({
  children,
  title,
  description,
  image,
  descriptionClassName,
  titleClassName,
  rootClassName,
  contentClassName,
  imageContainerClassName,
  className,
  textSpacing,
  onBack,
  onSearch,
  withHeaderDivider = false,
  alignment = "left",
  titleSpacing = 3
}: Props) => {
  return (
    <div
      className={cx("flexRow justifyCenter", rootClassName)}
      css={classes.pageLayoutRoot}
    >
      <div
        className={cx("flexCenter stretchSelf", contentClassName)}
        css={classes.pageLayoutContent}
      >
        <Stack
          className="stretchSelf"
          spacing={titleSpacing}
          css={classes.titleContainer(alignment)}
        >
          {/* actions */}
          <div className="stretchSelf flexRow spaceBetween">
            {onBack && (
              <IconButton onClick={onBack} sx={{ p: 0 }}>
                <TopIcon alignment="left" image="/icons/prev-arrow.svg" />
              </IconButton>
            )}
            {onSearch && (
              <IconButton onClick={onSearch} sx={{ p: 0 }}>
                <TopIcon alignment="right" image="/icons/search.svg" />
              </IconButton>
            )}
          </div>
          {/* image */}
          {image && (
            <TopIcon
              alignment={alignment}
              image={image}
              css={imageContainerClassName}
            />
          )}
          {/* title & description */}
          <Stack
            className="stretchSelf flexColumn positionRelative"
            spacing={textSpacing}
            css={classes.titleContainer(alignment)}
          >
            {title && (
              <div className="stretchSelf">
                <Typography
                  variant="h2"
                  className={cx(titleClassName, "fw700")}
                  css={classes.title({ alignment })}
                >
                  {title}
                </Typography>
              </div>
            )}
            {description && (
              <div className="stretchSelf">
                <Typography
                  variant="h4"
                  css={classes.description({ alignment })}
                  className={descriptionClassName}
                >
                  {description}
                </Typography>
              </div>
            )}
            {withHeaderDivider && <div css={classes.divider} />}
          </Stack>
        </Stack>
        {/* content */}
        {children && (
          <div className={cx("flex1 stretchSelf flexColumn", className)}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageLayout;
