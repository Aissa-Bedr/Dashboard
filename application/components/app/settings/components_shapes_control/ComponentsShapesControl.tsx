import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import ComponentsShapesControlInfo from "./ComponentsShapesControlInfo";

const ComponentsShapesControl = () => {
    return (
        <BoxContainer className="col-span-3">
            <LogoContainer>
                <PrimaryLogo text="Components shapes control" />
                <SecondaryLogo text="Control the website components shapes if there is maintenance" />
            </LogoContainer>

            <ContentWrapper>
                <ComponentsShapesControlInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default ComponentsShapesControl;
