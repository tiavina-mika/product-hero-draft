/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import { Box, Stack } from "@mui/material";
import AddIcon from "../../components/AddIcon";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import { IAlert } from "../../types/app.type";
import { IOkr } from "../../types/okr.type";

const classes = {
  card: css({
    padding: "16px 0px !important"
  }),
  cardDescription: css({
    maxWidth: 400
  })
};

type Props = {
  goToOkrCreation: () => void;
  okrs: IOkr[];
  onSelectOkr: (okr: IOkr) => void;
  alert?: IAlert;
};
const Okrs = ({ alert, goToOkrCreation, okrs, onSelectOkr }: Props) => {
  return (
    <div className="flexColumn stretchSelf">
      {alert && alert.type === "okr" && (
        <Box className="stretchSelf" sx={{ mb: 2.05 }}>
          <Alert severity="success" />
        </Box>
      )}
      <Stack spacing={2} alignSelf="stretch">
        {okrs?.map((okr: IOkr, index: number) => (
          <Card
            key={okr.name + index}
            left={okr.icon}
            onClick={() => onSelectOkr(okr)}
            title={okr.name}
            rootClassName={classes.card}
            descriptionClassName={classes.cardDescription}
            withArrow={false}
            right={<img alt="" src="/icons/chevron-down.svg" />}
            withRightDivider={false}
          />
        ))}
      </Stack>
      <AddIcon onClick={goToOkrCreation} />
    </div>
  );
};

export default Okrs;
