import React, { FC } from "react";
import { TypeLogoProps } from "./types/main";

const SecondaryLogo: FC<TypeLogoProps> = ({ text }) => {
    return <p className="__secondary_logo">{text}</p>;
};

export default SecondaryLogo;
