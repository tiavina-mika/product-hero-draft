import { Theme } from "@emotion/react";

const paletteColors = ["success", "info", "warning", "error"];
const paletteColorThemes = ["light", "main", "dark"];

/**
 * the slider color change depending of the value (percentage)
 * @param value 0 to 100
 * @param palette mui theme palette colors (success, info, error, warning), each of it has light, main and dark
 * @returns
 */
export const getSliderColorByPercent = (
  value: number,
  palette: Theme["palette"]
): string => {
  const intervals = [
    [0, 25],
    [25, 50],
    [50, 75],
    [75, 100]
  ];
  let color = palette.success.light;

  intervals.forEach((interval: number[], index: number): void => {
    const min = interval[0];
    const max = interval[1];
    if (value > min && value <= max) {
      // get success, info, warn or error
      const paletteColor = paletteColors[index];
      // divide by number of palette theme for each interval
      const maxPaletteColorTheme = max / paletteColorThemes.length;
      // get light, main or dark
      const currentColorType = (palette as any)[paletteColor];
      if (value > 0 && value <= maxPaletteColorTheme) {
        color = currentColorType[paletteColorThemes[0]];
      }
      if (value > maxPaletteColorTheme && value <= maxPaletteColorTheme * 2) {
        color = currentColorType[paletteColorThemes[1]];
      }
      if (
        value > maxPaletteColorTheme * 2 &&
        value <= maxPaletteColorTheme * 3
      ) {
        color = currentColorType[paletteColorThemes[2]];
      }
    }
  });

  return color;
};
