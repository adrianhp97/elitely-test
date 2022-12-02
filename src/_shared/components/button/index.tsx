import classnames from "classnames";

import BootstrapButton, { ButtonProps } from "react-bootstrap/Button";

import styles from "./s.module.scss";

type Props = ButtonProps & {
  block?: boolean;
  rounded?: boolean;
}

const Button = ({ block, children, className, rounded,  ...restProps}: Props) => {
  return (
    <>
      <style type="text/css">
        {`
          .btn-icon {
            background-color: transparent;
            border: none;
          }
        `}
      </style>

      <BootstrapButton className={classnames(block && styles.block, rounded && styles.rounded, className)} {...restProps}>
        {children}
      </BootstrapButton>
    </>
  );
}

export default Button;