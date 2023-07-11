/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { css, cx } from "@emotion/css";
import { jsx, Theme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import Card from "../Card";

const classes = {
  card: css({
    padding: 0,
    minHeight: "initial"
  }),
  cardContent: {
    padding: "14px 3px 13px 3px !important"
  },
  title: (theme: Theme) => ({
    color: theme.palette.grey[600],
    lineHeight: 1.6,
    letterSpacing: 0.1
  }),
  description: (theme: Theme) => ({
    color: theme.palette.grey[800],
    fontSize: 14,
    lineHeight: 1.57
  })
};

type Props = {
  title: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  description?: string;
  spacing?: number;
};

const SectionCard = ({
  title,
  children,
  className,
  description,
  titleClassName,
  spacing = 1.7
}: Props) => {
  return (
    <Card
      className={className}
      rootClassName={classes.card}
      css={classes.cardContent}
    >
      <Stack spacing={1.4}>
        <Stack spacing={2}>
          {/* ----- title ----- */}
          <Typography
            className={cx(titleClassName, "textUpperCase")}
            variant="h6"
            css={classes.title}
          >
            {title}
          </Typography>
          {description && (
            <div>
              <Typography css={classes.description}>{description}</Typography>
            </div>
          )}
        </Stack>
        {children && <Stack spacing={spacing}>{children}</Stack>}
      </Stack>
    </Card>
  );
};

export default SectionCard;
