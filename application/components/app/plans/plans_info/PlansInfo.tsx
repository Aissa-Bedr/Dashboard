import React from "react";
import BoxContainer from "../../main/BoxContainer";
import Grid from "@/components/build/Grid";
import PlansInfoItem from "../plans_info_item/PlansInfoItem";
import freeFeatures from "../data/freeFeatures";
import silverFeatures from "../data/silverFeatures";
import goldFeatures from "../data/goldFeatures";
import platinumFeatures from "../data/platinumFeatures";
import superFeatures from "../data/superFeatures";
import maxFeatures from "../data/maxFeatures";

const PlansInfo = () => {
    return (
        <Grid className="col-span-3 gap-4 xl:grid-cols-2 2xl:grid-cols-3" cols="1">
            <BoxContainer>
                <PlansInfoItem subscribeType="free" price={0} logoBackgroundColor="green" features={freeFeatures} />
            </BoxContainer>

            <BoxContainer>
                <PlansInfoItem
                    subscribeType="silver"
                    price={4.99}
                    logoBackgroundColor="silver"
                    features={silverFeatures}
                />
            </BoxContainer>

            <BoxContainer>
                <PlansInfoItem subscribeType="gold" price={9.99} logoBackgroundColor="gold" features={goldFeatures} />
            </BoxContainer>

            <BoxContainer>
                <PlansInfoItem
                    subscribeType="platinum"
                    price={19.99}
                    logoBackgroundColor="platinum"
                    features={platinumFeatures}
                />
            </BoxContainer>

            <BoxContainer>
                <PlansInfoItem
                    subscribeType="super"
                    price={49.99}
                    logoBackgroundColor="super"
                    features={superFeatures}
                />
            </BoxContainer>

            <BoxContainer>
                <PlansInfoItem subscribeType="max" price={99.99} logoBackgroundColor="max" features={maxFeatures} />
            </BoxContainer>
        </Grid>
    );
};

export default PlansInfo;
