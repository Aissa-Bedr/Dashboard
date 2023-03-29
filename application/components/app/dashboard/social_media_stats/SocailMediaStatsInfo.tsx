import Grid from "@/components/build/Grid";
import React from "react";
import socialMediaStatsList from "../data/socialMediaStatsList";
import SocailMediaStatsInfoItem from "./SocailMediaStatsInfoItem";

const SocailMediaStatsInfo = () => {
    const socailMediaStatsInfo = socialMediaStatsList.map((item) => (
        <SocailMediaStatsInfoItem key={item.id} {...item} />
    ));

    return (
        <Grid className="gap-2" cols="1">
            {socailMediaStatsInfo}
        </Grid>
    );
};

export default SocailMediaStatsInfo;
