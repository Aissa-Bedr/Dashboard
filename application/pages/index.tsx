import { themeSwitcher } from "@/assests/logic/script";
import LastProjectProgress from "@/components/app/dashboard/last_project_progress/LastProjectProgress";
import LatestNews from "@/components/app/dashboard/latest_news/LatestNews";
import LatestPost from "@/components/app/dashboard/latest_post/LatestPost";
import LatestUploads from "@/components/app/dashboard/latest_uploads/LatestUploads";
import Projects from "@/components/app/dashboard/projects/Projects";
import QuickDraft from "@/components/app/dashboard/quick_draft/QuickDraft";
import Reminders from "@/components/app/dashboard/reminders/Reminders";
import SocialMediaStats from "@/components/app/dashboard/social_media_stats/SocialMediaStats";
import TicketsStatistics from "@/components/app/dashboard/tickets_statistics/TicketsStatistics";
import TopSearchItems from "@/components/app/dashboard/top_search_items/TopSearchItems";
import Welcome from "@/components/app/dashboard/welcome/Welcome";
import YearlyTargets from "@/components/app/dashboard/yearly_targets/YearlyTargets";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import { Theme } from "@/redux/types/app";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LatestTasks = dynamic(() => import("@/components/app/dashboard/latest_tasks/LatestTasks"), { ssr: false });

const Home = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const theme = useSelector<AppState, Theme>((state) => state.theme);

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Dashboard" />

            <Base>
                <Logo content="dashboard" />

                <BaseWrapper>
                    <Welcome />
                    {!switchBooleans.widgetsControl.isQuickDraftActive && <QuickDraft />}
                    {!switchBooleans.widgetsControl.isYearlyTargetsActive && <YearlyTargets />}
                    {!switchBooleans.widgetsControl.isTicketsStatisticsActive && <TicketsStatistics />}
                    {!switchBooleans.widgetsControl.isLatestNewsActive && <LatestNews />}
                    <LatestTasks />
                    <TopSearchItems />
                    {!switchBooleans.widgetsControl.isLatestUploadsActive && <LatestUploads />}
                    {!switchBooleans.widgetsControl.isLastProjectProgressActive && <LastProjectProgress />}
                    <Reminders />
                    <LatestPost />
                    <SocialMediaStats />
                    <Projects />
                </BaseWrapper>
            </Base>
        </>
    );
};

export default Home;
