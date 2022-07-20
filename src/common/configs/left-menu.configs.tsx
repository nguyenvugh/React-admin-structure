import { LeftMenuConfig } from "src/common/interfaces/common.interfaces";
import { DashboardIcon } from "../assets/icons/dashboard";
import { DictionaryIcon } from "../assets/icons/dictionary";
import { PodcastIcon } from "../assets/icons/podcast";
import { YoutubeIcon } from "../assets/icons/youtube";
import { ROUTER } from "../constants/routes.constants";

const { DICTIONARY_PAGE } = ROUTER;

export const LEFT_MENU_CONFIG: LeftMenuConfig[] = [
  {
    label: "Dashboard",
    pathName: "/",
    authority: [],
    children: [],
    // icon: "/assets/icons/dashboard.svg",
    icon: <DashboardIcon boxSize={5} />,
  },
  {
    label: "Videos",
    // pathName: VIDEO_PAGE,
    authority: [],
    children: [],
    // icon: "/assets/icons/video-square.svg",
    icon: <YoutubeIcon boxSize={5} />,
  },
  {
    label: "Podcasts",
    // pathName: PODCAST_PAGE,
    authority: [],
    children: [],
    icon: <PodcastIcon boxSize={5} />,
  },
  {
    label: "Dictionary En-Vi",
    // pathName: DICTIONARY_PAGE,
    authority: [],
    children: [
      {
        label: "Add new",
        pathName: DICTIONARY_PAGE,
        authority: [],
        children: [],
      },
    ],
    // icon: "/assets/icons/dictionary.svg",
    icon: <DictionaryIcon boxSize={5} />,
  },
];
