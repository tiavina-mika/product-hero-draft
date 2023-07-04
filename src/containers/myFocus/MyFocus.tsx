/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Theme } from "@emotion/react";
import { css } from "@emotion/css";
import { Typography } from "@mui/material";

const classes = {
  // title
  title: {
    padding: "16px 24px 24px"
  },
  titleText: {
    fontSize: 26,
    fontFamily: "Product Sans Medium"
  },
  // tab
  tab: {
    padding: "0 16px 16px"
  },
  tabContent: (theme: Theme) => ({
    padding: 4,
    background: theme.palette.grey[100],
    borderRadius: 100,
    border: `0.50px ${theme.palette.grey[100]} solid`
  }),
  firstTab: (theme: Theme) => ({
    padding: "14px 16px",
    background: theme.palette.grey[50],
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: 100
  }),
  textFirstTab: {
    fontWeight: "700",
    letterSpacing: 0.12
  },
  secondTab: (theme: Theme) => ({
    padding: "14px 16px",
    background: theme.palette.grey[100],
    borderRadius: 100
  }),
  textSecondTab: (theme: Theme) => ({
    color: theme.palette.grey[600],
    letterSpacing: 0.12
  }),
  // card
  card: (theme: Theme) => ({
    padding: 16,
    borderBottom: `0.50px ${theme.palette.grey[100]} solid`
  }),
  boxPriorisation: {
    padding: "6px 8px",
    borderRadius: 100
  },
  textPriorisation: (theme: Theme) => ({
    color: theme.palette.grey[50],
    fontFamily: "Product Sans Medium",
    fontWeight: "500"
  }),
  boxIconPriorisation: css({
    width: 10,
    height: 10,
    position: "relative"
  }),
  iconPriorisationFirst: css({
    width: 10.83,
    height: 4.47,
    position: "absolute",
    left: -0.42,
    top: -0.42,
    background: "white"
  }),
  iconPriorisationSecond: css({
    width: 10.83,
    height: 4.47,
    position: "absolute",
    left: -0.42,
    top: 2.77,
    background: "rgba(255, 255, 255, 0.60)"
  }),
  iconPriorisationThird: css({
    width: 10.83,
    height: 4.47,
    position: "absolute",
    left: -0.42,
    top: 5.95,
    background: "rgba(255, 255, 255, 0.30)"
  }),
  tagWorkflow: (theme: Theme) => ({
    background: theme.palette.info.light,
    borderRadius: 100,
    padding: "6px 8px"
  }),
  textTagWorkflow: {
    color: "#37ACB7"
  },
  tagOutline: (theme: Theme) => ({
    padding: "4px 6px",
    borderRadius: 100,
    border: `0.50px ${theme.palette.grey[100]} solid`
  }),
  textTagOutline: (theme: Theme) => ({
    color: theme.palette.grey[600]
  }),
  description: {
    paddingLeft: 47
  },
  textDescription: {
    lineHeight: 1.5
  }
};

const MyFocus = () => {
  return (
    <div className="flexColumn stretchSelf flex1">
      {/* ------------ title ------------ */}
      <div css={classes.title} className="flexColumn stretchSelf">
        <Typography variant="h1" css={classes.titleText}>
          Mon Focus
        </Typography>
      </div>
      {/* -------------- tabs ------------ */}
      <div css={classes.tab} className="flexColumn stretchSelf">
        <div css={classes.tabContent} className="flexRow stretchSelf gapFour">
          <div css={classes.firstTab} className="flexCenter flex1 gapFour">
            <Typography variant="h5" css={classes.textFirstTab}>
              Cette semaine 4
            </Typography>
          </div>
          <div css={classes.secondTab} className="flexCenter flex1 gapFour">
            <Typography variant="h5" css={classes.textSecondTab}>
              Cette semaine 6
            </Typography>
          </div>
        </div>
      </div>
      {/* -------------- card ------------ */}
      <div className="flexColumn stretch stretchSelf">
        <div css={classes.card} className="flexColumn stretch gapEight">
          <div className="flexRow spaceBetween center gapEight">
            <div className="flexRow center gapEight">
              <div
                css={classes.boxPriorisation}
                className="flexCenter flexStart pink"
              >
                <div className="flexRow center gapFour">
                  <Typography variant="h5" css={classes.textPriorisation}>
                    75
                  </Typography>
                  <div css={classes.boxIconPriorisation}>
                    <div css={classes.iconPriorisationFirst}></div>
                    <div css={classes.iconPriorisationSecond}></div>
                    <div css={classes.iconPriorisationThird}></div>
                  </div>
                </div>
              </div>
              <div css={classes.tagWorkflow} className="flexRow center gapFour">
                <Typography variant="h5" css={classes.textTagWorkflow}>
                  Discovery
                </Typography>
              </div>
            </div>
            <div css={classes.tagOutline}>
              <Typography variant="h5" css={classes.textTagOutline}>
                P-01
              </Typography>
            </div>
          </div>
          <div css={classes.description} className="stretchSelf gapTen">
            <Typography variant="h5" css={classes.textDescription}>
              Retrouver la croissance du volume d’inscrits en menant une
              discovery approfondie côté SC.
            </Typography>
          </div>
        </div>

        <div css={classes.card} className="flexColumn stretch gapEight">
          <div className="flexRow spaceBetween center gapEight">
            <div className="flexRow center gapEight">
              <div
                css={classes.boxPriorisation}
                className="flexCenter flexStart orange"
              >
                <div className="flexRow center gapFour">
                  <Typography variant="h5" css={classes.textPriorisation}>
                    30
                  </Typography>
                  <div css={classes.boxIconPriorisation}>
                    <div css={classes.iconPriorisationFirst}></div>
                    <div css={classes.iconPriorisationSecond}></div>
                    <div css={classes.iconPriorisationThird}></div>
                  </div>
                </div>
              </div>
              <div css={classes.tagWorkflow} className="flexRow center gapFour">
                <Typography variant="h5" css={classes.textTagWorkflow}>
                  Test awaiting
                </Typography>
              </div>
            </div>
            <div css={classes.tagOutline}>
              <Typography variant="h5" css={classes.textTagOutline}>
                F-41
              </Typography>
            </div>
          </div>
          <div css={classes.description} className="stretchSelf gapTen">
            <Typography variant="h5" css={classes.textDescription}>
              Ajouter des couverts (sur tous les corners).
            </Typography>
          </div>
        </div>

        <div css={classes.card} className="flexColumn stretch gapEight">
          <div className="flexRow spaceBetween center gapEight">
            <div className="flexRow center gapEight">
              <div
                css={classes.boxPriorisation}
                className="flexCenter flexStart lightBlue"
              >
                <div className="flexRow center gapFour">
                  <Typography variant="h5" css={classes.textPriorisation}>
                    18
                  </Typography>
                  <div css={classes.boxIconPriorisation}>
                    <div css={classes.iconPriorisationFirst}></div>
                    <div css={classes.iconPriorisationSecond}></div>
                    <div css={classes.iconPriorisationThird}></div>
                  </div>
                </div>
              </div>
              <div css={classes.tagWorkflow} className="flexRow center gapFour">
                <Typography variant="h5" css={classes.textTagWorkflow}>
                  Evaluate
                </Typography>
              </div>
            </div>
            <div css={classes.tagOutline}>
              <Typography variant="h5" css={classes.textTagOutline}>
                F-34
              </Typography>
            </div>
          </div>
          <div css={classes.description} className="stretchSelf gapTen">
            <Typography variant="h5" css={classes.textDescription}>
              Résoudre le manque de fluidité perçu par les utilisateurs pour
              leur offrir une meilleure expérience de navigation.
            </Typography>
          </div>
        </div>

        <div css={classes.card} className="flexColumn stretch gapEight">
          <div className="flexRow spaceBetween center gapEight">
            <div className="flexRow center gapEight">
              <div
                css={classes.boxPriorisation}
                className="flexCenter flexStart lightBlue"
              >
                <div className="flexRow center gapFour">
                  <Typography variant="h5" css={classes.textPriorisation}>
                    15
                  </Typography>
                  <div css={classes.boxIconPriorisation}>
                    <div css={classes.iconPriorisationFirst}></div>
                    <div css={classes.iconPriorisationSecond}></div>
                    <div css={classes.iconPriorisationThird}></div>
                  </div>
                </div>
              </div>
              <div css={classes.tagWorkflow} className="flexRow center gapFour">
                <Typography variant="h5" css={classes.textTagWorkflow}>
                  Conception
                </Typography>
              </div>
            </div>
            <div css={classes.tagOutline}>
              <Typography variant="h5" css={classes.textTagOutline}>
                US-23
              </Typography>
            </div>
          </div>
          <div css={classes.description} className="stretchSelf gapTen">
            <Typography variant="h5" css={classes.textDescription}>
              Supprimer la fonction d’ajout.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFocus;
