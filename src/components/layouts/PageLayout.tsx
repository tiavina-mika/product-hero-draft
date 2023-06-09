/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { Theme } from "@emotion/react";
import { IconButton, Stack } from "@mui/material";
import { ReactNode } from "react";
import { getAlignment } from "../../utils/utils";

import Description from "../typography/Description";
import Title from "../typography/Title";
import TopIcon from "./TopIcon";

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
  imageContainer: (alignment: "left" | "center" | "right") => ({
    "& img": {
      width: "100%"
    },
    justifyContent: getAlignment(alignment)
  })
};

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  image?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  rootClassName?: string;
  className?: string;
  titleSpacing?: number;
  contentClassName?: string;
  imageContainerClassName?: string;
  onBack?: () => void;
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
  onBack,
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
        <Stack spacing={titleSpacing} css={classes.titleContainer(alignment)}>
          {onBack && (
            <IconButton onClick={onBack} sx={{ p: 0 }}>
              <TopIcon alignment="left" image="/icons/prev-arrow.svg" />
            </IconButton>
          )}
          {image && (
            <TopIcon
              alignment={alignment}
              image={image}
              css={imageContainerClassName}
            />
          )}
          {title && (
            <Title
              text={title}
              alignment={alignment}
              className={titleClassName}
            />
          )}
          {description && (
            <Description
              text={description}
              alignment={alignment}
              className={descriptionClassName}
            />
          )}
        </Stack>
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
