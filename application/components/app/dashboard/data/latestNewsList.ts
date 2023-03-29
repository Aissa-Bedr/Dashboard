import { LatestNewsInfoItemProps } from "./../latest_news/types/main";

const latestNewsList: LatestNewsInfoItemProps[] = [
    {
        id: 0,
        src: "/dashboard/news-01.png",
        firstSecContent: "Created SASS section",
        secondSecContent: "New SASS examples & tutorials",
        thirdSecContent: "3 days ago",
    },
    {
        id: 1,
        src: "/dashboard/news-02.png",
        firstSecContent: "Changed the design",
        secondSecContent: "A brand new website design",
        thirdSecContent: "5 days ago",
    },
    {
        id: 2,
        src: "/dashboard/news-03.png",
        firstSecContent: "Team increased",
        secondSecContent: "3 Developers joined the team",
        thirdSecContent: "7 days ago",
    },
    {
        id: 3,
        src: "/dashboard/news-04.png",
        firstSecContent: "Added payment geteaway",
        secondSecContent: "Many new payment gateways added",
        thirdSecContent: "9 days ago",
        dontIncludeBorder: true,
    },
];

export default latestNewsList;
