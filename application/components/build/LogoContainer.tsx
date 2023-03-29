import React, { FC } from "react";
import { LogoContainerProps } from "./types/main";

const LogoContainer: FC<LogoContainerProps> = ({ children }) => {
    return <div className="space-y-2">{children}</div>;
};

export default LogoContainer;
