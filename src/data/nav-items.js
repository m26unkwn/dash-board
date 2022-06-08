import {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TrasactionIcon,
  UserIcon,
} from "../assets";

const navItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: TrasactionIcon,
    title: "Transactions",
    to: "/transaction",
  },
  {
    icon: ScheduleIcon,
    title: "Schedules",
    to: "/schedules",
  },
  {
    icon: UserIcon,
    title: "Users",
    to: "/users",
  },
  {
    icon: SettingIcon,
    title: "Setting",
    to: "/setting",
  },
];

export { navItems };
