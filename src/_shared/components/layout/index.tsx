import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Header from "./header";
import MenuBar from "./menu-bar";

import styles from "./s.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <Container className={styles.container}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
