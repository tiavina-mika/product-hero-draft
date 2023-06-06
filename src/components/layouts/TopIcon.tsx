/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { getAlignment } from "../../utils/utils";

const classes = {
  imageContainer: (alignment: "left" | "center" | "right") => ({
    "& img": {
      width: "100%"
    },
    justifyContent: getAlignment(alignment)
  })
};

type Props = {
  alignment?: "left" | "center" | "right";
  image?: string;
  className?: string;
};

const TopIcon = ({ image, className, alignment = "left" }: Props) => {
  return (
    <div
      className={cx("flexRow", className)}
      css={classes.imageContainer(alignment)}
    >
      <img src={image} alt="" />
    </div>
  );
};

export default TopIcon;
