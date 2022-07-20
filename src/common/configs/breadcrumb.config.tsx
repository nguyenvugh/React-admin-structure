import { DashboardIcon } from "../assets/icons/dashboard";
import { DictionaryIcon } from "../assets/icons/dictionary";
import { ROUTER } from "../constants/routes.constants";

const { HOME_PAGE, DICTIONARY_PAGE } = ROUTER;

export const BREAD_CRUMB = {
  [HOME_PAGE]: {
    data: [
      {
        label: "Dashboard",
      },
      {
        label: "Dashboard",
      },
    ],
    icon: <DashboardIcon boxSize={5} strokeColor="#292D32" />,
  },
  [DICTIONARY_PAGE]: {
    data: [
      {
        label: "Dictionary",
      },
      {
        label: "Add new",
        link: DICTIONARY_PAGE,
      },
    ],
    icon: <DictionaryIcon boxSize={5} strokeColor="#292D32" />,
  },
};
