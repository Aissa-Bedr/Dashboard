import React, { FC } from "react";
import { TypeLogoProps } from "./types/main";

const PrimaryLogo: FC<TypeLogoProps> = ({ text }) => {
    return <p className="__primary_logo">{text}</p>;
};

export default PrimaryLogo;
