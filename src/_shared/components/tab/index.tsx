import { useState } from "react";

import classnames from "classnames";

import BootstrapTab from 'react-bootstrap/Tab';
import BootstrapTabs from 'react-bootstrap/Tabs';

import type { TabItem } from "./types";

import styles from "./s.module.scss";

type Props = {
  block?: boolean;
  className?: string;
  defaultActive?: string;
  hideUnderline?: boolean;
  items: TabItem[];
}

const Tabs = ({ block, className, defaultActive, hideUnderline, items }: Props) => {
  const [active, setActive] = useState<string>(defaultActive || items[0]?.key || "");
  return (
    <BootstrapTabs
      className={classnames(styles.tabs, block && styles.fullHeight, hideUnderline && styles.hideUnderline, className)}
      defaultActiveKey={active}
      onSelect={(key) => setActive(key || "")}
      justify
    >
      {items.map(item => (
        <BootstrapTab disabled={item.disabled} eventKey={item.key} key={item.key} title={item.label}>
          {item.children}
        </BootstrapTab>
      ))}
    </BootstrapTabs>
  )
}

export default Tabs;
