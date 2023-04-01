import Flex from "@/components/build/Flex";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";

const SearchBar = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            {switchBooleans.uiControl.isSearchBarShowed && (
                <Flex
                    className={classNames(
                        "gap-2 py-2 px-4 bg-white text-grey-color dark:bg-dark w-full dark:text-grey-dark-color rounded-full cursor-pointer",
                        {
                            "mb-2": switchBooleans.websiteControl.isZoomIn,
                            "my-2 lg:mb-2 lg:mt-0": !switchBooleans.websiteControl.isZoomIn,
                        }
                    )}
                    direction="row"
                    items="center"
                    justify="start"
                >
                    <BiSearchAlt2 size="1.3rem" />
                    <p>Search</p>
                </Flex>
            )}
        </>
    );
};

export default SearchBar;
