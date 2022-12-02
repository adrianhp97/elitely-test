import Navbar from "react-bootstrap/Navbar";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";

import Button from "_shared/components/button";
import Heading from "_shared/components/heading";

import styles from "./s.module.scss";

const Header = () => {
  return (
    <Navbar className={styles.header} fixed="top">
      <Button className={styles.backIcon} variant="icon">
        <ArrowLeft />
      </Button>
      <Heading>Profile</Heading>
    </Navbar>
  )
}

export default Header;
