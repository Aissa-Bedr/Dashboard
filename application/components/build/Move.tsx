import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { MoveProps } from "./types/main";

const Move: FC<MoveProps> = ({ className = "", href, onClick, children }) => {
    return (
        <Link
            className={classNames(
                "w-fit text-sm font-semibold capitalize text-blue-alt-color hover:text-blue-color dark:text-blue-dark-alt-color dark:hover:text-blue-dark-color duration-300",
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
