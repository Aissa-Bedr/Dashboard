import Grid from "@/components/build/Grid";
import React from "react";
import latestUploadsList from "../data/latestUploadsList";
import LatestUploadsInfoItem from "./LatestUploadsInfoItem";

const LatestUploadsInfo = () => {
    const latestUploadsInfo = latestUploadsList.map((item) => <LatestUploadsInfoItem key={item.id} {...item} />);

    return (
        <Grid className="gap-2" cols="1">
            {latestUploadsInfo}
        </Grid>
    );
};

export default LatestUploadsInfo;
