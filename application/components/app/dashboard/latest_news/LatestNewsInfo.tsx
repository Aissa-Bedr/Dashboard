import Grid from "@/components/build/Grid";
import React from "react";
import latestNewsList from "../data/latestNewsList";
import LatestNewsInfoItem from "./LatestNewsInfoItem";

const LatestNewsInfo = () => {
    const latestNewsInfo = latestNewsList.map((item) => <LatestNewsInfoItem key={item.id} {...item} />);

    return (
        <Grid className="gap-4" cols="1">
            {latestNewsInfo}
        </Grid>
    );
};

export default LatestNewsInfo;
