import Grid from "@/components/build/Grid";
import React from "react";
import lastProjectProgressList from "../data/lastProjectProgressList";
import LastProjectProgressInfoItem from "./LastProjectProgressInfoItem";

const LastProjectProgressInfo = () => {
    const lastProjectProgressInfo = lastProjectProgressList.map((item) => (
        <LastProjectProgressInfoItem key={item.id} {...item} />
    ));

    return (
        <Grid className="gap-4" cols="1">
            {lastProjectProgressInfo}
        </Grid>
    );
};

export default LastProjectProgressInfo;
