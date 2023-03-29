import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { MoveProps } from "./types/main";

const Move: FC<MoveProps> = ({ className = "", href, onClick, children }) => {
    return (
        <Link
            className={classNames(
                `text-sm font-semibold uppercase underline text-blue-alt-color hover:text-blue-color dark:text-blue-dark-alt-color dark:hover:text-blue-dark-color duration-300`,
                { [className]: className }
            )}
            href={href}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default Move;
