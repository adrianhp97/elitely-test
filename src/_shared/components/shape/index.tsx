import styles from "./s.module.scss";

type CircleProps = {
  size: number;
}

export const Circle = ({ size }: CircleProps) => {
  return (
    <div
      className={styles.green}
      style={{
        borderRadius: size,
        height: size,
        width: size,
      }}
    />
  )
}
