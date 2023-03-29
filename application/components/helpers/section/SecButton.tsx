import classNames from "classnames";
import React, { FC } from "react";
import { SecButtonProps } from "./types/main";

const SecButton: FC<SecButtonProps> = ({ className = "", children, onClick }) => {
    return (
        <button className={classNames("__section_button", { [className]: className })} onClick={onClick}>
            {children}
        </button>
    );
};

export default SecButton;
