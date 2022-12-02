import classnames from "classnames";

import BootstrapCard from "react-bootstrap/Card";

import styles from "./s.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
  gutterless?: boolean;
}

const Card = ({ children, className, gutterless }: Props) => {
  return (
    <BootstrapCard className={classnames(styles.card, !gutterless && styles.gutter, className)}>
      {children}
    </BootstrapCard>
  );
}

export default Card;
