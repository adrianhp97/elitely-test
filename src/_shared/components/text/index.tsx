import classnames from "classnames";

import { FontSize, FontWeight } from "./types";

import styles from "./s.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  inline?: boolean;
  preline?: boolean;
  weight?: FontWeight;
  size?: FontSize;
}

const Text: React.FC<Props> = ({ children, className, color, inline, size, preline, weight }) => {
  let fontSizeClass = styles.textSmall;
  switch(size) {
    case FontSize.ExtraSmall:
      fontSizeClass = styles.textExtraSmall;
      break;
    case FontSize.Medium:
      fontSizeClass = styles.textMedium;
      break;
    case FontSize.Large:
      fontSizeClass = styles.textLarge;
      break;
    case FontSize.ExtraLarge:
      fontSizeClass = styles.textExtraLarge;
      break;
  }

  let fontWeightClass = styles.textNormal;
  switch(weight) {
    case FontWeight.Bold:
      fontWeightClass = styles.textBold;
      break;
    case FontWeight.Semibold:
      fontWeightClass = styles.textSemibold;
      break;
  }

  let fontColorClass = "";
  switch(color) {
    case "green":
      fontColorClass = styles.textGreen;
      break;
    case "grey":
      fontColorClass = styles.textGrey;
      break;
    case "greyDark":
      fontColorClass = styles.textGreyDark;
      break;
    case "red":
      fontColorClass = styles.textRed;
      break;
    case "yellow":
      fontColorClass = styles.textYellow;
      break;
    case "white":
      fontColorClass = styles.textWhite;
      break;
  }

  const textClass = classnames(styles.text, preline && styles.textPreLine, fontSizeClass, fontWeightClass, fontColorClass, className);

  return inline ? (
    <span className={textClass}>{children}</span>
  ) : (
    <p className={textClass}>{children}</p>
  );
}

export default Text;
