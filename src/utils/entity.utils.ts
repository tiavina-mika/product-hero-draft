import { ITrustLevelOption } from "../types/entity.type";

// export const trustLevelOptions: ITrustLevelOption = {
//   low: {
//     min: 0,
//     max: 25,
//     label: "Vous êtes en terra incognita.",
//     title: "Problème totalement inconnus"
//   },
//   medium: {
//     min: 25,
//     max: 75,
//     label: "Votre problème comporte encore des inconnues.",
//     title: "Problème comportant des inconnues"
//   },
//   high: {
//     min: 75,
//     max: 100,
//     label: "Vous travaillez sur un problème largement connu.",
//     title: "Problème largement connu"
//   }
// };

export const trustLevelOptions: ITrustLevelOption[] = [
  {
    min: 0,
    max: 25,
    label: "Vous êtes en terra incognita.",
    title: "Problème totalement inconnus",
    color: "error"
  },
  {
    min: 25,
    max: 75,
    label: "Votre problème comporte encore des inconnues.",
    title: "Problème comportant des inconnues",
    color: "warn"
  },
  {
    min: 75,
    max: 100,
    label: "Vous travaillez sur un problème largement connu.",
    title: "Problème largement connu",
    color: "success"
  }
];

/**
 * get trust level by value (mainly from slider or input)
 * @param value
 */
export const getTrustLevel = (value: number): ITrustLevelOption | undefined => {
  const currentTrustLevel = trustLevelOptions.find(
    (option) => value >= option.min && value <= option.max
  );

  return currentTrustLevel;
};

// export const getTrustLevelColor = (value: number): ITrustLevelOption | undefined => {
//   const currentTrustLevel = getTrustLevel(value);
//   // const trustLevelOptions.find(t => currentTrustLevel && currentTrustLevel.min >= t.min && currentTrustLevel.max <= t.max)
//   if (currentTrustLevel)
// };
