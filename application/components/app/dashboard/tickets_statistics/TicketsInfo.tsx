import React from "react";
import TicketsInfoItem from "./TicketsInfoItem";
import ticketsInfoList from "../data/ticketsInfoList";
import Grid from "@/components/build/Grid";

const TicketsInfo = () => {
    const ticketsInfo = ticketsInfoList.map((item) => <TicketsInfoItem key={item.id} {...item} />);

    return (
        <Grid className="gap-4 lg:grid-cols-2" cols="1">
            {ticketsInfo}
        </Grid>
    );
};

export default TicketsInfo;
