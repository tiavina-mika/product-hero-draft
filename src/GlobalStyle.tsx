import { css, Global, Theme } from "@emotion/react";
import { Theme as MUITheme } from "@mui/material";

interface themeProps {
  theme: Theme & MUITheme;
}

const getGlobalStyles = (theme: Theme & MUITheme) => {
  return css`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    @font-face {
      font-family: "Product Sans Bold";
      src: url("../../fonts/ProductSans-Bold.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "Product Sans Regular";
      src: url("../../fonts/ProductSans-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "Product Sans Medium";
      src: url("../../fonts/ProductSans-Medium.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    .flexRow {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
    }

    .flexCenter {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
    }

    .flexStretch {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .stretch {
      align-items: stretch;
    }

    .center {
      align-items: center;
    }

    .flexStart {
      align-items: flex-start;
    }

    .flexEnd {
      align-items: flex-end;
    }

    .spaceBetween {
      justify-content: space-between;
    }

    .spaceAround {
      justify-content: space-around;
    }

    .justifyStart {
      justify-content: flex-start;
    }

    .justifyEnd {
      justify-content: flex-end;
    }

    .justifyCenter {
      justify-content: center;
    }

    .stretchSelf {
      align-self: stretch;
    }

    .justifySelf {
      justify-self: strech;
    }

    .centerSelf {
      align-self: center;
    }
    .endSelf {
      align-self: flex-end;
    }

    .flex1 {
      flex: 1;
    }

    .flex2 {
      flex: 2;
    }

    .wrap {
      flex-wrap: wrap;
    }

    .nowrap {
      flex-wrap: nowrap;
    }

    .shrink0 {
      flex-shrink: 0;
    }

    .shrink1 {
      flex-shrink: 1;
    }

    .flexItem {
      padding: 10px;
    }

    .transparentButton {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .positionRelative {
      position: relative;
    }
    .positionAbsolute {
      position: absolute;
    }
    .h4Grey600 {
      color: ${theme.palette.grey[600]};
    }
    .cursorPointer {
      cursor: pointer;
    }

    .fw700 {
      font-weight: 700;
    }

    .red {
      background-color: red;
    }

    .blue {
      background-color: blue;
    }

    .green {
      background-color: green;
    }

    .yellow {
      background-color: yellow;
    }
  `;
};

export const GlobalStyles = ({ theme }: themeProps) => (
  <Global styles={getGlobalStyles(theme)} />
);
