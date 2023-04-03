import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { DiGitBranch } from "react-icons/di";
import { HiAcademicCap } from "react-icons/hi2";
import { FaMoneyCheck } from "react-icons/fa";
import { LinkElementProps } from "../types/main";
import { BsRobot } from "react-icons/bs";

const linksData: LinkElementProps[] = [
    {
        id: 0,
        link: "dashboard",
        href: "",
        icon: <MdOutlineSpaceDashboard className="text-black dark:text-white" />,
        content: "Dashboard",
    },
    {
        id: 1,
        link: "settings",
        href: "settings",
        icon: <FiSettings className="text-black dark:text-white" />,
        content: "Settings",
    },
    {
        id: 2,
        link: "profile",
        href: "profile",
        icon: <BiUser className="text-black dark:text-white" />,
        content: "Profile",
    },
    {
        id: 3,
        link: "business",
        href: "business",
        icon: <DiGitBranch className="text-black dark:text-white" />,
        content: "Business",
    },
    {
        id: 4,
        link: "courses",
        href: "courses",
        icon: <HiAcademicCap className="text-black dark:text-white" />,
        content: "Courses",
    },
    {
        id: 5,
        link: "friends",
        href: "friends",
        icon: <BiUserCircle className="text-black dark:text-white" />,
        content: "Friends",
    },
    {
        id: 7,
        link: "plans",
        href: "plans",
        icon: <FaMoneyCheck className="text-black dark:text-white" />,
        content: "Plans",
    },
    {
        id: 8,
        link: "chat-bot",
        href: "chat-bot",
        icon: <BsRobot className="text-black dark:text-white" />,
        content: "Chat Bot",
    },
];

export default linksData;
