import Flex from "@/components/build/Flex";
import React, { FC } from "react";
import { EachNotificationProps } from "../types/main";
import { useDispatch } from "react-redux";
import removeNotificationAction from "@/redux/actions/remove_actions/removeNotificationAction";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";

const EachNotification: FC<EachNotificationProps> = ({ id, content }) => {
    const dispatch = useDispatch();

    function removeNotification(): void {
        dispatch(removeNotificationAction(id!));
        toast.success("Notification removed successfully !");
    }

    return (
        <Flex className="gap-4" direction="row" items="center" justify="between">
            <p className="font-medium text-grey-color dark:text-grey-dark-color">{content}</p>

            <FiTrash2
                className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                onClick={removeNotification}
            />
        </Flex>
    );
};

export default EachNotification;
