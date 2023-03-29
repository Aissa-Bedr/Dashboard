import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SocailMediaStatsInfoItemProps } from "../social_media_stats/types/main";

const socialMediaStatsList: SocailMediaStatsInfoItemProps[] = [
    {
        id: 1,
        icon: <FaFacebookF className="text-white" size="1.5rem" />,
        content: "21 Friends",
        href: "https://www.facebook.com/profile.php?id=100085140111724",
        buttonContent: "Send message",
        backgroundColor: "bg-[#d5e4fd]",
        backgroundTheme: "blue",
        colorTheme: "blue",
    },
    {
        id: 2,
        icon: <FaYoutube className="text-white" size="1.5rem" />,
        content: "No subscribers",
        href: "https://www.youtube.com/channel/UCdf-H-6yFD_0-qBbbrnu5Nw",
        buttonContent: "Subscribe",
        backgroundColor: "bg-[#ffccd0]",
        backgroundTheme: "red",
        colorTheme: "red",
    },
];

export default socialMediaStatsList;
