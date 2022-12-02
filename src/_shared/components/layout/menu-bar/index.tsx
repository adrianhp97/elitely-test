import classnames from "classnames";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";

import Tabs from "_shared/components/tab";

import { menuList } from "_shared/data/navigation";

import styles from "./s.module.scss";

const MenuBar = () => {
  return (
    <div className={styles.menuBar}>
      <Tabs
        block
        className={classnames("d-none", "d-md-flex", styles.menuList)}
        hideUnderline
        items={menuList}
      />
      <Tabs
        block
        className={classnames("d-flex", "d-md-none", styles.menuList)}
        hideUnderline
        items={menuList.map((item) => ({ ...item, label: item.icon }))}
      />
    </div>
  )
}

export default MenuBar;
