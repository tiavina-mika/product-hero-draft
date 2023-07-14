/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";

import Card, { CardProps } from "../Card";

const classes = {
  buttonContainer: {
    paddingTop: 24,
    bottom: 0,
    left: "100%"
  },
  card: css({
    // paddingBottom: 24
    borderRadius: "100px !important",
    backgroundColor: "red !important"
  }),

  dialog: {
    paddingTop: 3
    // '& .MuiDialog-paper': {
    //   padding: '28px 16px',
    // },
  }
};

type Props = {} & CardProps;
const RoundedCard = ({ ...props }: Props) => {
  return (
    <Card {...props} rootClassName="red" className="blue" description="xx" />
  );
  // return <Card {...props} rootClassName={classes.card} />;
};

export default RoundedCard;
