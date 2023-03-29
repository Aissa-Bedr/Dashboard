import { TicketsInfoItemProps } from "../tickets_statistics/types/main";
import { HiSortAscending } from "react-icons/hi";
import { BiLoaderCircle } from "react-icons/bi";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";

const ticketsInfoList: TicketsInfoItemProps[] = [
    {
        id: 0,
        icon: <HiSortAscending className="text-orange-color" size="2.2rem" />,
        firstSecContent: "2500",
        secondSecContent: "Total",
    },
    {
        id: 1,
        icon: <BiLoaderCircle className="text-blue-color dark:text-blue-dark-color" size="2.2rem" />,
        firstSecContent: "500",
        secondSecContent: "Pending",
    },
    {
        id: 2,
        icon: <HiOutlineCheckCircle className="text-green-color" size="2.2rem" />,
        firstSecContent: "1900",
        secondSecContent: "Closed",
    },
    {
        id: 3,
        icon: <HiOutlineXCircle className="text-red-color" size="2.2rem" />,
        firstSecContent: "100",
        secondSecContent: "Deleted",
    },
];

export default ticketsInfoList;
