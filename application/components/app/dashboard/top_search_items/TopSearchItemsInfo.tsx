import Grid from "@/components/build/Grid";
import React from "react";
import topSearchedItemsList from "../data/topSearchedItemsList";
import TopSearchItemsInfoItem from "./TopSearchItemsInfoItem";

const TopSearchItemsInfo = () => {
    const topSearchItems = topSearchedItemsList.map((item) => <TopSearchItemsInfoItem key={item.id} {...item} />);

    return (
        <Grid className="gap-4" cols="1">
            {topSearchItems}
        </Grid>
    );
};

export default TopSearchItemsInfo;
