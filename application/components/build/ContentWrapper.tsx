import React, { FC } from "react";
import { ContentWrapperProps } from "./types/main";

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
    return <div className="mt-4">{children}</div>;
};

export default ContentWrapper;
