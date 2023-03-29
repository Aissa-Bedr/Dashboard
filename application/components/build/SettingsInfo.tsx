import React, { FC } from "react";
import Flex from "./Flex";
import Input from "./Input";
import { SettingsInfoProps } from "./types/main";

const SettingsInfo: FC<SettingsInfoProps> = ({ label, labelHTMLFor, type, stateValue, onChange }) => {
    return (
        <Flex className="gap-2" direction="col">
            <Flex direction="row" items="center" justify="between">
                <label className="text-grey-color dark:text-grey-dark-color" htmlFor={labelHTMLFor}>
                    {label}
                </label>

                <p className="text-grey-color dark:text-grey-dark-color">{stateValue}</p>
            </Flex>
            <Input id={labelHTMLFor} type={type} placeholder={label} onChange={onChange} />
        </Flex>
    );
};

export default SettingsInfo;
