/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import { ReactNode } from "react";

import Card, { CardProps } from "../Card";

const classes = {
  card: css({
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100,
    minHeight: 34
  }),
  content: css({
    paddingLeft: 8
  })
};

type Props = {
  icon?: ReactNode;
} & CardProps;

const RoundedCard = ({ icon, ...props }: Props) => {
  return (
    <Card
      {...props}
      centerClassName={classes.content}
      rootClassName={classes.card}
      withLeftDivider={false}
      left={icon ? <span className="lh1">{icon}</span> : props.left}
    />
  );
};

export default RoundedCard;
