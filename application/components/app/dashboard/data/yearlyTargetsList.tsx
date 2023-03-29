import { YearlyInfoItemProps } from "../yearly_targets/types/main";
import { BiDollar } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const yearlyTargetsList: YearlyInfoItemProps[] = [
    {
        id: 0,
        icon: <BiDollar className="text-blue-color" size="1.4rem" />,
        firstSecContent: "Money",
        secondSecContent: "$20.000",
        primaryBackground: "blue",
        secondaryBackground: "blue",
        ratio: 75,
    },
    {
        id: 1,
        icon: <BsCodeSlash className="text-orange-color" size="1.4rem" />,
        firstSecContent: "Projects",
        secondSecContent: "24",
        primaryBackground: "orange",
        secondaryBackground: "orange",
        ratio: 50,
    },
    {
        id: 2,
        icon: <AiOutlineUser className="text-green-color" size="1.4rem" />,
        firstSecContent: "Team",
        secondSecContent: "12",
        primaryBackground: "green",
        secondaryBackground: "green",
        ratio: 25,
    },
];

export default yearlyTargetsList;
