import classnames from "classnames";

import { TagColor } from "./types";

import styles from "./s.module.scss";

type Props = {
  children?: React.ReactNode;
  color?: TagColor;
}

const Tag = ({ children, color }: Props) => {
  let borderClass = styles.tagGreen;
  switch(color) {
    case TagColor.Green:
      borderClass = styles.tagGreen;
      break;
  }

  return (
    <div className={classnames(styles.tag, borderClass)}>{children}</div>
  );
}

export default Tag;
