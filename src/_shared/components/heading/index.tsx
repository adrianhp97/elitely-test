import styles from "./s.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h6 className={styles.heading}>{children}</h6>
  )
}

export default Heading;
