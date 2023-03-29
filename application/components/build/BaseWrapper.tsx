import React, { FC } from "react";
import { BaseWrapperProps } from "./types/main";

const BaseWrapper: FC<BaseWrapperProps> = ({ children }) => {
    return <div className="__base_wrapper">{children}</div>;
};

export default BaseWrapper;
