import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppsIcon from "@mui/icons-material/Apps";

import { ReactNode } from "react";
export type SideBarItem = { href: string; icon: ReactNode; children?: SideBarItem[] };
export const createSideBarItems: () => SideBarItem[][] = () =>
  [
    [
      {
        href: "",
        icon: <AppsIcon />,
      },
    ],
    [
      {
        href: "admins",
        icon: <AdminPanelSettingsIcon />,
      },
    ],
  ].filter((section) => section.length !== 0);
