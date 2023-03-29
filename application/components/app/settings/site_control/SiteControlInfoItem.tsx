import Flex from "@/components/build/Flex";
import classNames from "classnames";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { SiteControlInfoItemProps } from "./types/main";

const SwitchButton = dynamic(() => import("@/components/build/SwitchButton"), { ssr: false });

const SiteControlInfoItem: FC<SiteControlInfoItemProps> = ({ title, content, isChecked, dispatchType }) => {
    return (
        <div className="__controls_item">
            <Flex className={classNames({ "text-center md:text-left": title })} direction="col">
                {title && <p className="text-lg font-medium text-black capitalize dark:text-white">{title}</p>}
                <p className="text-sm font-semibold capitalize text-grey-color dark:text-grey-dark-color">{content}</p>
            </Flex>

            <SwitchButton isChecked={isChecked} dispatchType={dispatchType} />
        </div>
    );
};

export default SiteControlInfoItem;
