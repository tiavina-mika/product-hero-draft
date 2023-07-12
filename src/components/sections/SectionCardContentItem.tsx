/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const classes = {
  title: (theme: Theme) => ({
    color: theme.palette.grey[800],
    lineHeight: 1,
    fontSize: 14
  })
};

type Props = {
  title: string;
  action?: ReactNode;
  titleClassName?: string;
  icon?: string;
};

const SectionCardContentItem = ({
  title,
  action,
  icon,
  titleClassName
}: Props) => {
  return (
    <div className="flexRow spaceBetween center">
      <Stack direction="row" spacing={1.2} alignItems="center">
        {/* ----- title ----- */}
        {icon && (
          <div>
            <img alt="" src={icon} />
          </div>
        )}
        <Typography className={titleClassName} css={classes.title}>
          {title}
        </Typography>
      </Stack>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionCardContentItem;
