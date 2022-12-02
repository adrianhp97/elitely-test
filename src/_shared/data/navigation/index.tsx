import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { ReactComponent as DuplicateIcon } from "assets/icons/duplicate.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

import type { MenuItem } from "./types";

export const menuList: MenuItem[] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeIcon />,
  },
  {
    label: "Explore",
    key: "explore",
    icon: <SearchIcon />,
  },
  {
    label: "Feed",
    key: "feed",
    icon: <DuplicateIcon />,
  },
  {
    label: "Schedule",
    key: "schedule",
    icon: <CalendarIcon />,
  },
];
