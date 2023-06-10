/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { css } from "@emotion/css";
import { Stack, Typography } from "@mui/material";

import SelectTeamStatusInput from "./SelectTeamStatusInput";
import { ISelectOption } from "../../../../types/app.type";
import UserAvatar from "../../../UserAvatar";
import { getTeamStatusIcon } from "../../../../utils/team.utils";
import { getUserFullName } from "../../../../utils/user.utils";
import { IUser } from "../../../../types/user.type";
import Card from "../../../Card";

const classes = {
  name: (theme: Theme) => ({
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1,
    color: theme.palette.grey[800]
  }),
  role: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 1,
    color: "#A0A0A0"
  },
  left: {
    padding: "5px 14px"
  },
  button: {
    cursor: "pointer"
  },
  selectedDivider: (theme: Theme) => ({
    background: theme.palette.warning.main
  }),
  cardRoot: css({
    borderRadius: 6,
    paddingTop: 6,
    paddingBottom: 6
  }),
  cardContent: {
    paddingTop: "4px !important",
    paddingBottom: "4px !important"
  }
};

type Props = {
  onDelete?: (id: string) => void;
  onTeamStatusSelect?: (type: ISelectOption) => void;
  isLeaderSelected?: boolean;
  type?: string;
  team: IUser;
  isCard?: boolean;
};

const Member = ({
  team,
  onDelete,
  onTeamStatusSelect,
  type,
  isLeaderSelected = false,
  isCard = false
}: Props) => {
  const handleDelete = (id: string) => {
    onDelete?.(id);
  };

  const handleSelectTeamType = (type: ISelectOption) => {
    onTeamStatusSelect?.(type);
  };

  const left = (
    <SelectTeamStatusInput onSelect={handleSelectTeamType}>
      {type ? (
        <div className="flexCenter stretchSelf flex1">
          <img alt="" src={"/icons/" + getTeamStatusIcon(type) + ".svg"} />
        </div>
      ) : (
        <UserAvatar user={team} />
      )}
    </SelectTeamStatusInput>
  );

  const right = (
    <button
      css={classes.button}
      className="flexCenter stretchSelf transparentButton"
      onClick={() => handleDelete(team.objectId)}
    >
      <img alt="minus" src="/icons/minus.svg" />
    </button>
  );

  return (
    <Card
      css={!isCard ? classes.cardContent : undefined}
      rootClassName={!isCard ? classes.cardRoot : undefined}
      right={right}
      left={left}
      isActive={isLeaderSelected}
    >
      {/* ----------- center ----------- */}
      <div className="flex1">
        <Stack spacing={1}>
          <Typography variant="h3" css={classes.name}>
            {getUserFullName(team)}
          </Typography>
          {team.role && (
            <Typography css={classes.role}>
              {(team.role as any).name}
            </Typography>
          )}
        </Stack>
      </div>
    </Card>
  );
};

export default Member;
