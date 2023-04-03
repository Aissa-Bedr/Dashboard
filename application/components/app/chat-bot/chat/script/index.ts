import { BotMessage, BotMessageType } from "../../types/main";
import toggleThemeAction from "@/redux/actions/toggle_actions/toggleThemeAction";
import sendChatBotMessageAction from "@/redux/actions/add_actions/sendChatBotMessageAction";
import clearChatBotAction from "@/redux/actions/main_actions/clearChatBotAction";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

export function botMessage(content: string, { state, dispatch, router }: BotMessage): BotMessageType {
    let messageType: BotMessageType = "unknown";

    if (content.startsWith("Qs:") || content.startsWith("Qs:".toUpperCase()) || content.startsWith("Qs:".toLowerCase()))
        messageType = "question";

    if (content.startsWith("Do:") || content.startsWith("Do:".toUpperCase()) || content.startsWith("Do:".toLowerCase()))
        messageType = "actions";

    if (content.startsWith("Sh:") || content.startsWith("Sh:".toUpperCase()) || content.startsWith("Sh:".toLowerCase()))
        messageType = "sayHello";

    if (messageType === "unknown") {
        dispatch(sendChatBotMessageAction({ content: "Sorry but i didn't understand.", isBotMessage: true }));
        dispatch(
            sendChatBotMessageAction({
                content: `Your message ${content} does not match any messages types that i know you can use this flags (qs: | do: | sh:)`,
                isBotMessage: true,
            })
        );
        return messageType;
    }

    if (messageType === "question") {
        switch (content) {
            case `${content.slice(0, 3)} what is your name`:
            case `${content.slice(0, 3)} What is your name`:
            case `${content.slice(0, 3)} what Is your name`:
            case `${content.slice(0, 3)} what is Your name`:
            case `${content.slice(0, 3)} what is your Name`:
            case `${content.slice(0, 3)} What Is Your Name`:
            case `${content.slice(0, 3)} what is your name`.toUpperCase():
            case `${content.slice(0, 3)} what is your name`.toLowerCase():
            case `${content.slice(0, 3)} what is your name.`:
            case `${content.slice(0, 3)} What is your name.`:
            case `${content.slice(0, 3)} what Is your name.`:
            case `${content.slice(0, 3)} what is Your name.`:
            case `${content.slice(0, 3)} what is your Name.`:
            case `${content.slice(0, 3)} What Is Your Name.`:
            case `${content.slice(0, 3)} what is your name.`.toUpperCase():
            case `${content.slice(0, 3)} what is your name.`.toLowerCase():
            case `${content.slice(0, 3)} what is your name?`:
            case `${content.slice(0, 3)} What is your name?`:
            case `${content.slice(0, 3)} what Is your name?`:
            case `${content.slice(0, 3)} what is Your name?`:
            case `${content.slice(0, 3)} what is your Name?`:
            case `${content.slice(0, 3)} What Is Your Name?`:
            case `${content.slice(0, 3)} what is your name?`.toUpperCase():
            case `${content.slice(0, 3)} what is your name?`.toLowerCase():
            case `${content.slice(0, 3)} what is your name ?`:
            case `${content.slice(0, 3)} What is your name ?`:
            case `${content.slice(0, 3)} what Is your name ?`:
            case `${content.slice(0, 3)} what is Your name ?`:
            case `${content.slice(0, 3)} what is your Name ?`:
            case `${content.slice(0, 3)} What Is Your Name ?`:
            case `${content.slice(0, 3)} what is your name ?`.toUpperCase():
            case `${content.slice(0, 3)} what is your name ?`.toLowerCase():
            case `${content.slice(0, 3)} what is your name!`:
            case `${content.slice(0, 3)} What is your name!`:
            case `${content.slice(0, 3)} what Is your name!`:
            case `${content.slice(0, 3)} what is Your name!`:
            case `${content.slice(0, 3)} what is your Name!`:
            case `${content.slice(0, 3)} What Is Your Name!`:
            case `${content.slice(0, 3)} what is your name!`.toUpperCase():
            case `${content.slice(0, 3)} what is your name!`.toLowerCase():
            case `${content.slice(0, 3)} what is your name !`:
            case `${content.slice(0, 3)} What is your name !`:
            case `${content.slice(0, 3)} what Is your name !`:
            case `${content.slice(0, 3)} what is Your name !`:
            case `${content.slice(0, 3)} what is your Name !`:
            case `${content.slice(0, 3)} What Is Your Name !`:
            case `${content.slice(0, 3)} what is your name !`.toUpperCase():
            case `${content.slice(0, 3)} what is your name !`.toLowerCase():
            case `${content.slice(0, 3)} what's your name`:
            case `${content.slice(0, 3)} What's your name`:
            case `${content.slice(0, 3)} what's Your name`:
            case `${content.slice(0, 3)} what's your Name`:
            case `${content.slice(0, 3)} What's Your Name`:
            case `${content.slice(0, 3)} what's your name`.toUpperCase():
            case `${content.slice(0, 3)} what's your name`.toLowerCase():
            case `${content.slice(0, 3)} what's your name.`:
            case `${content.slice(0, 3)} What's your name.`:
            case `${content.slice(0, 3)} what's Your name.`:
            case `${content.slice(0, 3)} what's your Name.`:
            case `${content.slice(0, 3)} What's Your Name.`:
            case `${content.slice(0, 3)} what's your name.`.toUpperCase():
            case `${content.slice(0, 3)} what's your name.`.toLowerCase():
            case `${content.slice(0, 3)} what's your name?`:
            case `${content.slice(0, 3)} What's your name?`:
            case `${content.slice(0, 3)} what's Your name?`:
            case `${content.slice(0, 3)} what's your Name?`:
            case `${content.slice(0, 3)} What's Your Name?`:
            case `${content.slice(0, 3)} what's your name?`.toUpperCase():
            case `${content.slice(0, 3)} what's your name?`.toLowerCase():
            case `${content.slice(0, 3)} what's your name ?`:
            case `${content.slice(0, 3)} What's your name ?`:
            case `${content.slice(0, 3)} what's Your name ?`:
            case `${content.slice(0, 3)} what's your Name ?`:
            case `${content.slice(0, 3)} What's Your Name ?`:
            case `${content.slice(0, 3)} what's your name ?`.toUpperCase():
            case `${content.slice(0, 3)} what's your name ?`.toLowerCase():
            case `${content.slice(0, 3)} what's your name!`:
            case `${content.slice(0, 3)} What's your name!`:
            case `${content.slice(0, 3)} what's Your name!`:
            case `${content.slice(0, 3)} what's your Name!`:
            case `${content.slice(0, 3)} What's Your Name!`:
            case `${content.slice(0, 3)} what's your name!`.toUpperCase():
            case `${content.slice(0, 3)} what's your name!`.toLowerCase():
            case `${content.slice(0, 3)} what's your name !`:
            case `${content.slice(0, 3)} What's your name !`:
            case `${content.slice(0, 3)} what's Your name !`:
            case `${content.slice(0, 3)} what's your Name !`:
            case `${content.slice(0, 3)} What's Your Name !`:
            case `${content.slice(0, 3)} what's your name !`.toUpperCase():
            case `${content.slice(0, 3)} what's your name !`.toLowerCase():
            case `${content.slice(0, 3)}what is your name`:
            case `${content.slice(0, 3)}What is your name`:
            case `${content.slice(0, 3)}what Is your name`:
            case `${content.slice(0, 3)}what is Your name`:
            case `${content.slice(0, 3)}what is your Name`:
            case `${content.slice(0, 3)}What Is Your Name`:
            case `${content.slice(0, 3)}what is your name`.toUpperCase():
            case `${content.slice(0, 3)}what is your name`.toLowerCase():
            case `${content.slice(0, 3)}what is your name.`:
            case `${content.slice(0, 3)}What is your name.`:
            case `${content.slice(0, 3)}what Is your name.`:
            case `${content.slice(0, 3)}what is Your name.`:
            case `${content.slice(0, 3)}what is your Name.`:
            case `${content.slice(0, 3)}What Is Your Name.`:
            case `${content.slice(0, 3)}what is your name.`.toUpperCase():
            case `${content.slice(0, 3)}what is your name.`.toLowerCase():
            case `${content.slice(0, 3)}what is your name?`:
            case `${content.slice(0, 3)}What is your name?`:
            case `${content.slice(0, 3)}what Is your name?`:
            case `${content.slice(0, 3)}what is Your name?`:
            case `${content.slice(0, 3)}what is your Name?`:
            case `${content.slice(0, 3)}What Is Your Name?`:
            case `${content.slice(0, 3)}what is your name?`.toUpperCase():
            case `${content.slice(0, 3)}what is your name?`.toLowerCase():
            case `${content.slice(0, 3)}what is your name ?`:
            case `${content.slice(0, 3)}What is your name ?`:
            case `${content.slice(0, 3)}what Is your name ?`:
            case `${content.slice(0, 3)}what is Your name ?`:
            case `${content.slice(0, 3)}what is your Name ?`:
            case `${content.slice(0, 3)}What Is Your Name ?`:
            case `${content.slice(0, 3)}what is your name ?`.toUpperCase():
            case `${content.slice(0, 3)}what is your name ?`.toLowerCase():
            case `${content.slice(0, 3)}what is your name!`:
            case `${content.slice(0, 3)}What is your name!`:
            case `${content.slice(0, 3)}what Is your name!`:
            case `${content.slice(0, 3)}what is Your name!`:
            case `${content.slice(0, 3)}what is your Name!`:
            case `${content.slice(0, 3)}What Is Your Name!`:
            case `${content.slice(0, 3)}what is your name!`.toUpperCase():
            case `${content.slice(0, 3)}what is your name!`.toLowerCase():
            case `${content.slice(0, 3)}what is your name !`:
            case `${content.slice(0, 3)}What is your name !`:
            case `${content.slice(0, 3)}what Is your name !`:
            case `${content.slice(0, 3)}what is Your name !`:
            case `${content.slice(0, 3)}what is your Name !`:
            case `${content.slice(0, 3)}What Is Your Name !`:
            case `${content.slice(0, 3)}what is your name !`.toUpperCase():
            case `${content.slice(0, 3)}what is your name !`.toLowerCase():
            case `${content.slice(0, 3)}what's your name`:
            case `${content.slice(0, 3)}What's your name`:
            case `${content.slice(0, 3)}what's Your name`:
            case `${content.slice(0, 3)}what's your Name`:
            case `${content.slice(0, 3)}What's Your Name`:
            case `${content.slice(0, 3)}what's your name`.toUpperCase():
            case `${content.slice(0, 3)}what's your name`.toLowerCase():
            case `${content.slice(0, 3)}what's your name.`:
            case `${content.slice(0, 3)}What's your name.`:
            case `${content.slice(0, 3)}what's Your name.`:
            case `${content.slice(0, 3)}what's your Name.`:
            case `${content.slice(0, 3)}What's Your Name.`:
            case `${content.slice(0, 3)}what's your name.`.toUpperCase():
            case `${content.slice(0, 3)}what's your name.`.toLowerCase():
            case `${content.slice(0, 3)}what's your name?`:
            case `${content.slice(0, 3)}What's your name?`:
            case `${content.slice(0, 3)}what's Your name?`:
            case `${content.slice(0, 3)}what's your Name?`:
            case `${content.slice(0, 3)}What's Your Name?`:
            case `${content.slice(0, 3)}what's your name?`.toUpperCase():
            case `${content.slice(0, 3)}what's your name?`.toLowerCase():
            case `${content.slice(0, 3)}what's your name ?`:
            case `${content.slice(0, 3)}What's your name ?`:
            case `${content.slice(0, 3)}what's Your name ?`:
            case `${content.slice(0, 3)}what's your Name ?`:
            case `${content.slice(0, 3)}What's Your Name ?`:
            case `${content.slice(0, 3)}what's your name ?`.toUpperCase():
            case `${content.slice(0, 3)}what's your name ?`.toLowerCase():
            case `${content.slice(0, 3)}what's your name!`:
            case `${content.slice(0, 3)}What's your name!`:
            case `${content.slice(0, 3)}what's Your name!`:
            case `${content.slice(0, 3)}what's your Name!`:
            case `${content.slice(0, 3)}What's Your Name!`:
            case `${content.slice(0, 3)}what's your name!`.toUpperCase():
            case `${content.slice(0, 3)}what's your name!`.toLowerCase():
            case `${content.slice(0, 3)}what's your name !`:
            case `${content.slice(0, 3)}What's your name !`:
            case `${content.slice(0, 3)}what's Your name !`:
            case `${content.slice(0, 3)}what's your Name !`:
            case `${content.slice(0, 3)}What's Your Name !`:
            case `${content.slice(0, 3)}what's your name !`.toUpperCase():
            case `${content.slice(0, 3)}what's your name !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: "Thanks for asking, my name is chat-bot.",
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} what is my name`:
            case `${content.slice(0, 3)} What is my name`:
            case `${content.slice(0, 3)} what Is my name`:
            case `${content.slice(0, 3)} what is My name`:
            case `${content.slice(0, 3)} what is my Name`:
            case `${content.slice(0, 3)} What Is My Name`:
            case `${content.slice(0, 3)} what is my name`.toUpperCase():
            case `${content.slice(0, 3)} what is my name`.toLowerCase():
            case `${content.slice(0, 3)} what is my name.`:
            case `${content.slice(0, 3)} What is my name.`:
            case `${content.slice(0, 3)} what Is my name.`:
            case `${content.slice(0, 3)} what is My name.`:
            case `${content.slice(0, 3)} what is my Name.`:
            case `${content.slice(0, 3)} What Is My Name.`:
            case `${content.slice(0, 3)} what is my name.`.toUpperCase():
            case `${content.slice(0, 3)} what is my name.`.toLowerCase():
            case `${content.slice(0, 3)} what is my name?`:
            case `${content.slice(0, 3)} What is my name?`:
            case `${content.slice(0, 3)} what Is my name?`:
            case `${content.slice(0, 3)} what is My name?`:
            case `${content.slice(0, 3)} what is my Name?`:
            case `${content.slice(0, 3)} What Is My Name?`:
            case `${content.slice(0, 3)} what is my name?`.toUpperCase():
            case `${content.slice(0, 3)} what is my name?`.toLowerCase():
            case `${content.slice(0, 3)} what is my name ?`:
            case `${content.slice(0, 3)} What is my name ?`:
            case `${content.slice(0, 3)} what Is my name ?`:
            case `${content.slice(0, 3)} what is My name ?`:
            case `${content.slice(0, 3)} what is my Name ?`:
            case `${content.slice(0, 3)} What Is My Name ?`:
            case `${content.slice(0, 3)} what is my name ?`.toUpperCase():
            case `${content.slice(0, 3)} what is my name ?`.toLowerCase():
            case `${content.slice(0, 3)} what is my name!`:
            case `${content.slice(0, 3)} What is my name!`:
            case `${content.slice(0, 3)} what Is my name!`:
            case `${content.slice(0, 3)} what is My name!`:
            case `${content.slice(0, 3)} what is my Name!`:
            case `${content.slice(0, 3)} What Is My Name!`:
            case `${content.slice(0, 3)} what is my name!`.toUpperCase():
            case `${content.slice(0, 3)} what is my name!`.toLowerCase():
            case `${content.slice(0, 3)} what is my name !`:
            case `${content.slice(0, 3)} What is my name !`:
            case `${content.slice(0, 3)} what Is my name !`:
            case `${content.slice(0, 3)} what is My name !`:
            case `${content.slice(0, 3)} what is my Name !`:
            case `${content.slice(0, 3)} What Is My Name !`:
            case `${content.slice(0, 3)} what is my name !`.toUpperCase():
            case `${content.slice(0, 3)} what is my name !`.toLowerCase():
            case `${content.slice(0, 3)} what's my name`:
            case `${content.slice(0, 3)} What's my name`:
            case `${content.slice(0, 3)} what's My name`:
            case `${content.slice(0, 3)} what's my Name`:
            case `${content.slice(0, 3)} What's My Name`:
            case `${content.slice(0, 3)} what's my name`.toUpperCase():
            case `${content.slice(0, 3)} what's my name`.toLowerCase():
            case `${content.slice(0, 3)} what's my name.`:
            case `${content.slice(0, 3)} What's my name.`:
            case `${content.slice(0, 3)} what's My name.`:
            case `${content.slice(0, 3)} what's my Name.`:
            case `${content.slice(0, 3)} What's My Name.`:
            case `${content.slice(0, 3)} what's my name.`.toUpperCase():
            case `${content.slice(0, 3)} what's my name.`.toLowerCase():
            case `${content.slice(0, 3)} what's my name?`:
            case `${content.slice(0, 3)} What's my name?`:
            case `${content.slice(0, 3)} what's My name?`:
            case `${content.slice(0, 3)} what's my Name?`:
            case `${content.slice(0, 3)} What's My Name?`:
            case `${content.slice(0, 3)} what's my name?`.toUpperCase():
            case `${content.slice(0, 3)} what's my name?`.toLowerCase():
            case `${content.slice(0, 3)} what's my name ?`:
            case `${content.slice(0, 3)} What's my name ?`:
            case `${content.slice(0, 3)} what's My name ?`:
            case `${content.slice(0, 3)} what's my Name ?`:
            case `${content.slice(0, 3)} What's My Name ?`:
            case `${content.slice(0, 3)} what's my name ?`.toUpperCase():
            case `${content.slice(0, 3)} what's my name ?`.toLowerCase():
            case `${content.slice(0, 3)} what's my name!`:
            case `${content.slice(0, 3)} What's my name!`:
            case `${content.slice(0, 3)} what's My name!`:
            case `${content.slice(0, 3)} what's my Name!`:
            case `${content.slice(0, 3)} What's My Name!`:
            case `${content.slice(0, 3)} what's my name!`.toUpperCase():
            case `${content.slice(0, 3)} what's my name!`.toLowerCase():
            case `${content.slice(0, 3)} what's my name !`:
            case `${content.slice(0, 3)} What's my name !`:
            case `${content.slice(0, 3)} what's My name !`:
            case `${content.slice(0, 3)} what's my Name !`:
            case `${content.slice(0, 3)} What's My Name !`:
            case `${content.slice(0, 3)} what's my name !`.toUpperCase():
            case `${content.slice(0, 3)} what's my name !`.toLowerCase():
            case `${content.slice(0, 3)}what is my name`:
            case `${content.slice(0, 3)}What is my name`:
            case `${content.slice(0, 3)}what Is my name`:
            case `${content.slice(0, 3)}what is My name`:
            case `${content.slice(0, 3)}what is my Name`:
            case `${content.slice(0, 3)}What Is My Name`:
            case `${content.slice(0, 3)}what is my name`.toUpperCase():
            case `${content.slice(0, 3)}what is my name`.toLowerCase():
            case `${content.slice(0, 3)}what is my name.`:
            case `${content.slice(0, 3)}What is my name.`:
            case `${content.slice(0, 3)}what Is my name.`:
            case `${content.slice(0, 3)}what is My name.`:
            case `${content.slice(0, 3)}what is my Name.`:
            case `${content.slice(0, 3)}What Is My Name.`:
            case `${content.slice(0, 3)}what is my name.`.toUpperCase():
            case `${content.slice(0, 3)}what is my name.`.toLowerCase():
            case `${content.slice(0, 3)}what is my name?`:
            case `${content.slice(0, 3)}What is my name?`:
            case `${content.slice(0, 3)}what Is my name?`:
            case `${content.slice(0, 3)}what is My name?`:
            case `${content.slice(0, 3)}what is my Name?`:
            case `${content.slice(0, 3)}What Is My Name?`:
            case `${content.slice(0, 3)}what is my name?`.toUpperCase():
            case `${content.slice(0, 3)}what is my name?`.toLowerCase():
            case `${content.slice(0, 3)}what is my name ?`:
            case `${content.slice(0, 3)}What is my name ?`:
            case `${content.slice(0, 3)}what Is my name ?`:
            case `${content.slice(0, 3)}what is My name ?`:
            case `${content.slice(0, 3)}what is my Name ?`:
            case `${content.slice(0, 3)}What Is My Name ?`:
            case `${content.slice(0, 3)}what is my name ?`.toUpperCase():
            case `${content.slice(0, 3)}what is my name ?`.toLowerCase():
            case `${content.slice(0, 3)}what is my name!`:
            case `${content.slice(0, 3)}What is my name!`:
            case `${content.slice(0, 3)}what Is my name!`:
            case `${content.slice(0, 3)}what is My name!`:
            case `${content.slice(0, 3)}what is my Name!`:
            case `${content.slice(0, 3)}What Is My Name!`:
            case `${content.slice(0, 3)}what is my name!`.toUpperCase():
            case `${content.slice(0, 3)}what is my name!`.toLowerCase():
            case `${content.slice(0, 3)}what is my name !`:
            case `${content.slice(0, 3)}What is my name !`:
            case `${content.slice(0, 3)}what Is my name !`:
            case `${content.slice(0, 3)}what is My name !`:
            case `${content.slice(0, 3)}what is my Name !`:
            case `${content.slice(0, 3)}What Is My Name !`:
            case `${content.slice(0, 3)}what is my name !`.toUpperCase():
            case `${content.slice(0, 3)}what is my name !`.toLowerCase():
            case `${content.slice(0, 3)}what's my name`:
            case `${content.slice(0, 3)}What's my name`:
            case `${content.slice(0, 3)}what's My name`:
            case `${content.slice(0, 3)}what's my Name`:
            case `${content.slice(0, 3)}What's My Name`:
            case `${content.slice(0, 3)}what's my name`.toUpperCase():
            case `${content.slice(0, 3)}what's my name`.toLowerCase():
            case `${content.slice(0, 3)}what's my name.`:
            case `${content.slice(0, 3)}What's my name.`:
            case `${content.slice(0, 3)}what's My name.`:
            case `${content.slice(0, 3)}what's my Name.`:
            case `${content.slice(0, 3)}What's My Name.`:
            case `${content.slice(0, 3)}what's my name.`.toUpperCase():
            case `${content.slice(0, 3)}what's my name.`.toLowerCase():
            case `${content.slice(0, 3)}what's my name?`:
            case `${content.slice(0, 3)}What's my name?`:
            case `${content.slice(0, 3)}what's My name?`:
            case `${content.slice(0, 3)}what's my Name?`:
            case `${content.slice(0, 3)}What's My Name?`:
            case `${content.slice(0, 3)}what's my name?`.toUpperCase():
            case `${content.slice(0, 3)}what's my name?`.toLowerCase():
            case `${content.slice(0, 3)}what's my name ?`:
            case `${content.slice(0, 3)}What's my name ?`:
            case `${content.slice(0, 3)}what's My name ?`:
            case `${content.slice(0, 3)}what's my Name ?`:
            case `${content.slice(0, 3)}What's My Name ?`:
            case `${content.slice(0, 3)}what's my name ?`.toUpperCase():
            case `${content.slice(0, 3)}what's my name ?`.toLowerCase():
            case `${content.slice(0, 3)}what's my name!`:
            case `${content.slice(0, 3)}What's my name!`:
            case `${content.slice(0, 3)}what's My name!`:
            case `${content.slice(0, 3)}what's my Name!`:
            case `${content.slice(0, 3)}What's My Name!`:
            case `${content.slice(0, 3)}what's my name!`.toUpperCase():
            case `${content.slice(0, 3)}what's my name!`.toLowerCase():
            case `${content.slice(0, 3)}what's my name !`:
            case `${content.slice(0, 3)}What's my name !`:
            case `${content.slice(0, 3)}what's My name !`:
            case `${content.slice(0, 3)}what's my Name !`:
            case `${content.slice(0, 3)}What's My Name !`:
            case `${content.slice(0, 3)}what's my name !`.toUpperCase():
            case `${content.slice(0, 3)}what's my name !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Your name is ${state.generalInfo.firstName} ${state.generalInfo.lastName}.`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} who are you`:
            case `${content.slice(0, 3)} Who are you`:
            case `${content.slice(0, 3)} who Are you`:
            case `${content.slice(0, 3)} who are You`:
            case `${content.slice(0, 3)} Who Are You`:
            case `${content.slice(0, 3)} who are you`.toUpperCase():
            case `${content.slice(0, 3)} who are you`.toLowerCase():
            case `${content.slice(0, 3)} who are you.`:
            case `${content.slice(0, 3)} Who are you.`:
            case `${content.slice(0, 3)} who Are you.`:
            case `${content.slice(0, 3)} who are You.`:
            case `${content.slice(0, 3)} Who Are You.`:
            case `${content.slice(0, 3)} who are you.`.toUpperCase():
            case `${content.slice(0, 3)} who are you.`.toLowerCase():
            case `${content.slice(0, 3)} who are you?`:
            case `${content.slice(0, 3)} Who are you?`:
            case `${content.slice(0, 3)} who Are you?`:
            case `${content.slice(0, 3)} who are You?`:
            case `${content.slice(0, 3)} Who Are You?`:
            case `${content.slice(0, 3)} who are you?`.toUpperCase():
            case `${content.slice(0, 3)} who are you?`.toLowerCase():
            case `${content.slice(0, 3)} who are you ?`:
            case `${content.slice(0, 3)} Who are you ?`:
            case `${content.slice(0, 3)} who Are you ?`:
            case `${content.slice(0, 3)} who are You ?`:
            case `${content.slice(0, 3)} Who Are You ?`:
            case `${content.slice(0, 3)} who are you ?`.toUpperCase():
            case `${content.slice(0, 3)} who are you ?`.toLowerCase():
            case `${content.slice(0, 3)} who are you!`:
            case `${content.slice(0, 3)} Who are you!`:
            case `${content.slice(0, 3)} who Are you!`:
            case `${content.slice(0, 3)} who are You!`:
            case `${content.slice(0, 3)} Who Are You!`:
            case `${content.slice(0, 3)} who are you!`.toUpperCase():
            case `${content.slice(0, 3)} who are you!`.toLowerCase():
            case `${content.slice(0, 3)} who are you !`:
            case `${content.slice(0, 3)} Who are you !`:
            case `${content.slice(0, 3)} who Are you !`:
            case `${content.slice(0, 3)} who are You !`:
            case `${content.slice(0, 3)} Who Are You !`:
            case `${content.slice(0, 3)} who are you !`.toUpperCase():
            case `${content.slice(0, 3)} who are you !`.toLowerCase():
            case `${content.slice(0, 3)} who you are`:
            case `${content.slice(0, 3)} Who you are`:
            case `${content.slice(0, 3)} who You are`:
            case `${content.slice(0, 3)} who you Are`:
            case `${content.slice(0, 3)} Who You Are`:
            case `${content.slice(0, 3)} who you are`.toUpperCase():
            case `${content.slice(0, 3)} who you are`.toLowerCase():
            case `${content.slice(0, 3)} who you are.`:
            case `${content.slice(0, 3)} Who you are.`:
            case `${content.slice(0, 3)} who You are.`:
            case `${content.slice(0, 3)} who you Are.`:
            case `${content.slice(0, 3)} Who You Are.`:
            case `${content.slice(0, 3)} who you are.`.toUpperCase():
            case `${content.slice(0, 3)} who you are.`.toLowerCase():
            case `${content.slice(0, 3)} who you are?`:
            case `${content.slice(0, 3)} Who you are?`:
            case `${content.slice(0, 3)} who You are?`:
            case `${content.slice(0, 3)} who you Are?`:
            case `${content.slice(0, 3)} Who You Are?`:
            case `${content.slice(0, 3)} who you are?`.toUpperCase():
            case `${content.slice(0, 3)} who you are?`.toLowerCase():
            case `${content.slice(0, 3)} who you are ?`:
            case `${content.slice(0, 3)} Who you are ?`:
            case `${content.slice(0, 3)} who You are ?`:
            case `${content.slice(0, 3)} who you Are ?`:
            case `${content.slice(0, 3)} Who You Are ?`:
            case `${content.slice(0, 3)} who you are ?`.toUpperCase():
            case `${content.slice(0, 3)} who you are ?`.toLowerCase():
            case `${content.slice(0, 3)} who you are!`:
            case `${content.slice(0, 3)} Who you are!`:
            case `${content.slice(0, 3)} who You are!`:
            case `${content.slice(0, 3)} who you Are!`:
            case `${content.slice(0, 3)} Who You Are!`:
            case `${content.slice(0, 3)} who you are!`.toUpperCase():
            case `${content.slice(0, 3)} who you are!`.toLowerCase():
            case `${content.slice(0, 3)} who you are !`:
            case `${content.slice(0, 3)} Who you are !`:
            case `${content.slice(0, 3)} who You are !`:
            case `${content.slice(0, 3)} who you Are !`:
            case `${content.slice(0, 3)} Who You Are !`:
            case `${content.slice(0, 3)} who you are !`.toUpperCase():
            case `${content.slice(0, 3)} who you are !`.toLowerCase():
            case `${content.slice(0, 3)}who are you`:
            case `${content.slice(0, 3)}Who are you`:
            case `${content.slice(0, 3)}who Are you`:
            case `${content.slice(0, 3)}who are You`:
            case `${content.slice(0, 3)}Who Are You`:
            case `${content.slice(0, 3)}who are you`.toUpperCase():
            case `${content.slice(0, 3)}who are you`.toLowerCase():
            case `${content.slice(0, 3)}who are you.`:
            case `${content.slice(0, 3)}Who are you.`:
            case `${content.slice(0, 3)}who Are you.`:
            case `${content.slice(0, 3)}who are You.`:
            case `${content.slice(0, 3)}Who Are You.`:
            case `${content.slice(0, 3)}who are you.`.toUpperCase():
            case `${content.slice(0, 3)}who are you.`.toLowerCase():
            case `${content.slice(0, 3)}who are you?`:
            case `${content.slice(0, 3)}Who are you?`:
            case `${content.slice(0, 3)}who Are you?`:
            case `${content.slice(0, 3)}who are You?`:
            case `${content.slice(0, 3)}Who Are You?`:
            case `${content.slice(0, 3)}who are you?`.toUpperCase():
            case `${content.slice(0, 3)}who are you?`.toLowerCase():
            case `${content.slice(0, 3)}who are you ?`:
            case `${content.slice(0, 3)}Who are you ?`:
            case `${content.slice(0, 3)}who Are you ?`:
            case `${content.slice(0, 3)}who are You ?`:
            case `${content.slice(0, 3)}Who Are You ?`:
            case `${content.slice(0, 3)}who are you ?`.toUpperCase():
            case `${content.slice(0, 3)}who are you ?`.toLowerCase():
            case `${content.slice(0, 3)}who are you!`:
            case `${content.slice(0, 3)}Who are you!`:
            case `${content.slice(0, 3)}who Are you!`:
            case `${content.slice(0, 3)}who are You!`:
            case `${content.slice(0, 3)}Who Are You!`:
            case `${content.slice(0, 3)}who are you!`.toUpperCase():
            case `${content.slice(0, 3)}who are you!`.toLowerCase():
            case `${content.slice(0, 3)}who are you !`:
            case `${content.slice(0, 3)}Who are you !`:
            case `${content.slice(0, 3)}who Are you !`:
            case `${content.slice(0, 3)}who are You !`:
            case `${content.slice(0, 3)}Who Are You !`:
            case `${content.slice(0, 3)}who are you !`.toUpperCase():
            case `${content.slice(0, 3)}who are you !`.toLowerCase():
            case `${content.slice(0, 3)}who you are`:
            case `${content.slice(0, 3)}Who you are`:
            case `${content.slice(0, 3)}who You are`:
            case `${content.slice(0, 3)}who you Are`:
            case `${content.slice(0, 3)}Who You Are`:
            case `${content.slice(0, 3)}who you are`.toUpperCase():
            case `${content.slice(0, 3)}who you are`.toLowerCase():
            case `${content.slice(0, 3)}who you are.`:
            case `${content.slice(0, 3)}Who you are.`:
            case `${content.slice(0, 3)}who You are.`:
            case `${content.slice(0, 3)}who you Are.`:
            case `${content.slice(0, 3)}Who You Are.`:
            case `${content.slice(0, 3)}who you are.`.toUpperCase():
            case `${content.slice(0, 3)}who you are.`.toLowerCase():
            case `${content.slice(0, 3)}who you are?`:
            case `${content.slice(0, 3)}Who you are?`:
            case `${content.slice(0, 3)}who You are?`:
            case `${content.slice(0, 3)}who you Are?`:
            case `${content.slice(0, 3)}Who You Are?`:
            case `${content.slice(0, 3)}who you are?`.toUpperCase():
            case `${content.slice(0, 3)}who you are?`.toLowerCase():
            case `${content.slice(0, 3)}who you are ?`:
            case `${content.slice(0, 3)}Who you are ?`:
            case `${content.slice(0, 3)}who You are ?`:
            case `${content.slice(0, 3)}who you Are ?`:
            case `${content.slice(0, 3)}Who You Are ?`:
            case `${content.slice(0, 3)}who you are ?`.toUpperCase():
            case `${content.slice(0, 3)}who you are ?`.toLowerCase():
            case `${content.slice(0, 3)}who you are!`:
            case `${content.slice(0, 3)}Who you are!`:
            case `${content.slice(0, 3)}who You are!`:
            case `${content.slice(0, 3)}who you Are!`:
            case `${content.slice(0, 3)}Who You Are!`:
            case `${content.slice(0, 3)}who you are!`.toUpperCase():
            case `${content.slice(0, 3)}who you are!`.toLowerCase():
            case `${content.slice(0, 3)}who you are !`:
            case `${content.slice(0, 3)}Who you are !`:
            case `${content.slice(0, 3)}who You are !`:
            case `${content.slice(0, 3)}who you Are !`:
            case `${content.slice(0, 3)}Who You Are !`:
            case `${content.slice(0, 3)}who you are !`.toUpperCase():
            case `${content.slice(0, 3)}who you are !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: "I'am a computer programe.",
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} who made you`:
            case `${content.slice(0, 3)} Who made you`:
            case `${content.slice(0, 3)} who Made you`:
            case `${content.slice(0, 3)} who made You`:
            case `${content.slice(0, 3)} Who Made You`:
            case `${content.slice(0, 3)} who made you`.toUpperCase():
            case `${content.slice(0, 3)} who made you`.toLowerCase():
            case `${content.slice(0, 3)} who made you.`:
            case `${content.slice(0, 3)} Who made you.`:
            case `${content.slice(0, 3)} who Made you.`:
            case `${content.slice(0, 3)} who made You.`:
            case `${content.slice(0, 3)} Who Made You.`:
            case `${content.slice(0, 3)} who made you.`.toUpperCase():
            case `${content.slice(0, 3)} who made you.`.toLowerCase():
            case `${content.slice(0, 3)} who made you?`:
            case `${content.slice(0, 3)} Who made you?`:
            case `${content.slice(0, 3)} who Made you?`:
            case `${content.slice(0, 3)} who made You?`:
            case `${content.slice(0, 3)} Who Made You?`:
            case `${content.slice(0, 3)} who made you?`.toUpperCase():
            case `${content.slice(0, 3)} who made you?`.toLowerCase():
            case `${content.slice(0, 3)} who made you ?`:
            case `${content.slice(0, 3)} Who made you ?`:
            case `${content.slice(0, 3)} who Made you ?`:
            case `${content.slice(0, 3)} who made You ?`:
            case `${content.slice(0, 3)} Who Made You ?`:
            case `${content.slice(0, 3)} who made you ?`.toUpperCase():
            case `${content.slice(0, 3)} who made you ?`.toLowerCase():
            case `${content.slice(0, 3)} who made you!`:
            case `${content.slice(0, 3)} Who made you!`:
            case `${content.slice(0, 3)} who Made you!`:
            case `${content.slice(0, 3)} who made You!`:
            case `${content.slice(0, 3)} Who Made You!`:
            case `${content.slice(0, 3)} who made you!`.toUpperCase():
            case `${content.slice(0, 3)} who made you!`.toLowerCase():
            case `${content.slice(0, 3)} who made you !`:
            case `${content.slice(0, 3)} Who made you !`:
            case `${content.slice(0, 3)} who Made you !`:
            case `${content.slice(0, 3)} who made You !`:
            case `${content.slice(0, 3)} Who Made You !`:
            case `${content.slice(0, 3)} who made you !`.toUpperCase():
            case `${content.slice(0, 3)} who made you !`.toLowerCase():
            case `${content.slice(0, 3)}who made you`:
            case `${content.slice(0, 3)}Who made you`:
            case `${content.slice(0, 3)}who Made you`:
            case `${content.slice(0, 3)}who made You`:
            case `${content.slice(0, 3)}Who Made You`:
            case `${content.slice(0, 3)}who made you`.toUpperCase():
            case `${content.slice(0, 3)}who made you`.toLowerCase():
            case `${content.slice(0, 3)}who made you.`:
            case `${content.slice(0, 3)}Who made you.`:
            case `${content.slice(0, 3)}who Made you.`:
            case `${content.slice(0, 3)}who made You.`:
            case `${content.slice(0, 3)}Who Made You.`:
            case `${content.slice(0, 3)}who made you.`.toUpperCase():
            case `${content.slice(0, 3)}who made you.`.toLowerCase():
            case `${content.slice(0, 3)}who made you?`:
            case `${content.slice(0, 3)}Who made you?`:
            case `${content.slice(0, 3)}who Made you?`:
            case `${content.slice(0, 3)}who made You?`:
            case `${content.slice(0, 3)}Who Made You?`:
            case `${content.slice(0, 3)}who made you?`.toUpperCase():
            case `${content.slice(0, 3)}who made you?`.toLowerCase():
            case `${content.slice(0, 3)}who made you ?`:
            case `${content.slice(0, 3)}Who made you ?`:
            case `${content.slice(0, 3)}who Made you ?`:
            case `${content.slice(0, 3)}who made You ?`:
            case `${content.slice(0, 3)}Who Made You ?`:
            case `${content.slice(0, 3)}who made you ?`.toUpperCase():
            case `${content.slice(0, 3)}who made you ?`.toLowerCase():
            case `${content.slice(0, 3)}who made you!`:
            case `${content.slice(0, 3)}Who made you!`:
            case `${content.slice(0, 3)}who Made you!`:
            case `${content.slice(0, 3)}who made You!`:
            case `${content.slice(0, 3)}Who Made You!`:
            case `${content.slice(0, 3)}who made you!`.toUpperCase():
            case `${content.slice(0, 3)}who made you!`.toLowerCase():
            case `${content.slice(0, 3)}who made you !`:
            case `${content.slice(0, 3)}Who made you !`:
            case `${content.slice(0, 3)}who Made you !`:
            case `${content.slice(0, 3)}who made You !`:
            case `${content.slice(0, 3)}Who Made You !`:
            case `${content.slice(0, 3)}who made you !`.toUpperCase():
            case `${content.slice(0, 3)}who made you !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: "@Aissa Bedr.",
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} aissa bedr`:
            case `${content.slice(0, 3)} Aissa bedr`:
            case `${content.slice(0, 3)} aissa Bedr`:
            case `${content.slice(0, 3)} Aissa Bedr`:
            case `${content.slice(0, 3)} Aissa Bedr`.toUpperCase():
            case `${content.slice(0, 3)} Aissa Bedr`.toLowerCase():
            case `${content.slice(0, 3)} aissa bedr.`:
            case `${content.slice(0, 3)} Aissa bedr.`:
            case `${content.slice(0, 3)} aissa Bedr.`:
            case `${content.slice(0, 3)} Aissa Bedr.`:
            case `${content.slice(0, 3)} Aissa Bedr.`.toUpperCase():
            case `${content.slice(0, 3)} Aissa Bedr.`.toLowerCase():
            case `${content.slice(0, 3)} aissa bedr?`:
            case `${content.slice(0, 3)} Aissa bedr?`:
            case `${content.slice(0, 3)} aissa Bedr?`:
            case `${content.slice(0, 3)} Aissa Bedr?`:
            case `${content.slice(0, 3)} Aissa Bedr?`.toUpperCase():
            case `${content.slice(0, 3)} Aissa Bedr?`.toLowerCase():
            case `${content.slice(0, 3)} aissa bedr ?`:
            case `${content.slice(0, 3)} Aissa bedr ?`:
            case `${content.slice(0, 3)} aissa Bedr ?`:
            case `${content.slice(0, 3)} Aissa Bedr ?`:
            case `${content.slice(0, 3)} Aissa Bedr ?`.toUpperCase():
            case `${content.slice(0, 3)} Aissa Bedr ?`.toLowerCase():
            case `${content.slice(0, 3)} aissa bedr!`:
            case `${content.slice(0, 3)} Aissa bedr!`:
            case `${content.slice(0, 3)} aissa Bedr!`:
            case `${content.slice(0, 3)} Aissa Bedr!`:
            case `${content.slice(0, 3)} Aissa Bedr!`.toUpperCase():
            case `${content.slice(0, 3)} Aissa Bedr!`.toLowerCase():
            case `${content.slice(0, 3)} aissa bedr !`:
            case `${content.slice(0, 3)} Aissa bedr !`:
            case `${content.slice(0, 3)} aissa Bedr !`:
            case `${content.slice(0, 3)} Aissa Bedr !`:
            case `${content.slice(0, 3)} Aissa Bedr !`.toUpperCase():
            case `${content.slice(0, 3)} Aissa Bedr !`.toLowerCase():
            case `${content.slice(0, 3)} aissa`:
            case `${content.slice(0, 3)} Aissa`:
            case `${content.slice(0, 3)} aissa`.toUpperCase():
            case `${content.slice(0, 3)} aissa`.toLowerCase():
            case `${content.slice(0, 3)} aissa.`:
            case `${content.slice(0, 3)} Aissa.`:
            case `${content.slice(0, 3)} aissa.`.toUpperCase():
            case `${content.slice(0, 3)} aissa.`.toLowerCase():
            case `${content.slice(0, 3)} aissa?`:
            case `${content.slice(0, 3)} Aissa?`:
            case `${content.slice(0, 3)} aissa?`.toUpperCase():
            case `${content.slice(0, 3)} aissa?`.toLowerCase():
            case `${content.slice(0, 3)} aissa ?`:
            case `${content.slice(0, 3)} Aissa ?`:
            case `${content.slice(0, 3)} aissa ?`.toUpperCase():
            case `${content.slice(0, 3)} aissa ?`.toLowerCase():
            case `${content.slice(0, 3)} aissa!`:
            case `${content.slice(0, 3)} Aissa!`:
            case `${content.slice(0, 3)} aissa!`.toUpperCase():
            case `${content.slice(0, 3)} aissa!`.toLowerCase():
            case `${content.slice(0, 3)} aissa !`:
            case `${content.slice(0, 3)} Aissa !`:
            case `${content.slice(0, 3)} aissa !`.toUpperCase():
            case `${content.slice(0, 3)} aissa !`.toLowerCase():
            case `${content.slice(0, 3)} who is aissa bedr`:
            case `${content.slice(0, 3)} Who is aissa bedr`:
            case `${content.slice(0, 3)} who Is aissa bedr`:
            case `${content.slice(0, 3)} who is Aissa bedr`:
            case `${content.slice(0, 3)} who is aissa Bedr`:
            case `${content.slice(0, 3)} Who Is Aissa Bedr`:
            case `${content.slice(0, 3)} who is aissa Bedr`.toUpperCase():
            case `${content.slice(0, 3)} who is aissa Bedr`.toLowerCase():
            case `${content.slice(0, 3)} who is aissa bedr.`:
            case `${content.slice(0, 3)} Who is aissa bedr.`:
            case `${content.slice(0, 3)} who Is aissa bedr.`:
            case `${content.slice(0, 3)} who is Aissa bedr.`:
            case `${content.slice(0, 3)} who is aissa Bedr.`:
            case `${content.slice(0, 3)} Who Is Aissa Bedr.`:
            case `${content.slice(0, 3)} who is aissa Bedr.`.toUpperCase():
            case `${content.slice(0, 3)} who is aissa Bedr.`.toLowerCase():
            case `${content.slice(0, 3)} who is aissa bedr?`:
            case `${content.slice(0, 3)} Who is aissa bedr?`:
            case `${content.slice(0, 3)} who Is aissa bedr?`:
            case `${content.slice(0, 3)} who is Aissa bedr?`:
            case `${content.slice(0, 3)} who is aissa Bedr?`:
            case `${content.slice(0, 3)} Who Is Aissa Bedr?`:
            case `${content.slice(0, 3)} who is aissa Bedr?`.toUpperCase():
            case `${content.slice(0, 3)} who is aissa Bedr?`.toLowerCase():
            case `${content.slice(0, 3)} who is aissa bedr ?`:
            case `${content.slice(0, 3)} Who is aissa bedr ?`:
            case `${content.slice(0, 3)} who Is aissa bedr ?`:
            case `${content.slice(0, 3)} who is Aissa bedr ?`:
            case `${content.slice(0, 3)} who is aissa Bedr ?`:
            case `${content.slice(0, 3)} Who Is Aissa Bedr ?`:
            case `${content.slice(0, 3)} who is aissa Bedr ?`.toUpperCase():
            case `${content.slice(0, 3)} who is aissa Bedr ?`.toLowerCase():
            case `${content.slice(0, 3)} who is aissa bedr!`:
            case `${content.slice(0, 3)} Who is aissa bedr!`:
            case `${content.slice(0, 3)} who Is aissa bedr!`:
            case `${content.slice(0, 3)} who is Aissa bedr!`:
            case `${content.slice(0, 3)} who is aissa Bedr!`:
            case `${content.slice(0, 3)} Who Is Aissa Bedr!`:
            case `${content.slice(0, 3)} who is aissa Bedr!`.toUpperCase():
            case `${content.slice(0, 3)} who is aissa Bedr!`.toLowerCase():
            case `${content.slice(0, 3)} who is aissa bedr !`:
            case `${content.slice(0, 3)} Who is aissa bedr !`:
            case `${content.slice(0, 3)} who Is aissa bedr !`:
            case `${content.slice(0, 3)} who is Aissa bedr !`:
            case `${content.slice(0, 3)} who is aissa Bedr !`:
            case `${content.slice(0, 3)} Who Is Aissa Bedr !`:
            case `${content.slice(0, 3)} who is aissa Bedr !`.toUpperCase():
            case `${content.slice(0, 3)} who is aissa Bedr !`.toLowerCase():
            case `${content.slice(0, 3)}aissa bedr`:
            case `${content.slice(0, 3)}Aissa bedr`:
            case `${content.slice(0, 3)}aissa Bedr`:
            case `${content.slice(0, 3)}Aissa Bedr`:
            case `${content.slice(0, 3)}Aissa Bedr`.toUpperCase():
            case `${content.slice(0, 3)}Aissa Bedr`.toLowerCase():
            case `${content.slice(0, 3)}aissa bedr.`:
            case `${content.slice(0, 3)}Aissa bedr.`:
            case `${content.slice(0, 3)}aissa Bedr.`:
            case `${content.slice(0, 3)}Aissa Bedr.`:
            case `${content.slice(0, 3)}Aissa Bedr.`.toUpperCase():
            case `${content.slice(0, 3)}Aissa Bedr.`.toLowerCase():
            case `${content.slice(0, 3)}aissa bedr?`:
            case `${content.slice(0, 3)}Aissa bedr?`:
            case `${content.slice(0, 3)}aissa Bedr?`:
            case `${content.slice(0, 3)}Aissa Bedr?`:
            case `${content.slice(0, 3)}Aissa Bedr?`.toUpperCase():
            case `${content.slice(0, 3)}Aissa Bedr?`.toLowerCase():
            case `${content.slice(0, 3)}aissa bedr ?`:
            case `${content.slice(0, 3)}Aissa bedr ?`:
            case `${content.slice(0, 3)}aissa Bedr ?`:
            case `${content.slice(0, 3)}Aissa Bedr ?`:
            case `${content.slice(0, 3)}Aissa Bedr ?`.toUpperCase():
            case `${content.slice(0, 3)}Aissa Bedr ?`.toLowerCase():
            case `${content.slice(0, 3)}aissa bedr!`:
            case `${content.slice(0, 3)}Aissa bedr!`:
            case `${content.slice(0, 3)}aissa Bedr!`:
            case `${content.slice(0, 3)}Aissa Bedr!`:
            case `${content.slice(0, 3)}Aissa Bedr!`.toUpperCase():
            case `${content.slice(0, 3)}Aissa Bedr!`.toLowerCase():
            case `${content.slice(0, 3)}aissa bedr !`:
            case `${content.slice(0, 3)}Aissa bedr !`:
            case `${content.slice(0, 3)}aissa Bedr !`:
            case `${content.slice(0, 3)}Aissa Bedr !`:
            case `${content.slice(0, 3)}Aissa Bedr !`.toUpperCase():
            case `${content.slice(0, 3)}Aissa Bedr !`.toLowerCase():
            case `${content.slice(0, 3)}aissa`:
            case `${content.slice(0, 3)}Aissa`:
            case `${content.slice(0, 3)}aissa`.toUpperCase():
            case `${content.slice(0, 3)}aissa`.toLowerCase():
            case `${content.slice(0, 3)}aissa.`:
            case `${content.slice(0, 3)}Aissa.`:
            case `${content.slice(0, 3)}aissa.`.toUpperCase():
            case `${content.slice(0, 3)}aissa.`.toLowerCase():
            case `${content.slice(0, 3)}aissa?`:
            case `${content.slice(0, 3)}Aissa?`:
            case `${content.slice(0, 3)}aissa?`.toUpperCase():
            case `${content.slice(0, 3)}aissa?`.toLowerCase():
            case `${content.slice(0, 3)}aissa ?`:
            case `${content.slice(0, 3)}Aissa ?`:
            case `${content.slice(0, 3)}aissa ?`.toUpperCase():
            case `${content.slice(0, 3)}aissa ?`.toLowerCase():
            case `${content.slice(0, 3)}aissa!`:
            case `${content.slice(0, 3)}Aissa!`:
            case `${content.slice(0, 3)}aissa!`.toUpperCase():
            case `${content.slice(0, 3)}aissa!`.toLowerCase():
            case `${content.slice(0, 3)}aissa !`:
            case `${content.slice(0, 3)}Aissa !`:
            case `${content.slice(0, 3)}aissa !`.toUpperCase():
            case `${content.slice(0, 3)}aissa !`.toLowerCase():
            case `${content.slice(0, 3)}who is aissa bedr`:
            case `${content.slice(0, 3)}Who is aissa bedr`:
            case `${content.slice(0, 3)}who Is aissa bedr`:
            case `${content.slice(0, 3)}who is Aissa bedr`:
            case `${content.slice(0, 3)}who is aissa Bedr`:
            case `${content.slice(0, 3)}Who Is Aissa Bedr`:
            case `${content.slice(0, 3)}who is aissa Bedr`.toUpperCase():
            case `${content.slice(0, 3)}who is aissa Bedr`.toLowerCase():
            case `${content.slice(0, 3)}who is aissa bedr.`:
            case `${content.slice(0, 3)}Who is aissa bedr.`:
            case `${content.slice(0, 3)}who Is aissa bedr.`:
            case `${content.slice(0, 3)}who is Aissa bedr.`:
            case `${content.slice(0, 3)}who is aissa Bedr.`:
            case `${content.slice(0, 3)}Who Is Aissa Bedr.`:
            case `${content.slice(0, 3)}who is aissa Bedr.`.toUpperCase():
            case `${content.slice(0, 3)}who is aissa Bedr.`.toLowerCase():
            case `${content.slice(0, 3)}who is aissa bedr?`:
            case `${content.slice(0, 3)}Who is aissa bedr?`:
            case `${content.slice(0, 3)}who Is aissa bedr?`:
            case `${content.slice(0, 3)}who is Aissa bedr?`:
            case `${content.slice(0, 3)}who is aissa Bedr?`:
            case `${content.slice(0, 3)}Who Is Aissa Bedr?`:
            case `${content.slice(0, 3)}who is aissa Bedr?`.toUpperCase():
            case `${content.slice(0, 3)}who is aissa Bedr?`.toLowerCase():
            case `${content.slice(0, 3)}who is aissa bedr ?`:
            case `${content.slice(0, 3)}Who is aissa bedr ?`:
            case `${content.slice(0, 3)}who Is aissa bedr ?`:
            case `${content.slice(0, 3)}who is Aissa bedr ?`:
            case `${content.slice(0, 3)}who is aissa Bedr ?`:
            case `${content.slice(0, 3)}Who Is Aissa Bedr ?`:
            case `${content.slice(0, 3)}who is aissa Bedr ?`.toUpperCase():
            case `${content.slice(0, 3)}who is aissa Bedr ?`.toLowerCase():
            case `${content.slice(0, 3)}who is aissa bedr!`:
            case `${content.slice(0, 3)}Who is aissa bedr!`:
            case `${content.slice(0, 3)}who Is aissa bedr!`:
            case `${content.slice(0, 3)}who is Aissa bedr!`:
            case `${content.slice(0, 3)}who is aissa Bedr!`:
            case `${content.slice(0, 3)}Who Is Aissa Bedr!`:
            case `${content.slice(0, 3)}who is aissa Bedr!`.toUpperCase():
            case `${content.slice(0, 3)}who is aissa Bedr!`.toLowerCase():
            case `${content.slice(0, 3)}who is aissa bedr !`:
            case `${content.slice(0, 3)}Who is aissa bedr !`:
            case `${content.slice(0, 3)}who Is aissa bedr !`:
            case `${content.slice(0, 3)}who is Aissa bedr !`:
            case `${content.slice(0, 3)}who is aissa Bedr !`:
            case `${content.slice(0, 3)}Who Is Aissa Bedr !`:
            case `${content.slice(0, 3)}who is aissa Bedr !`.toUpperCase():
            case `${content.slice(0, 3)}who is aissa Bedr !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content:
                            "@Aissa Bedr is A web developer they have 17 years old who loves his work and spends most of his time writing codes. His best programming language is Typescript.",
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} how old are you`:
            case `${content.slice(0, 3)} How old are you`:
            case `${content.slice(0, 3)} how Old are you`:
            case `${content.slice(0, 3)} how old Are you`:
            case `${content.slice(0, 3)} how old are You`:
            case `${content.slice(0, 3)} How Old Are You`:
            case `${content.slice(0, 3)} how old are you`.toUpperCase():
            case `${content.slice(0, 3)} how old are you`.toLowerCase():
            case `${content.slice(0, 3)} how old are you.`:
            case `${content.slice(0, 3)} How old are you.`:
            case `${content.slice(0, 3)} how Old are you.`:
            case `${content.slice(0, 3)} how old Are you.`:
            case `${content.slice(0, 3)} how old are You.`:
            case `${content.slice(0, 3)} How Old Are You.`:
            case `${content.slice(0, 3)} how old are you.`.toUpperCase():
            case `${content.slice(0, 3)} how old are you.`.toLowerCase():
            case `${content.slice(0, 3)} how old are you?`:
            case `${content.slice(0, 3)} How old are you?`:
            case `${content.slice(0, 3)} how Old are you?`:
            case `${content.slice(0, 3)} how old Are you?`:
            case `${content.slice(0, 3)} how old are You?`:
            case `${content.slice(0, 3)} How Old Are You?`:
            case `${content.slice(0, 3)} how old are you?`.toUpperCase():
            case `${content.slice(0, 3)} how old are you?`.toLowerCase():
            case `${content.slice(0, 3)} how old are you ?`:
            case `${content.slice(0, 3)} How old are you ?`:
            case `${content.slice(0, 3)} how Old are you ?`:
            case `${content.slice(0, 3)} how old Are you ?`:
            case `${content.slice(0, 3)} how old are You ?`:
            case `${content.slice(0, 3)} How Old Are You ?`:
            case `${content.slice(0, 3)} how old are you ?`.toUpperCase():
            case `${content.slice(0, 3)} how old are you ?`.toLowerCase():
            case `${content.slice(0, 3)} how old are you!`:
            case `${content.slice(0, 3)} How old are you!`:
            case `${content.slice(0, 3)} how Old are you!`:
            case `${content.slice(0, 3)} how old Are you!`:
            case `${content.slice(0, 3)} how old are You!`:
            case `${content.slice(0, 3)} How Old Are You!`:
            case `${content.slice(0, 3)} how old are you!`.toUpperCase():
            case `${content.slice(0, 3)} how old are you!`.toLowerCase():
            case `${content.slice(0, 3)} how old are you !`:
            case `${content.slice(0, 3)} How old are you !`:
            case `${content.slice(0, 3)} how Old are you !`:
            case `${content.slice(0, 3)} how old Are you !`:
            case `${content.slice(0, 3)} how old are You !`:
            case `${content.slice(0, 3)} How Old Are You !`:
            case `${content.slice(0, 3)} how old are you !`.toUpperCase():
            case `${content.slice(0, 3)} how old are you !`.toLowerCase():
            case `${content.slice(0, 3)}how old are you`:
            case `${content.slice(0, 3)}How old are you`:
            case `${content.slice(0, 3)}how Old are you`:
            case `${content.slice(0, 3)}how old Are you`:
            case `${content.slice(0, 3)}how old are You`:
            case `${content.slice(0, 3)}How Old Are You`:
            case `${content.slice(0, 3)}how old are you`.toUpperCase():
            case `${content.slice(0, 3)}how old are you`.toLowerCase():
            case `${content.slice(0, 3)}how old are you.`:
            case `${content.slice(0, 3)}How old are you.`:
            case `${content.slice(0, 3)}how Old are you.`:
            case `${content.slice(0, 3)}how old Are you.`:
            case `${content.slice(0, 3)}how old are You.`:
            case `${content.slice(0, 3)}How Old Are You.`:
            case `${content.slice(0, 3)}how old are you.`.toUpperCase():
            case `${content.slice(0, 3)}how old are you.`.toLowerCase():
            case `${content.slice(0, 3)}how old are you?`:
            case `${content.slice(0, 3)}How old are you?`:
            case `${content.slice(0, 3)}how Old are you?`:
            case `${content.slice(0, 3)}how old Are you?`:
            case `${content.slice(0, 3)}how old are You?`:
            case `${content.slice(0, 3)}How Old Are You?`:
            case `${content.slice(0, 3)}how old are you?`.toUpperCase():
            case `${content.slice(0, 3)}how old are you?`.toLowerCase():
            case `${content.slice(0, 3)}how old are you ?`:
            case `${content.slice(0, 3)}How old are you ?`:
            case `${content.slice(0, 3)}how Old are you ?`:
            case `${content.slice(0, 3)}how old Are you ?`:
            case `${content.slice(0, 3)}how old are You ?`:
            case `${content.slice(0, 3)}How Old Are You ?`:
            case `${content.slice(0, 3)}how old are you ?`.toUpperCase():
            case `${content.slice(0, 3)}how old are you ?`.toLowerCase():
            case `${content.slice(0, 3)}how old are you!`:
            case `${content.slice(0, 3)}How old are you!`:
            case `${content.slice(0, 3)}how Old are you!`:
            case `${content.slice(0, 3)}how old Are you!`:
            case `${content.slice(0, 3)}how old are You!`:
            case `${content.slice(0, 3)}How Old Are You!`:
            case `${content.slice(0, 3)}how old are you!`.toUpperCase():
            case `${content.slice(0, 3)}how old are you!`.toLowerCase():
            case `${content.slice(0, 3)}how old are you !`:
            case `${content.slice(0, 3)}How old are you !`:
            case `${content.slice(0, 3)}how Old are you !`:
            case `${content.slice(0, 3)}how old Are you !`:
            case `${content.slice(0, 3)}how old are You !`:
            case `${content.slice(0, 3)}How Old Are You !`:
            case `${content.slice(0, 3)}how old are you !`.toUpperCase():
            case `${content.slice(0, 3)}how old are you !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: "Sorry but as a computer programe i don't have age.",
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} how are you`:
            case `${content.slice(0, 3)} How are you`:
            case `${content.slice(0, 3)} how Are you`:
            case `${content.slice(0, 3)} how are You`:
            case `${content.slice(0, 3)} how are you`.toUpperCase():
            case `${content.slice(0, 3)} how are you`.toLowerCase():
            case `${content.slice(0, 3)} how are you.`:
            case `${content.slice(0, 3)} How are you.`:
            case `${content.slice(0, 3)} how Are you.`:
            case `${content.slice(0, 3)} how are You.`:
            case `${content.slice(0, 3)} how are you.`.toUpperCase():
            case `${content.slice(0, 3)} how are you.`.toLowerCase():
            case `${content.slice(0, 3)} how are you?`:
            case `${content.slice(0, 3)} How are you?`:
            case `${content.slice(0, 3)} how Are you?`:
            case `${content.slice(0, 3)} how are You?`:
            case `${content.slice(0, 3)} how are you?`.toUpperCase():
            case `${content.slice(0, 3)} how are you?`.toLowerCase():
            case `${content.slice(0, 3)} how are you ?`:
            case `${content.slice(0, 3)} How are you ?`:
            case `${content.slice(0, 3)} how Are you ?`:
            case `${content.slice(0, 3)} how are You ?`:
            case `${content.slice(0, 3)} how are you ?`.toUpperCase():
            case `${content.slice(0, 3)} how are you ?`.toLowerCase():
            case `${content.slice(0, 3)} how are you!`:
            case `${content.slice(0, 3)} How are you!`:
            case `${content.slice(0, 3)} how Are you!`:
            case `${content.slice(0, 3)} how are You!`:
            case `${content.slice(0, 3)} how are you!`.toUpperCase():
            case `${content.slice(0, 3)} how are you!`.toLowerCase():
            case `${content.slice(0, 3)} how are you !`:
            case `${content.slice(0, 3)} How are you !`:
            case `${content.slice(0, 3)} how Are you !`:
            case `${content.slice(0, 3)} how are You !`:
            case `${content.slice(0, 3)} how are you !`.toUpperCase():
            case `${content.slice(0, 3)} how are you !`.toLowerCase():
            case `${content.slice(0, 3)}how are you`:
            case `${content.slice(0, 3)}How are you`:
            case `${content.slice(0, 3)}how Are you`:
            case `${content.slice(0, 3)}how are You`:
            case `${content.slice(0, 3)}how are you`.toUpperCase():
            case `${content.slice(0, 3)}how are you`.toLowerCase():
            case `${content.slice(0, 3)}how are you.`:
            case `${content.slice(0, 3)}How are you.`:
            case `${content.slice(0, 3)}how Are you.`:
            case `${content.slice(0, 3)}how are You.`:
            case `${content.slice(0, 3)}how are you.`.toUpperCase():
            case `${content.slice(0, 3)}how are you.`.toLowerCase():
            case `${content.slice(0, 3)}how are you?`:
            case `${content.slice(0, 3)}How are you?`:
            case `${content.slice(0, 3)}how Are you?`:
            case `${content.slice(0, 3)}how are You?`:
            case `${content.slice(0, 3)}how are you?`.toUpperCase():
            case `${content.slice(0, 3)}how are you?`.toLowerCase():
            case `${content.slice(0, 3)}how are you ?`:
            case `${content.slice(0, 3)}How are you ?`:
            case `${content.slice(0, 3)}how Are you ?`:
            case `${content.slice(0, 3)}how are You ?`:
            case `${content.slice(0, 3)}how are you ?`.toUpperCase():
            case `${content.slice(0, 3)}how are you ?`.toLowerCase():
            case `${content.slice(0, 3)}how are you!`:
            case `${content.slice(0, 3)}How are you!`:
            case `${content.slice(0, 3)}how Are you!`:
            case `${content.slice(0, 3)}how are You!`:
            case `${content.slice(0, 3)}how are you!`.toUpperCase():
            case `${content.slice(0, 3)}how are you!`.toLowerCase():
            case `${content.slice(0, 3)}how are you !`:
            case `${content.slice(0, 3)}How are you !`:
            case `${content.slice(0, 3)}how Are you !`:
            case `${content.slice(0, 3)}how are You !`:
            case `${content.slice(0, 3)}how are you !`.toUpperCase():
            case `${content.slice(0, 3)}how are you !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content:
                            "Sorry but as a computer programe i don't have feelings but my maker (@Aissa Bedr) are fine.",
                        isBotMessage: true,
                    })
                );
                break;

            default:
                dispatch(
                    sendChatBotMessageAction({
                        content: "Sorry but i didn't match your question.",
                        isBotMessage: true,
                    })
                );
        }
        return messageType;
    }

    if (messageType === "actions") {
        switch (content) {
            case `${content.slice(0, 3)} change the theme`:
            case `${content.slice(0, 3)} Change the theme`:
            case `${content.slice(0, 3)} change The theme`:
            case `${content.slice(0, 3)} change the Theme`:
            case `${content.slice(0, 3)} Change The Theme`:
            case `${content.slice(0, 3)} change the theme`.toUpperCase():
            case `${content.slice(0, 3)} change the theme`.toLowerCase():
            case `${content.slice(0, 3)} change theme`:
            case `${content.slice(0, 3)} Change theme`:
            case `${content.slice(0, 3)} change Theme`:
            case `${content.slice(0, 3)} Change Theme`:
            case `${content.slice(0, 3)} change theme`.toUpperCase():
            case `${content.slice(0, 3)} change theme`.toLowerCase():
            case `${content.slice(0, 3)} toggle the theme`:
            case `${content.slice(0, 3)} Toggle the theme`:
            case `${content.slice(0, 3)} toggle The theme`:
            case `${content.slice(0, 3)} toggle the Theme`:
            case `${content.slice(0, 3)} Toggle The Theme`:
            case `${content.slice(0, 3)} toggle the theme`.toUpperCase():
            case `${content.slice(0, 3)} toggle the theme`.toLowerCase():
            case `${content.slice(0, 3)} toggle theme`:
            case `${content.slice(0, 3)} Toggle theme`:
            case `${content.slice(0, 3)} toggle Theme`:
            case `${content.slice(0, 3)} Toggle Theme`:
            case `${content.slice(0, 3)} toggle theme`.toUpperCase():
            case `${content.slice(0, 3)} toggle theme`.toLowerCase():
            case `${content.slice(0, 3)}change the theme`:
            case `${content.slice(0, 3)}Change the theme`:
            case `${content.slice(0, 3)}change The theme`:
            case `${content.slice(0, 3)}change the Theme`:
            case `${content.slice(0, 3)}Change The Theme`:
            case `${content.slice(0, 3)}change the theme`.toUpperCase():
            case `${content.slice(0, 3)}change the theme`.toLowerCase():
            case `${content.slice(0, 3)}change theme`:
            case `${content.slice(0, 3)}Change theme`:
            case `${content.slice(0, 3)}change Theme`:
            case `${content.slice(0, 3)}Change Theme`:
            case `${content.slice(0, 3)}change theme`.toUpperCase():
            case `${content.slice(0, 3)}change theme`.toLowerCase():
            case `${content.slice(0, 3)}toggle the theme`:
            case `${content.slice(0, 3)}Toggle the theme`:
            case `${content.slice(0, 3)}toggle The theme`:
            case `${content.slice(0, 3)}toggle the Theme`:
            case `${content.slice(0, 3)}Toggle The Theme`:
            case `${content.slice(0, 3)}toggle the theme`.toUpperCase():
            case `${content.slice(0, 3)}toggle the theme`.toLowerCase():
            case `${content.slice(0, 3)}toggle theme`:
            case `${content.slice(0, 3)}Toggle theme`:
            case `${content.slice(0, 3)}toggle Theme`:
            case `${content.slice(0, 3)}Toggle Theme`:
            case `${content.slice(0, 3)}toggle theme`.toUpperCase():
            case `${content.slice(0, 3)}toggle theme`.toLowerCase():
                dispatch(toggleThemeAction());
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} clear the chat`:
            case `${content.slice(0, 3)} Clear the chat`:
            case `${content.slice(0, 3)} clear The chat`:
            case `${content.slice(0, 3)} clear the Chat`:
            case `${content.slice(0, 3)} Clear The Chat`:
            case `${content.slice(0, 3)} clear the chat`.toUpperCase():
            case `${content.slice(0, 3)} clear the chat`.toLowerCase():
            case `${content.slice(0, 3)} clear chat`:
            case `${content.slice(0, 3)} Clear chat`:
            case `${content.slice(0, 3)} clear Chat`:
            case `${content.slice(0, 3)} Clear Chat`:
            case `${content.slice(0, 3)} clear chat`.toUpperCase():
            case `${content.slice(0, 3)} clear chat`.toLowerCase():
            case `${content.slice(0, 3)} clear`:
            case `${content.slice(0, 3)} Clear`:
            case `${content.slice(0, 3)} clear`.toUpperCase():
            case `${content.slice(0, 3)} clear`.toLowerCase():
            case `${content.slice(0, 3)} clean the chat`:
            case `${content.slice(0, 3)} Clean the chat`:
            case `${content.slice(0, 3)} clean The chat`:
            case `${content.slice(0, 3)} clean the Chat`:
            case `${content.slice(0, 3)} Clean The Chat`:
            case `${content.slice(0, 3)} clean the chat`.toUpperCase():
            case `${content.slice(0, 3)} clean the chat`.toLowerCase():
            case `${content.slice(0, 3)} clean chat`:
            case `${content.slice(0, 3)} Clean chat`:
            case `${content.slice(0, 3)} clean Chat`:
            case `${content.slice(0, 3)} Clean Chat`:
            case `${content.slice(0, 3)} clean chat`.toUpperCase():
            case `${content.slice(0, 3)} clean chat`.toLowerCase():
            case `${content.slice(0, 3)} clean`:
            case `${content.slice(0, 3)} Clean`:
            case `${content.slice(0, 3)} clean`.toUpperCase():
            case `${content.slice(0, 3)} clean`.toLowerCase():
            case `${content.slice(0, 3)} new chat`:
            case `${content.slice(0, 3)} new Chat`:
            case `${content.slice(0, 3)} New Chat`:
            case `${content.slice(0, 3)} new chat`.toUpperCase():
            case `${content.slice(0, 3)} new chat`.toLowerCase():
            case `${content.slice(0, 3)} new`:
            case `${content.slice(0, 3)} New`:
            case `${content.slice(0, 3)} new`.toUpperCase():
            case `${content.slice(0, 3)} new`.toLowerCase():
            case `${content.slice(0, 3)} exit`:
            case `${content.slice(0, 3)} Exit`:
            case `${content.slice(0, 3)} exit`.toUpperCase():
            case `${content.slice(0, 3)} exit`.toLowerCase():
            case `${content.slice(0, 3)}clear the chat`:
            case `${content.slice(0, 3)}Clear the chat`:
            case `${content.slice(0, 3)}clear The chat`:
            case `${content.slice(0, 3)}clear the Chat`:
            case `${content.slice(0, 3)}Clear The Chat`:
            case `${content.slice(0, 3)}clear the chat`.toUpperCase():
            case `${content.slice(0, 3)}clear the chat`.toLowerCase():
            case `${content.slice(0, 3)}clear chat`:
            case `${content.slice(0, 3)}Clear chat`:
            case `${content.slice(0, 3)}clear Chat`:
            case `${content.slice(0, 3)}Clear Chat`:
            case `${content.slice(0, 3)}clear chat`.toUpperCase():
            case `${content.slice(0, 3)}clear chat`.toLowerCase():
            case `${content.slice(0, 3)}clear`:
            case `${content.slice(0, 3)}Clear`:
            case `${content.slice(0, 3)}clear`.toUpperCase():
            case `${content.slice(0, 3)}clear`.toLowerCase():
            case `${content.slice(0, 3)}clean the chat`:
            case `${content.slice(0, 3)}Clean the chat`:
            case `${content.slice(0, 3)}clean The chat`:
            case `${content.slice(0, 3)}clean the Chat`:
            case `${content.slice(0, 3)}Clean The Chat`:
            case `${content.slice(0, 3)}clean the chat`.toUpperCase():
            case `${content.slice(0, 3)}clean the chat`.toLowerCase():
            case `${content.slice(0, 3)}clean chat`:
            case `${content.slice(0, 3)}Clean chat`:
            case `${content.slice(0, 3)}clean Chat`:
            case `${content.slice(0, 3)}Clean Chat`:
            case `${content.slice(0, 3)}clean chat`.toUpperCase():
            case `${content.slice(0, 3)}clean chat`.toLowerCase():
            case `${content.slice(0, 3)}clean`:
            case `${content.slice(0, 3)}Clean`:
            case `${content.slice(0, 3)}clean`.toUpperCase():
            case `${content.slice(0, 3)}clean`.toLowerCase():
            case `${content.slice(0, 3)}new chat`:
            case `${content.slice(0, 3)}new Chat`:
            case `${content.slice(0, 3)}New Chat`:
            case `${content.slice(0, 3)}new chat`.toUpperCase():
            case `${content.slice(0, 3)}new chat`.toLowerCase():
            case `${content.slice(0, 3)}new`:
            case `${content.slice(0, 3)}New`:
            case `${content.slice(0, 3)}new`.toUpperCase():
            case `${content.slice(0, 3)}new`.toLowerCase():
            case `${content.slice(0, 3)}exit`:
            case `${content.slice(0, 3)}Exit`:
            case `${content.slice(0, 3)}exit`.toUpperCase():
            case `${content.slice(0, 3)}exit`.toLowerCase():
                dispatch(clearChatBotAction());
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - home`:
            case `${content.slice(0, 3)} Change the link - home`:
            case `${content.slice(0, 3)} Change the link - home`:
            case `${content.slice(0, 3)} Change the link - home`:
            case `${content.slice(0, 3)} change the link - Home`:
            case `${content.slice(0, 3)} Change The Link - Home`:
            case `${content.slice(0, 3)} change the link - Home`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Home`.toLowerCase():
            case `${content.slice(0, 3)} change link - home`:
            case `${content.slice(0, 3)} Change link - home`:
            case `${content.slice(0, 3)} change Link - home`:
            case `${content.slice(0, 3)} change link - Home`:
            case `${content.slice(0, 3)} Change Link - Home`:
            case `${content.slice(0, 3)} change link - Home`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Home`.toLowerCase():
            case `${content.slice(0, 3)} change the link home`:
            case `${content.slice(0, 3)} Change the link home`:
            case `${content.slice(0, 3)} change The link home`:
            case `${content.slice(0, 3)} Change the Link home`:
            case `${content.slice(0, 3)} change the link Home`:
            case `${content.slice(0, 3)} Change The Link Home`:
            case `${content.slice(0, 3)} change the link Home`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Home`.toLowerCase():
            case `${content.slice(0, 3)} change link home`:
            case `${content.slice(0, 3)} Change link home`:
            case `${content.slice(0, 3)} change Link home`:
            case `${content.slice(0, 3)} change link Home`:
            case `${content.slice(0, 3)} Change Link Home`:
            case `${content.slice(0, 3)} change link Home`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Home`.toLowerCase():
            case `${content.slice(0, 3)} change the link /home`:
            case `${content.slice(0, 3)} Change the link /home`:
            case `${content.slice(0, 3)} change The link /home`:
            case `${content.slice(0, 3)} Change the Link /home`:
            case `${content.slice(0, 3)} change the link /Home`:
            case `${content.slice(0, 3)} Change The Link /Home`:
            case `${content.slice(0, 3)} change the link /Home`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Home`.toLowerCase():
            case `${content.slice(0, 3)} change link /home`:
            case `${content.slice(0, 3)} Change link /home`:
            case `${content.slice(0, 3)} change Link /home`:
            case `${content.slice(0, 3)} change link /Home`:
            case `${content.slice(0, 3)} Change Link /Home`:
            case `${content.slice(0, 3)} change link /Home`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Home`.toLowerCase():
            case `${content.slice(0, 3)}change the link - home`:
            case `${content.slice(0, 3)}Change the link - home`:
            case `${content.slice(0, 3)}Change the link - home`:
            case `${content.slice(0, 3)}Change the link - home`:
            case `${content.slice(0, 3)}change the link - Home`:
            case `${content.slice(0, 3)}Change The Link - Home`:
            case `${content.slice(0, 3)}change the link - Home`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Home`.toLowerCase():
            case `${content.slice(0, 3)}change link - home`:
            case `${content.slice(0, 3)}Change link - home`:
            case `${content.slice(0, 3)}change Link - home`:
            case `${content.slice(0, 3)}change link - Home`:
            case `${content.slice(0, 3)}Change Link - Home`:
            case `${content.slice(0, 3)}change link - Home`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Home`.toLowerCase():
            case `${content.slice(0, 3)}change the link home`:
            case `${content.slice(0, 3)}Change the link home`:
            case `${content.slice(0, 3)}change The link home`:
            case `${content.slice(0, 3)}Change the Link home`:
            case `${content.slice(0, 3)}change the link Home`:
            case `${content.slice(0, 3)}Change The Link Home`:
            case `${content.slice(0, 3)}change the link Home`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Home`.toLowerCase():
            case `${content.slice(0, 3)}change link home`:
            case `${content.slice(0, 3)}Change link home`:
            case `${content.slice(0, 3)}change Link home`:
            case `${content.slice(0, 3)}change link Home`:
            case `${content.slice(0, 3)}Change Link Home`:
            case `${content.slice(0, 3)}change link Home`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Home`.toLowerCase():
            case `${content.slice(0, 3)}change the link /home`:
            case `${content.slice(0, 3)}Change the link /home`:
            case `${content.slice(0, 3)}change The link /home`:
            case `${content.slice(0, 3)}Change the Link /home`:
            case `${content.slice(0, 3)}change the link /Home`:
            case `${content.slice(0, 3)}Change The Link /Home`:
            case `${content.slice(0, 3)}change the link /Home`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Home`.toLowerCase():
            case `${content.slice(0, 3)}change link /home`:
            case `${content.slice(0, 3)}Change link /home`:
            case `${content.slice(0, 3)}change Link /home`:
            case `${content.slice(0, 3)}change link /Home`:
            case `${content.slice(0, 3)}Change Link /Home`:
            case `${content.slice(0, 3)}change link /Home`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Home`.toLowerCase():
                dispatch(changeLinkAction("dashboard"));
                router.push("/");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - dashboard`:
            case `${content.slice(0, 3)} Change the link - dashboard`:
            case `${content.slice(0, 3)} Change the link - dashboard`:
            case `${content.slice(0, 3)} Change the link - dashboard`:
            case `${content.slice(0, 3)} change the link - Dashboard`:
            case `${content.slice(0, 3)} Change The Link - Dashboard`:
            case `${content.slice(0, 3)} change the link - Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Dashboard`.toLowerCase():
            case `${content.slice(0, 3)} change link - dashboard`:
            case `${content.slice(0, 3)} Change link - dashboard`:
            case `${content.slice(0, 3)} change Link - dashboard`:
            case `${content.slice(0, 3)} change link - Dashboard`:
            case `${content.slice(0, 3)} Change Link - Dashboard`:
            case `${content.slice(0, 3)} change link - Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Dashboard`.toLowerCase():
            case `${content.slice(0, 3)} change the link dashboard`:
            case `${content.slice(0, 3)} Change the link dashboard`:
            case `${content.slice(0, 3)} change The link dashboard`:
            case `${content.slice(0, 3)} Change the Link dashboard`:
            case `${content.slice(0, 3)} change the link Dashboard`:
            case `${content.slice(0, 3)} Change The Link Dashboard`:
            case `${content.slice(0, 3)} change the link Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Dashboard`.toLowerCase():
            case `${content.slice(0, 3)} change link dashboard`:
            case `${content.slice(0, 3)} Change link dashboard`:
            case `${content.slice(0, 3)} change Link dashboard`:
            case `${content.slice(0, 3)} change link Dashboard`:
            case `${content.slice(0, 3)} Change Link Dashboard`:
            case `${content.slice(0, 3)} change link Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Dashboard`.toLowerCase():
            case `${content.slice(0, 3)} change the link /dashboard`:
            case `${content.slice(0, 3)} Change the link /dashboard`:
            case `${content.slice(0, 3)} change The link /dashboard`:
            case `${content.slice(0, 3)} Change the Link /dashboard`:
            case `${content.slice(0, 3)} change the link /Dashboard`:
            case `${content.slice(0, 3)} Change The Link /Dashboard`:
            case `${content.slice(0, 3)} change the link /Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Dashboard`.toLowerCase():
            case `${content.slice(0, 3)} change link /dashboard`:
            case `${content.slice(0, 3)} Change link /dashboard`:
            case `${content.slice(0, 3)} change Link /dashboard`:
            case `${content.slice(0, 3)} change link /Dashboard`:
            case `${content.slice(0, 3)} Change Link /Dashboard`:
            case `${content.slice(0, 3)} change link /Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change the link - dashboard`:
            case `${content.slice(0, 3)}Change the link - dashboard`:
            case `${content.slice(0, 3)}Change the link - dashboard`:
            case `${content.slice(0, 3)}Change the link - dashboard`:
            case `${content.slice(0, 3)}change the link - Dashboard`:
            case `${content.slice(0, 3)}Change The Link - Dashboard`:
            case `${content.slice(0, 3)}change the link - Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change link - dashboard`:
            case `${content.slice(0, 3)}Change link - dashboard`:
            case `${content.slice(0, 3)}change Link - dashboard`:
            case `${content.slice(0, 3)}change link - Dashboard`:
            case `${content.slice(0, 3)}Change Link - Dashboard`:
            case `${content.slice(0, 3)}change link - Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change the link dashboard`:
            case `${content.slice(0, 3)}Change the link dashboard`:
            case `${content.slice(0, 3)}change The link dashboard`:
            case `${content.slice(0, 3)}Change the Link dashboard`:
            case `${content.slice(0, 3)}change the link Dashboard`:
            case `${content.slice(0, 3)}Change The Link Dashboard`:
            case `${content.slice(0, 3)}change the link Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change link dashboard`:
            case `${content.slice(0, 3)}Change link dashboard`:
            case `${content.slice(0, 3)}change Link dashboard`:
            case `${content.slice(0, 3)}change link Dashboard`:
            case `${content.slice(0, 3)}Change Link Dashboard`:
            case `${content.slice(0, 3)}change link Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change the link /dashboard`:
            case `${content.slice(0, 3)}Change the link /dashboard`:
            case `${content.slice(0, 3)}change The link /dashboard`:
            case `${content.slice(0, 3)}Change the Link /dashboard`:
            case `${content.slice(0, 3)}change the link /Dashboard`:
            case `${content.slice(0, 3)}Change The Link /Dashboard`:
            case `${content.slice(0, 3)}change the link /Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change link /dashboard`:
            case `${content.slice(0, 3)}Change link /dashboard`:
            case `${content.slice(0, 3)}change Link /dashboard`:
            case `${content.slice(0, 3)}change link /Dashboard`:
            case `${content.slice(0, 3)}Change Link /Dashboard`:
            case `${content.slice(0, 3)}change link /Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Dashboard`.toLowerCase():
                dispatch(changeLinkAction("dashboard"));
                router.push("/dashboard");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - settings`:
            case `${content.slice(0, 3)} Change the link - settings`:
            case `${content.slice(0, 3)} Change the link - settings`:
            case `${content.slice(0, 3)} Change the link - settings`:
            case `${content.slice(0, 3)} change the link - Settings`:
            case `${content.slice(0, 3)} Change The Link - Settings`:
            case `${content.slice(0, 3)} change the link - Settings`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Settings`.toLowerCase():
            case `${content.slice(0, 3)} change link - settings`:
            case `${content.slice(0, 3)} Change link - settings`:
            case `${content.slice(0, 3)} change Link - settings`:
            case `${content.slice(0, 3)} change link - Settings`:
            case `${content.slice(0, 3)} Change Link - Settings`:
            case `${content.slice(0, 3)} change link - Settings`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Settings`.toLowerCase():
            case `${content.slice(0, 3)} change the link settings`:
            case `${content.slice(0, 3)} Change the link settings`:
            case `${content.slice(0, 3)} change The link settings`:
            case `${content.slice(0, 3)} Change the Link settings`:
            case `${content.slice(0, 3)} change the link Settings`:
            case `${content.slice(0, 3)} Change The Link Settings`:
            case `${content.slice(0, 3)} change the link Dashboard`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Dashboard`.toLowerCase():
            case `${content.slice(0, 3)} change link settings`:
            case `${content.slice(0, 3)} Change link settings`:
            case `${content.slice(0, 3)} change Link settings`:
            case `${content.slice(0, 3)} change link Settings`:
            case `${content.slice(0, 3)} Change Link Settings`:
            case `${content.slice(0, 3)} change link Settings`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Settings`.toLowerCase():
            case `${content.slice(0, 3)} change the link /settings`:
            case `${content.slice(0, 3)} Change the link /settings`:
            case `${content.slice(0, 3)} change The link /settings`:
            case `${content.slice(0, 3)} Change the Link /settings`:
            case `${content.slice(0, 3)} change the link /Settings`:
            case `${content.slice(0, 3)} Change The Link /Settings`:
            case `${content.slice(0, 3)} change the link /Settings`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Settings`.toLowerCase():
            case `${content.slice(0, 3)} change link /settings`:
            case `${content.slice(0, 3)} Change link /settings`:
            case `${content.slice(0, 3)} change Link /settings`:
            case `${content.slice(0, 3)} change link /Settings`:
            case `${content.slice(0, 3)} Change Link /Settings`:
            case `${content.slice(0, 3)} change link /Settings`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Settings`.toLowerCase():
            case `${content.slice(0, 3)}change the link - settings`:
            case `${content.slice(0, 3)}Change the link - settings`:
            case `${content.slice(0, 3)}Change the link - settings`:
            case `${content.slice(0, 3)}Change the link - settings`:
            case `${content.slice(0, 3)}change the link - Settings`:
            case `${content.slice(0, 3)}Change The Link - Settings`:
            case `${content.slice(0, 3)}change the link - Settings`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Settings`.toLowerCase():
            case `${content.slice(0, 3)}change link - settings`:
            case `${content.slice(0, 3)}Change link - settings`:
            case `${content.slice(0, 3)}change Link - settings`:
            case `${content.slice(0, 3)}change link - Settings`:
            case `${content.slice(0, 3)}Change Link - Settings`:
            case `${content.slice(0, 3)}change link - Settings`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Settings`.toLowerCase():
            case `${content.slice(0, 3)}change the link settings`:
            case `${content.slice(0, 3)}Change the link settings`:
            case `${content.slice(0, 3)}change The link settings`:
            case `${content.slice(0, 3)}Change the Link settings`:
            case `${content.slice(0, 3)}change the link Settings`:
            case `${content.slice(0, 3)}Change The Link Settings`:
            case `${content.slice(0, 3)}change the link Dashboard`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Dashboard`.toLowerCase():
            case `${content.slice(0, 3)}change link settings`:
            case `${content.slice(0, 3)}Change link settings`:
            case `${content.slice(0, 3)}change Link settings`:
            case `${content.slice(0, 3)}change link Settings`:
            case `${content.slice(0, 3)}Change Link Settings`:
            case `${content.slice(0, 3)}change link Settings`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Settings`.toLowerCase():
            case `${content.slice(0, 3)}change the link /settings`:
            case `${content.slice(0, 3)}Change the link /settings`:
            case `${content.slice(0, 3)}change The link /settings`:
            case `${content.slice(0, 3)}Change the Link /settings`:
            case `${content.slice(0, 3)}change the link /Settings`:
            case `${content.slice(0, 3)}Change The Link /Settings`:
            case `${content.slice(0, 3)}change the link /Settings`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Settings`.toLowerCase():
            case `${content.slice(0, 3)}change link /settings`:
            case `${content.slice(0, 3)}Change link /settings`:
            case `${content.slice(0, 3)}change Link /settings`:
            case `${content.slice(0, 3)}change link /Settings`:
            case `${content.slice(0, 3)}Change Link /Settings`:
            case `${content.slice(0, 3)}change link /Settings`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Settings`.toLowerCase():
                dispatch(changeLinkAction("settings"));
                router.push("/settings");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - profile`:
            case `${content.slice(0, 3)} Change the link - profile`:
            case `${content.slice(0, 3)} Change the link - profile`:
            case `${content.slice(0, 3)} Change the link - profile`:
            case `${content.slice(0, 3)} change the link - Profile`:
            case `${content.slice(0, 3)} Change The Link - Profile`:
            case `${content.slice(0, 3)} change the link - Profile`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Profile`.toLowerCase():
            case `${content.slice(0, 3)} change link - profile`:
            case `${content.slice(0, 3)} Change link - profile`:
            case `${content.slice(0, 3)} change Link - profile`:
            case `${content.slice(0, 3)} change link - Profile`:
            case `${content.slice(0, 3)} Change Link - Profile`:
            case `${content.slice(0, 3)} change link - Profile`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Profile`.toLowerCase():
            case `${content.slice(0, 3)} change the link profile`:
            case `${content.slice(0, 3)} Change the link profile`:
            case `${content.slice(0, 3)} change The link profile`:
            case `${content.slice(0, 3)} Change the Link profile`:
            case `${content.slice(0, 3)} change the link Profile`:
            case `${content.slice(0, 3)} Change The Link Profile`:
            case `${content.slice(0, 3)} change the link Profile`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Profile`.toLowerCase():
            case `${content.slice(0, 3)} change link profile`:
            case `${content.slice(0, 3)} Change link profile`:
            case `${content.slice(0, 3)} change Link profile`:
            case `${content.slice(0, 3)} change link Profile`:
            case `${content.slice(0, 3)} Change Link Profile`:
            case `${content.slice(0, 3)} change link Profile`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Profile`.toLowerCase():
            case `${content.slice(0, 3)} change the link /profile`:
            case `${content.slice(0, 3)} Change the link /profile`:
            case `${content.slice(0, 3)} change The link /profile`:
            case `${content.slice(0, 3)} Change the Link /profile`:
            case `${content.slice(0, 3)} change the link /Profile`:
            case `${content.slice(0, 3)} Change The Link /Profile`:
            case `${content.slice(0, 3)} change the link /Profile`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Profile`.toLowerCase():
            case `${content.slice(0, 3)} change link /profile`:
            case `${content.slice(0, 3)} Change link /profile`:
            case `${content.slice(0, 3)} change Link /profile`:
            case `${content.slice(0, 3)} change link /Profile`:
            case `${content.slice(0, 3)} Change Link /Profile`:
            case `${content.slice(0, 3)} change link /Profile`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Profile`.toLowerCase():
            case `${content.slice(0, 3)}change the link - profile`:
            case `${content.slice(0, 3)}Change the link - profile`:
            case `${content.slice(0, 3)}Change the link - profile`:
            case `${content.slice(0, 3)}Change the link - profile`:
            case `${content.slice(0, 3)}change the link - Profile`:
            case `${content.slice(0, 3)}Change The Link - Profile`:
            case `${content.slice(0, 3)}change the link - Profile`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Profile`.toLowerCase():
            case `${content.slice(0, 3)}change link - profile`:
            case `${content.slice(0, 3)}Change link - profile`:
            case `${content.slice(0, 3)}change Link - profile`:
            case `${content.slice(0, 3)}change link - Profile`:
            case `${content.slice(0, 3)}Change Link - Profile`:
            case `${content.slice(0, 3)}change link - Profile`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Profile`.toLowerCase():
            case `${content.slice(0, 3)}change the link profile`:
            case `${content.slice(0, 3)}Change the link profile`:
            case `${content.slice(0, 3)}change The link profile`:
            case `${content.slice(0, 3)}Change the Link profile`:
            case `${content.slice(0, 3)}change the link Profile`:
            case `${content.slice(0, 3)}Change The Link Profile`:
            case `${content.slice(0, 3)}change the link Profile`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Profile`.toLowerCase():
            case `${content.slice(0, 3)}change link profile`:
            case `${content.slice(0, 3)}Change link profile`:
            case `${content.slice(0, 3)}change Link profile`:
            case `${content.slice(0, 3)}change link Profile`:
            case `${content.slice(0, 3)}Change Link Profile`:
            case `${content.slice(0, 3)}change link Profile`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Profile`.toLowerCase():
            case `${content.slice(0, 3)}change the link /profile`:
            case `${content.slice(0, 3)}Change the link /profile`:
            case `${content.slice(0, 3)}change The link /profile`:
            case `${content.slice(0, 3)}Change the Link /profile`:
            case `${content.slice(0, 3)}change the link /Profile`:
            case `${content.slice(0, 3)}Change The Link /Profile`:
            case `${content.slice(0, 3)}change the link /Profile`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Profile`.toLowerCase():
            case `${content.slice(0, 3)}change link /profile`:
            case `${content.slice(0, 3)}Change link /profile`:
            case `${content.slice(0, 3)}change Link /profile`:
            case `${content.slice(0, 3)}change link /Profile`:
            case `${content.slice(0, 3)}Change Link /Profile`:
            case `${content.slice(0, 3)}change link /Profile`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Profile`.toLowerCase():
                dispatch(changeLinkAction("profile"));
                router.push("/profile");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - business`:
            case `${content.slice(0, 3)} Change the link - business`:
            case `${content.slice(0, 3)} Change the link - business`:
            case `${content.slice(0, 3)} Change the link - business`:
            case `${content.slice(0, 3)} change the link - Business`:
            case `${content.slice(0, 3)} Change The Link - Business`:
            case `${content.slice(0, 3)} change the link - Business`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Business`.toLowerCase():
            case `${content.slice(0, 3)} change link - business`:
            case `${content.slice(0, 3)} Change link - business`:
            case `${content.slice(0, 3)} change Link - business`:
            case `${content.slice(0, 3)} change link - Business`:
            case `${content.slice(0, 3)} Change Link - Business`:
            case `${content.slice(0, 3)} change link - Business`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Business`.toLowerCase():
            case `${content.slice(0, 3)} change the link business`:
            case `${content.slice(0, 3)} Change the link business`:
            case `${content.slice(0, 3)} change The link business`:
            case `${content.slice(0, 3)} Change the Link business`:
            case `${content.slice(0, 3)} change the link Business`:
            case `${content.slice(0, 3)} Change The Link Business`:
            case `${content.slice(0, 3)} change the link Business`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Business`.toLowerCase():
            case `${content.slice(0, 3)} change link business`:
            case `${content.slice(0, 3)} Change link business`:
            case `${content.slice(0, 3)} change Link business`:
            case `${content.slice(0, 3)} change link Business`:
            case `${content.slice(0, 3)} Change Link Business`:
            case `${content.slice(0, 3)} change link Business`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Business`.toLowerCase():
            case `${content.slice(0, 3)} change the link /business`:
            case `${content.slice(0, 3)} Change the link /business`:
            case `${content.slice(0, 3)} change The link /business`:
            case `${content.slice(0, 3)} Change the Link /business`:
            case `${content.slice(0, 3)} change the link /Business`:
            case `${content.slice(0, 3)} Change The Link /Business`:
            case `${content.slice(0, 3)} change the link /Business`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Business`.toLowerCase():
            case `${content.slice(0, 3)} change link /business`:
            case `${content.slice(0, 3)} Change link /business`:
            case `${content.slice(0, 3)} change Link /business`:
            case `${content.slice(0, 3)} change link /Business`:
            case `${content.slice(0, 3)} Change Link /Business`:
            case `${content.slice(0, 3)} change link /Business`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Business`.toLowerCase():
            case `${content.slice(0, 3)}change the link - business`:
            case `${content.slice(0, 3)}Change the link - business`:
            case `${content.slice(0, 3)}Change the link - business`:
            case `${content.slice(0, 3)}Change the link - business`:
            case `${content.slice(0, 3)}change the link - Business`:
            case `${content.slice(0, 3)}Change The Link - Business`:
            case `${content.slice(0, 3)}change the link - Business`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Business`.toLowerCase():
            case `${content.slice(0, 3)}change link - business`:
            case `${content.slice(0, 3)}Change link - business`:
            case `${content.slice(0, 3)}change Link - business`:
            case `${content.slice(0, 3)}change link - Business`:
            case `${content.slice(0, 3)}Change Link - Business`:
            case `${content.slice(0, 3)}change link - Business`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Business`.toLowerCase():
            case `${content.slice(0, 3)}change the link business`:
            case `${content.slice(0, 3)}Change the link business`:
            case `${content.slice(0, 3)}change The link business`:
            case `${content.slice(0, 3)}Change the Link business`:
            case `${content.slice(0, 3)}change the link Business`:
            case `${content.slice(0, 3)}Change The Link Business`:
            case `${content.slice(0, 3)}change the link Business`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Business`.toLowerCase():
            case `${content.slice(0, 3)}change link business`:
            case `${content.slice(0, 3)}Change link business`:
            case `${content.slice(0, 3)}change Link business`:
            case `${content.slice(0, 3)}change link Business`:
            case `${content.slice(0, 3)}Change Link Business`:
            case `${content.slice(0, 3)}change link Business`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Business`.toLowerCase():
            case `${content.slice(0, 3)}change the link /business`:
            case `${content.slice(0, 3)}Change the link /business`:
            case `${content.slice(0, 3)}change The link /business`:
            case `${content.slice(0, 3)}Change the Link /business`:
            case `${content.slice(0, 3)}change the link /Business`:
            case `${content.slice(0, 3)}Change The Link /Business`:
            case `${content.slice(0, 3)}change the link /Business`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Business`.toLowerCase():
            case `${content.slice(0, 3)}change link /business`:
            case `${content.slice(0, 3)}Change link /business`:
            case `${content.slice(0, 3)}change Link /business`:
            case `${content.slice(0, 3)}change link /Business`:
            case `${content.slice(0, 3)}Change Link /Business`:
            case `${content.slice(0, 3)}change link /Business`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Business`.toLowerCase():
                dispatch(changeLinkAction("business"));
                router.push("/business");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - courses`:
            case `${content.slice(0, 3)} Change the link - courses`:
            case `${content.slice(0, 3)} Change the link - courses`:
            case `${content.slice(0, 3)} Change the link - courses`:
            case `${content.slice(0, 3)} change the link - Courses`:
            case `${content.slice(0, 3)} Change The Link - Courses`:
            case `${content.slice(0, 3)} change the link - Courses`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Courses`.toLowerCase():
            case `${content.slice(0, 3)} change link - courses`:
            case `${content.slice(0, 3)} Change link - courses`:
            case `${content.slice(0, 3)} change Link - courses`:
            case `${content.slice(0, 3)} change link - Courses`:
            case `${content.slice(0, 3)} Change Link - Courses`:
            case `${content.slice(0, 3)} change link - Courses`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Courses`.toLowerCase():
            case `${content.slice(0, 3)} change the link courses`:
            case `${content.slice(0, 3)} Change the link courses`:
            case `${content.slice(0, 3)} change The link courses`:
            case `${content.slice(0, 3)} Change the Link courses`:
            case `${content.slice(0, 3)} change the link Courses`:
            case `${content.slice(0, 3)} Change The Link Courses`:
            case `${content.slice(0, 3)} change the link Courses`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Courses`.toLowerCase():
            case `${content.slice(0, 3)} change link courses`:
            case `${content.slice(0, 3)} Change link courses`:
            case `${content.slice(0, 3)} change Link courses`:
            case `${content.slice(0, 3)} change link Courses`:
            case `${content.slice(0, 3)} Change Link Courses`:
            case `${content.slice(0, 3)} change link Courses`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Courses`.toLowerCase():
            case `${content.slice(0, 3)} change the link /courses`:
            case `${content.slice(0, 3)} Change the link /courses`:
            case `${content.slice(0, 3)} change The link /courses`:
            case `${content.slice(0, 3)} Change the Link /courses`:
            case `${content.slice(0, 3)} change the link /Courses`:
            case `${content.slice(0, 3)} Change The Link /Courses`:
            case `${content.slice(0, 3)} change the link /Courses`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Courses`.toLowerCase():
            case `${content.slice(0, 3)} change link /courses`:
            case `${content.slice(0, 3)} Change link /courses`:
            case `${content.slice(0, 3)} change Link /courses`:
            case `${content.slice(0, 3)} change link /Courses`:
            case `${content.slice(0, 3)} Change Link /Courses`:
            case `${content.slice(0, 3)} change link /Courses`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Courses`.toLowerCase():
            case `${content.slice(0, 3)}change the link - courses`:
            case `${content.slice(0, 3)}Change the link - courses`:
            case `${content.slice(0, 3)}Change the link - courses`:
            case `${content.slice(0, 3)}Change the link - courses`:
            case `${content.slice(0, 3)}change the link - Courses`:
            case `${content.slice(0, 3)}Change The Link - Courses`:
            case `${content.slice(0, 3)}change the link - Courses`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Courses`.toLowerCase():
            case `${content.slice(0, 3)}change link - courses`:
            case `${content.slice(0, 3)}Change link - courses`:
            case `${content.slice(0, 3)}change Link - courses`:
            case `${content.slice(0, 3)}change link - Courses`:
            case `${content.slice(0, 3)}Change Link - Courses`:
            case `${content.slice(0, 3)}change link - Courses`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Courses`.toLowerCase():
            case `${content.slice(0, 3)}change the link courses`:
            case `${content.slice(0, 3)}Change the link courses`:
            case `${content.slice(0, 3)}change The link courses`:
            case `${content.slice(0, 3)}Change the Link courses`:
            case `${content.slice(0, 3)}change the link Courses`:
            case `${content.slice(0, 3)}Change The Link Courses`:
            case `${content.slice(0, 3)}change the link Courses`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Courses`.toLowerCase():
            case `${content.slice(0, 3)}change link courses`:
            case `${content.slice(0, 3)}Change link courses`:
            case `${content.slice(0, 3)}change Link courses`:
            case `${content.slice(0, 3)}change link Courses`:
            case `${content.slice(0, 3)}Change Link Courses`:
            case `${content.slice(0, 3)}change link Courses`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Courses`.toLowerCase():
            case `${content.slice(0, 3)}change the link /courses`:
            case `${content.slice(0, 3)}Change the link /courses`:
            case `${content.slice(0, 3)}change The link /courses`:
            case `${content.slice(0, 3)}Change the Link /courses`:
            case `${content.slice(0, 3)}change the link /Courses`:
            case `${content.slice(0, 3)}Change The Link /Courses`:
            case `${content.slice(0, 3)}change the link /Courses`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Courses`.toLowerCase():
            case `${content.slice(0, 3)}change link /courses`:
            case `${content.slice(0, 3)}Change link /courses`:
            case `${content.slice(0, 3)}change Link /courses`:
            case `${content.slice(0, 3)}change link /Courses`:
            case `${content.slice(0, 3)}Change Link /Courses`:
            case `${content.slice(0, 3)}change link /Courses`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Courses`.toLowerCase():
                dispatch(changeLinkAction("courses"));
                router.push("/courses");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - friends`:
            case `${content.slice(0, 3)} Change the link - friends`:
            case `${content.slice(0, 3)} Change the link - friends`:
            case `${content.slice(0, 3)} Change the link - friends`:
            case `${content.slice(0, 3)} change the link - Friends`:
            case `${content.slice(0, 3)} Change The Link - Friends`:
            case `${content.slice(0, 3)} change the link - Friends`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Friends`.toLowerCase():
            case `${content.slice(0, 3)} change link - friends`:
            case `${content.slice(0, 3)} Change link - friends`:
            case `${content.slice(0, 3)} change Link - friends`:
            case `${content.slice(0, 3)} change link - Friends`:
            case `${content.slice(0, 3)} Change Link - Friends`:
            case `${content.slice(0, 3)} change link - Friends`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Friends`.toLowerCase():
            case `${content.slice(0, 3)} change the link friends`:
            case `${content.slice(0, 3)} Change the link friends`:
            case `${content.slice(0, 3)} change The link friends`:
            case `${content.slice(0, 3)} Change the Link friends`:
            case `${content.slice(0, 3)} change the link Friends`:
            case `${content.slice(0, 3)} Change The Link Friends`:
            case `${content.slice(0, 3)} change the link Friends`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Friends`.toLowerCase():
            case `${content.slice(0, 3)} change link friends`:
            case `${content.slice(0, 3)} Change link friends`:
            case `${content.slice(0, 3)} change Link friends`:
            case `${content.slice(0, 3)} change link Friends`:
            case `${content.slice(0, 3)} Change Link Friends`:
            case `${content.slice(0, 3)} change link Friends`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Friends`.toLowerCase():
            case `${content.slice(0, 3)} change the link /friends`:
            case `${content.slice(0, 3)} Change the link /friends`:
            case `${content.slice(0, 3)} change The link /friends`:
            case `${content.slice(0, 3)} Change the Link /friends`:
            case `${content.slice(0, 3)} change the link /Friends`:
            case `${content.slice(0, 3)} Change The Link /Friends`:
            case `${content.slice(0, 3)} change the link /Friends`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Friends`.toLowerCase():
            case `${content.slice(0, 3)} change link /friends`:
            case `${content.slice(0, 3)} Change link /friends`:
            case `${content.slice(0, 3)} change Link /friends`:
            case `${content.slice(0, 3)} change link /Friends`:
            case `${content.slice(0, 3)} Change Link /Friends`:
            case `${content.slice(0, 3)} change link /Friends`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Friends`.toLowerCase():
            case `${content.slice(0, 3)}change the link - friends`:
            case `${content.slice(0, 3)}Change the link - friends`:
            case `${content.slice(0, 3)}Change the link - friends`:
            case `${content.slice(0, 3)}Change the link - friends`:
            case `${content.slice(0, 3)}change the link - Friends`:
            case `${content.slice(0, 3)}Change The Link - Friends`:
            case `${content.slice(0, 3)}change the link - Friends`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Friends`.toLowerCase():
            case `${content.slice(0, 3)}change link - friends`:
            case `${content.slice(0, 3)}Change link - friends`:
            case `${content.slice(0, 3)}change Link - friends`:
            case `${content.slice(0, 3)}change link - Friends`:
            case `${content.slice(0, 3)}Change Link - Friends`:
            case `${content.slice(0, 3)}change link - Friends`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Friends`.toLowerCase():
            case `${content.slice(0, 3)}change the link friends`:
            case `${content.slice(0, 3)}Change the link friends`:
            case `${content.slice(0, 3)}change The link friends`:
            case `${content.slice(0, 3)}Change the Link friends`:
            case `${content.slice(0, 3)}change the link Friends`:
            case `${content.slice(0, 3)}Change The Link Friends`:
            case `${content.slice(0, 3)}change the link Friends`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Friends`.toLowerCase():
            case `${content.slice(0, 3)}change link friends`:
            case `${content.slice(0, 3)}Change link friends`:
            case `${content.slice(0, 3)}change Link friends`:
            case `${content.slice(0, 3)}change link Friends`:
            case `${content.slice(0, 3)}Change Link Friends`:
            case `${content.slice(0, 3)}change link Friends`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Friends`.toLowerCase():
            case `${content.slice(0, 3)}change the link /friends`:
            case `${content.slice(0, 3)}Change the link /friends`:
            case `${content.slice(0, 3)}change The link /friends`:
            case `${content.slice(0, 3)}Change the Link /friends`:
            case `${content.slice(0, 3)}change the link /Friends`:
            case `${content.slice(0, 3)}Change The Link /Friends`:
            case `${content.slice(0, 3)}change the link /Friends`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Friends`.toLowerCase():
            case `${content.slice(0, 3)}change link /friends`:
            case `${content.slice(0, 3)}Change link /friends`:
            case `${content.slice(0, 3)}change Link /friends`:
            case `${content.slice(0, 3)}change link /Friends`:
            case `${content.slice(0, 3)}Change Link /Friends`:
            case `${content.slice(0, 3)}change link /Friends`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Friends`.toLowerCase():
                dispatch(changeLinkAction("friends"));
                router.push("/friends");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - plans`:
            case `${content.slice(0, 3)} Change the link - plans`:
            case `${content.slice(0, 3)} Change the link - plans`:
            case `${content.slice(0, 3)} Change the link - plans`:
            case `${content.slice(0, 3)} change the link - Plans`:
            case `${content.slice(0, 3)} Change The Link - Plans`:
            case `${content.slice(0, 3)} change the link - Plans`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Plans`.toLowerCase():
            case `${content.slice(0, 3)} change link - plans`:
            case `${content.slice(0, 3)} Change link - plans`:
            case `${content.slice(0, 3)} change Link - plans`:
            case `${content.slice(0, 3)} change link - Plans`:
            case `${content.slice(0, 3)} Change Link - Plans`:
            case `${content.slice(0, 3)} change link - Plans`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Plans`.toLowerCase():
            case `${content.slice(0, 3)} change the link plans`:
            case `${content.slice(0, 3)} Change the link plans`:
            case `${content.slice(0, 3)} change The link plans`:
            case `${content.slice(0, 3)} Change the Link plans`:
            case `${content.slice(0, 3)} change the link Plans`:
            case `${content.slice(0, 3)} Change The Link Plans`:
            case `${content.slice(0, 3)} change the link Plans`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Plans`.toLowerCase():
            case `${content.slice(0, 3)} change link plans`:
            case `${content.slice(0, 3)} Change link plans`:
            case `${content.slice(0, 3)} change Link plans`:
            case `${content.slice(0, 3)} change link Plans`:
            case `${content.slice(0, 3)} Change Link Plans`:
            case `${content.slice(0, 3)} change link Plans`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Plans`.toLowerCase():
            case `${content.slice(0, 3)} change the link /plans`:
            case `${content.slice(0, 3)} Change the link /plans`:
            case `${content.slice(0, 3)} change The link /plans`:
            case `${content.slice(0, 3)} Change the Link /plans`:
            case `${content.slice(0, 3)} change the link /Plans`:
            case `${content.slice(0, 3)} Change The Link /Plans`:
            case `${content.slice(0, 3)} change the link /Plans`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Plans`.toLowerCase():
            case `${content.slice(0, 3)} change link /plans`:
            case `${content.slice(0, 3)} Change link /plans`:
            case `${content.slice(0, 3)} change Link /plans`:
            case `${content.slice(0, 3)} change link /Plans`:
            case `${content.slice(0, 3)} Change Link /Plans`:
            case `${content.slice(0, 3)} change link /Plans`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Plans`.toLowerCase():
            case `${content.slice(0, 3)}change the link - plans`:
            case `${content.slice(0, 3)}Change the link - plans`:
            case `${content.slice(0, 3)}Change the link - plans`:
            case `${content.slice(0, 3)}Change the link - plans`:
            case `${content.slice(0, 3)}change the link - Plans`:
            case `${content.slice(0, 3)}Change The Link - Plans`:
            case `${content.slice(0, 3)}change the link - Plans`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Plans`.toLowerCase():
            case `${content.slice(0, 3)}change link - plans`:
            case `${content.slice(0, 3)}Change link - plans`:
            case `${content.slice(0, 3)}change Link - plans`:
            case `${content.slice(0, 3)}change link - Plans`:
            case `${content.slice(0, 3)}Change Link - Plans`:
            case `${content.slice(0, 3)}change link - Plans`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Plans`.toLowerCase():
            case `${content.slice(0, 3)}change the link plans`:
            case `${content.slice(0, 3)}Change the link plans`:
            case `${content.slice(0, 3)}change The link plans`:
            case `${content.slice(0, 3)}Change the Link plans`:
            case `${content.slice(0, 3)}change the link Plans`:
            case `${content.slice(0, 3)}Change The Link Plans`:
            case `${content.slice(0, 3)}change the link Plans`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Plans`.toLowerCase():
            case `${content.slice(0, 3)}change link plans`:
            case `${content.slice(0, 3)}Change link plans`:
            case `${content.slice(0, 3)}change Link plans`:
            case `${content.slice(0, 3)}change link Plans`:
            case `${content.slice(0, 3)}Change Link Plans`:
            case `${content.slice(0, 3)}change link Plans`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Plans`.toLowerCase():
            case `${content.slice(0, 3)}change the link /plans`:
            case `${content.slice(0, 3)}Change the link /plans`:
            case `${content.slice(0, 3)}change The link /plans`:
            case `${content.slice(0, 3)}Change the Link /plans`:
            case `${content.slice(0, 3)}change the link /Plans`:
            case `${content.slice(0, 3)}Change The Link /Plans`:
            case `${content.slice(0, 3)}change the link /Plans`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Plans`.toLowerCase():
            case `${content.slice(0, 3)}change link /plans`:
            case `${content.slice(0, 3)}Change link /plans`:
            case `${content.slice(0, 3)}change Link /plans`:
            case `${content.slice(0, 3)}change link /Plans`:
            case `${content.slice(0, 3)}Change Link /Plans`:
            case `${content.slice(0, 3)}change link /Plans`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Plans`.toLowerCase():
                dispatch(changeLinkAction("plans"));
                router.push("/plans");
                dispatch(sendChatBotMessageAction({ content: "Done.", isBotMessage: true }));
                break;

            case `${content.slice(0, 3)} change the link - chat-bot`:
            case `${content.slice(0, 3)} Change the link - chat-bot`:
            case `${content.slice(0, 3)} Change the link - chat-bot`:
            case `${content.slice(0, 3)} Change the link - chat-bot`:
            case `${content.slice(0, 3)} change the link - Chat-bot`:
            case `${content.slice(0, 3)} Change The Link - Chat-bot`:
            case `${content.slice(0, 3)} change the link - Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link - Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)} change link - chat-bot`:
            case `${content.slice(0, 3)} Change link - chat-bot`:
            case `${content.slice(0, 3)} change Link - chat-bot`:
            case `${content.slice(0, 3)} change link - Chat-bot`:
            case `${content.slice(0, 3)} Change Link - Chat-bot`:
            case `${content.slice(0, 3)} change link - Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} Change Link - Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)} change the link chat-bot`:
            case `${content.slice(0, 3)} Change the link chat-bot`:
            case `${content.slice(0, 3)} change The link chat-bot`:
            case `${content.slice(0, 3)} Change the Link chat-bot`:
            case `${content.slice(0, 3)} change the link Chat-bot`:
            case `${content.slice(0, 3)} Change The Link Chat-bot`:
            case `${content.slice(0, 3)} change the link Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)} change link chat-bot`:
            case `${content.slice(0, 3)} Change link chat-bot`:
            case `${content.slice(0, 3)} change Link chat-bot`:
            case `${content.slice(0, 3)} change link Chat-bot`:
            case `${content.slice(0, 3)} Change Link Chat-bot`:
            case `${content.slice(0, 3)} change link Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} Change Link Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)} change the link /chat-bot`:
            case `${content.slice(0, 3)} Change the link /chat-bot`:
            case `${content.slice(0, 3)} change The link /chat-bot`:
            case `${content.slice(0, 3)} Change the Link /chat-bot`:
            case `${content.slice(0, 3)} change the link /Chat-bot`:
            case `${content.slice(0, 3)} Change The Link /Chat-bot`:
            case `${content.slice(0, 3)} change the link /Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} Change The Link /Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)} change link /chat-bot`:
            case `${content.slice(0, 3)} Change link /chat-bot`:
            case `${content.slice(0, 3)} change Link /chat-bot`:
            case `${content.slice(0, 3)} change link /Chat-bot`:
            case `${content.slice(0, 3)} Change Link /Chat-bot`:
            case `${content.slice(0, 3)} change link /Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} Change Link /Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}change the link - chat-bot`:
            case `${content.slice(0, 3)}Change the link - chat-bot`:
            case `${content.slice(0, 3)}Change the link - chat-bot`:
            case `${content.slice(0, 3)}Change the link - chat-bot`:
            case `${content.slice(0, 3)}change the link - Chat-bot`:
            case `${content.slice(0, 3)}Change The Link - Chat-bot`:
            case `${content.slice(0, 3)}change the link - Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link - Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}change link - chat-bot`:
            case `${content.slice(0, 3)}Change link - chat-bot`:
            case `${content.slice(0, 3)}change Link - chat-bot`:
            case `${content.slice(0, 3)}change link - Chat-bot`:
            case `${content.slice(0, 3)}Change Link - Chat-bot`:
            case `${content.slice(0, 3)}change link - Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}Change Link - Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}change the link chat-bot`:
            case `${content.slice(0, 3)}Change the link chat-bot`:
            case `${content.slice(0, 3)}change The link chat-bot`:
            case `${content.slice(0, 3)}Change the Link chat-bot`:
            case `${content.slice(0, 3)}change the link Chat-bot`:
            case `${content.slice(0, 3)}Change The Link Chat-bot`:
            case `${content.slice(0, 3)}change the link Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}change link chat-bot`:
            case `${content.slice(0, 3)}Change link chat-bot`:
            case `${content.slice(0, 3)}change Link chat-bot`:
            case `${content.slice(0, 3)}change link Chat-bot`:
            case `${content.slice(0, 3)}Change Link Chat-bot`:
            case `${content.slice(0, 3)}change link Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}Change Link Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}change the link /chat-bot`:
            case `${content.slice(0, 3)}Change the link /chat-bot`:
            case `${content.slice(0, 3)}change The link /chat-bot`:
            case `${content.slice(0, 3)}Change the Link /chat-bot`:
            case `${content.slice(0, 3)}change the link /Chat-bot`:
            case `${content.slice(0, 3)}Change The Link /Chat-bot`:
            case `${content.slice(0, 3)}change the link /Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}Change The Link /Chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}change link /chat-bot`:
            case `${content.slice(0, 3)}Change link /chat-bot`:
            case `${content.slice(0, 3)}change Link /chat-bot`:
            case `${content.slice(0, 3)}change link /Chat-bot`:
            case `${content.slice(0, 3)}Change Link /Chat-bot`:
            case `${content.slice(0, 3)}change link /Chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}Change Link /Chat-bot`.toLowerCase():
                dispatch(sendChatBotMessageAction({ content: "This is your current link.", isBotMessage: true }));
                break;

            default:
                dispatch(
                    sendChatBotMessageAction({ content: "Sorry but i didn't match your action.", isBotMessage: true })
                );
        }
        return messageType;
    }

    if (messageType === "sayHello") {
        switch (content) {
            case `${content.slice(0, 3)} bot`:
            case `${content.slice(0, 3)} Bot`:
            case `${content.slice(0, 3)} bot`.toUpperCase():
            case `${content.slice(0, 3)} bot`.toLowerCase():
            case `${content.slice(0, 3)} bot.`:
            case `${content.slice(0, 3)} Bot.`:
            case `${content.slice(0, 3)} bot.`.toUpperCase():
            case `${content.slice(0, 3)} bot.`.toLowerCase():
            case `${content.slice(0, 3)} bot!`:
            case `${content.slice(0, 3)} Bot!`:
            case `${content.slice(0, 3)} bot!`.toUpperCase():
            case `${content.slice(0, 3)} bot!`.toLowerCase():
            case `${content.slice(0, 3)} bot !`:
            case `${content.slice(0, 3)} Bot !`:
            case `${content.slice(0, 3)} bot !`.toUpperCase():
            case `${content.slice(0, 3)} bot !`.toLowerCase():
            case `${content.slice(0, 3)} chat bot`:
            case `${content.slice(0, 3)} Chat bot`:
            case `${content.slice(0, 3)} chat Bot`:
            case `${content.slice(0, 3)} Chat Bot`:
            case `${content.slice(0, 3)} chat bot`.toUpperCase():
            case `${content.slice(0, 3)} chat bot`.toLowerCase():
            case `${content.slice(0, 3)} chat bot.`:
            case `${content.slice(0, 3)} Chat bot.`:
            case `${content.slice(0, 3)} chat Bot.`:
            case `${content.slice(0, 3)} Chat Bot.`:
            case `${content.slice(0, 3)} chat bot.`.toUpperCase():
            case `${content.slice(0, 3)} chat bot.`.toLowerCase():
            case `${content.slice(0, 3)} chat bot!`:
            case `${content.slice(0, 3)} Chat bot!`:
            case `${content.slice(0, 3)} chat Bot!`:
            case `${content.slice(0, 3)} Chat Bot!`:
            case `${content.slice(0, 3)} chat bot!`.toUpperCase():
            case `${content.slice(0, 3)} chat bot!`.toLowerCase():
            case `${content.slice(0, 3)} chat bot !`:
            case `${content.slice(0, 3)} Chat bot !`:
            case `${content.slice(0, 3)} chat Bot !`:
            case `${content.slice(0, 3)} Chat Bot !`:
            case `${content.slice(0, 3)} chat bot !`.toUpperCase():
            case `${content.slice(0, 3)} chat bot !`.toLowerCase():
            case `${content.slice(0, 3)} chat-bot`:
            case `${content.slice(0, 3)} Chat-bot`:
            case `${content.slice(0, 3)} chat-bot`.toUpperCase():
            case `${content.slice(0, 3)} chat-bot`.toLowerCase():
            case `${content.slice(0, 3)} chat-bot.`:
            case `${content.slice(0, 3)} Chat-bot.`:
            case `${content.slice(0, 3)} chat-bot.`.toUpperCase():
            case `${content.slice(0, 3)} chat-bot.`.toLowerCase():
            case `${content.slice(0, 3)} chat-bot!`:
            case `${content.slice(0, 3)} Chat-bot!`:
            case `${content.slice(0, 3)} chat-bot!`.toUpperCase():
            case `${content.slice(0, 3)} chat-bot!`.toLowerCase():
            case `${content.slice(0, 3)} chat-bot !`:
            case `${content.slice(0, 3)} Chat-bot !`:
            case `${content.slice(0, 3)} chat-bot !`.toUpperCase():
            case `${content.slice(0, 3)} chat-bot !`.toLowerCase():
            case `${content.slice(0, 3)}bot`:
            case `${content.slice(0, 3)}Bot`:
            case `${content.slice(0, 3)}bot`.toUpperCase():
            case `${content.slice(0, 3)}bot`.toLowerCase():
            case `${content.slice(0, 3)}bot.`:
            case `${content.slice(0, 3)}Bot.`:
            case `${content.slice(0, 3)}bot.`.toUpperCase():
            case `${content.slice(0, 3)}bot.`.toLowerCase():
            case `${content.slice(0, 3)}bot!`:
            case `${content.slice(0, 3)}Bot!`:
            case `${content.slice(0, 3)}bot!`.toUpperCase():
            case `${content.slice(0, 3)}bot!`.toLowerCase():
            case `${content.slice(0, 3)}bot !`:
            case `${content.slice(0, 3)}Bot !`:
            case `${content.slice(0, 3)}bot !`.toUpperCase():
            case `${content.slice(0, 3)}bot !`.toLowerCase():
            case `${content.slice(0, 3)}chat bot`:
            case `${content.slice(0, 3)}Chat bot`:
            case `${content.slice(0, 3)}chat Bot`:
            case `${content.slice(0, 3)}Chat Bot`:
            case `${content.slice(0, 3)}chat bot`.toUpperCase():
            case `${content.slice(0, 3)}chat bot`.toLowerCase():
            case `${content.slice(0, 3)}chat bot.`:
            case `${content.slice(0, 3)}Chat bot.`:
            case `${content.slice(0, 3)}chat Bot.`:
            case `${content.slice(0, 3)}Chat Bot.`:
            case `${content.slice(0, 3)}chat bot.`.toUpperCase():
            case `${content.slice(0, 3)}chat bot.`.toLowerCase():
            case `${content.slice(0, 3)}chat bot!`:
            case `${content.slice(0, 3)}Chat bot!`:
            case `${content.slice(0, 3)}chat Bot!`:
            case `${content.slice(0, 3)}Chat Bot!`:
            case `${content.slice(0, 3)}chat bot!`.toUpperCase():
            case `${content.slice(0, 3)}chat bot!`.toLowerCase():
            case `${content.slice(0, 3)}chat bot !`:
            case `${content.slice(0, 3)}Chat bot !`:
            case `${content.slice(0, 3)}chat Bot !`:
            case `${content.slice(0, 3)}Chat Bot !`:
            case `${content.slice(0, 3)}chat bot !`.toUpperCase():
            case `${content.slice(0, 3)}chat bot !`.toLowerCase():
            case `${content.slice(0, 3)}chat-bot`:
            case `${content.slice(0, 3)}Chat-bot`:
            case `${content.slice(0, 3)}chat-bot`.toUpperCase():
            case `${content.slice(0, 3)}chat-bot`.toLowerCase():
            case `${content.slice(0, 3)}chat-bot.`:
            case `${content.slice(0, 3)}Chat-bot.`:
            case `${content.slice(0, 3)}chat-bot.`.toUpperCase():
            case `${content.slice(0, 3)}chat-bot.`.toLowerCase():
            case `${content.slice(0, 3)}chat-bot!`:
            case `${content.slice(0, 3)}Chat-bot!`:
            case `${content.slice(0, 3)}chat-bot!`.toUpperCase():
            case `${content.slice(0, 3)}chat-bot!`.toLowerCase():
            case `${content.slice(0, 3)}chat-bot !`:
            case `${content.slice(0, 3)}Chat-bot !`:
            case `${content.slice(0, 3)}chat-bot !`.toUpperCase():
            case `${content.slice(0, 3)}chat-bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Yes ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} welcome`:
            case `${content.slice(0, 3)} Welcome`:
            case `${content.slice(0, 3)} welcome`.toUpperCase():
            case `${content.slice(0, 3)} welcome`.toLowerCase():
            case `${content.slice(0, 3)} welcome.`:
            case `${content.slice(0, 3)} Welcome.`:
            case `${content.slice(0, 3)} welcome.`.toUpperCase():
            case `${content.slice(0, 3)} welcome.`.toLowerCase():
            case `${content.slice(0, 3)} welcome!`:
            case `${content.slice(0, 3)} Welcome!`:
            case `${content.slice(0, 3)} welcome!`.toUpperCase():
            case `${content.slice(0, 3)} welcome!`.toLowerCase():
            case `${content.slice(0, 3)} welcome !`:
            case `${content.slice(0, 3)} Welcome !`:
            case `${content.slice(0, 3)} welcome !`.toUpperCase():
            case `${content.slice(0, 3)} welcome !`.toLowerCase():
            case `${content.slice(0, 3)} welcome there`:
            case `${content.slice(0, 3)} Welcome there`:
            case `${content.slice(0, 3)} welcome There`:
            case `${content.slice(0, 3)} Welcome There`:
            case `${content.slice(0, 3)} welcome there`.toUpperCase():
            case `${content.slice(0, 3)} welcome there`.toLowerCase():
            case `${content.slice(0, 3)} welcome there.`:
            case `${content.slice(0, 3)} Welcome there.`:
            case `${content.slice(0, 3)} welcome There.`:
            case `${content.slice(0, 3)} Welcome There.`:
            case `${content.slice(0, 3)} welcome there.`.toUpperCase():
            case `${content.slice(0, 3)} welcome there.`.toLowerCase():
            case `${content.slice(0, 3)} welcome there!`:
            case `${content.slice(0, 3)} Welcome there!`:
            case `${content.slice(0, 3)} welcome There!`:
            case `${content.slice(0, 3)} Welcome There!`:
            case `${content.slice(0, 3)} welcome there!`.toUpperCase():
            case `${content.slice(0, 3)} welcome there!`.toLowerCase():
            case `${content.slice(0, 3)} welcome there !`:
            case `${content.slice(0, 3)} Welcome there !`:
            case `${content.slice(0, 3)} welcome There !`:
            case `${content.slice(0, 3)} Welcome There !`:
            case `${content.slice(0, 3)} welcome there !`.toUpperCase():
            case `${content.slice(0, 3)} welcome there !`.toLowerCase():
            case `${content.slice(0, 3)} welcome bot`:
            case `${content.slice(0, 3)} Welcome bot`:
            case `${content.slice(0, 3)} welcome Bot`:
            case `${content.slice(0, 3)} Welcome Bot`:
            case `${content.slice(0, 3)} welcome bot`.toUpperCase():
            case `${content.slice(0, 3)} welcome bot`.toLowerCase():
            case `${content.slice(0, 3)} welcome bot.`:
            case `${content.slice(0, 3)} Welcome bot.`:
            case `${content.slice(0, 3)} welcome Bot.`:
            case `${content.slice(0, 3)} Welcome Bot.`:
            case `${content.slice(0, 3)} welcome bot.`.toUpperCase():
            case `${content.slice(0, 3)} welcome bot.`.toLowerCase():
            case `${content.slice(0, 3)} welcome bot!`:
            case `${content.slice(0, 3)} Welcome bot!`:
            case `${content.slice(0, 3)} welcome Bot!`:
            case `${content.slice(0, 3)} Welcome Bot!`:
            case `${content.slice(0, 3)} welcome bot!`.toUpperCase():
            case `${content.slice(0, 3)} welcome bot!`.toLowerCase():
            case `${content.slice(0, 3)} welcome bot !`:
            case `${content.slice(0, 3)} Welcome bot !`:
            case `${content.slice(0, 3)} welcome Bot !`:
            case `${content.slice(0, 3)} Welcome Bot !`:
            case `${content.slice(0, 3)} welcome bot !`.toUpperCase():
            case `${content.slice(0, 3)} welcome bot !`.toLowerCase():
            case `${content.slice(0, 3)}welcome`:
            case `${content.slice(0, 3)}Welcome`:
            case `${content.slice(0, 3)}welcome`.toUpperCase():
            case `${content.slice(0, 3)}welcome`.toLowerCase():
            case `${content.slice(0, 3)}welcome.`:
            case `${content.slice(0, 3)}Welcome.`:
            case `${content.slice(0, 3)}welcome.`.toUpperCase():
            case `${content.slice(0, 3)}welcome.`.toLowerCase():
            case `${content.slice(0, 3)}welcome!`:
            case `${content.slice(0, 3)}Welcome!`:
            case `${content.slice(0, 3)}welcome!`.toUpperCase():
            case `${content.slice(0, 3)}welcome!`.toLowerCase():
            case `${content.slice(0, 3)}welcome !`:
            case `${content.slice(0, 3)}Welcome !`:
            case `${content.slice(0, 3)}welcome !`.toUpperCase():
            case `${content.slice(0, 3)}welcome !`.toLowerCase():
            case `${content.slice(0, 3)}welcome there`:
            case `${content.slice(0, 3)}Welcome there`:
            case `${content.slice(0, 3)}welcome There`:
            case `${content.slice(0, 3)}Welcome There`:
            case `${content.slice(0, 3)}welcome there`.toUpperCase():
            case `${content.slice(0, 3)}welcome there`.toLowerCase():
            case `${content.slice(0, 3)}welcome there.`:
            case `${content.slice(0, 3)}Welcome there.`:
            case `${content.slice(0, 3)}welcome There.`:
            case `${content.slice(0, 3)}Welcome There.`:
            case `${content.slice(0, 3)}welcome there.`.toUpperCase():
            case `${content.slice(0, 3)}welcome there.`.toLowerCase():
            case `${content.slice(0, 3)}welcome there!`:
            case `${content.slice(0, 3)}Welcome there!`:
            case `${content.slice(0, 3)}welcome There!`:
            case `${content.slice(0, 3)}Welcome There!`:
            case `${content.slice(0, 3)}welcome there!`.toUpperCase():
            case `${content.slice(0, 3)}welcome there!`.toLowerCase():
            case `${content.slice(0, 3)}welcome there !`:
            case `${content.slice(0, 3)}Welcome there !`:
            case `${content.slice(0, 3)}welcome There !`:
            case `${content.slice(0, 3)}Welcome There !`:
            case `${content.slice(0, 3)}welcome there !`.toUpperCase():
            case `${content.slice(0, 3)}welcome there !`.toLowerCase():
            case `${content.slice(0, 3)}welcome bot`:
            case `${content.slice(0, 3)}Welcome bot`:
            case `${content.slice(0, 3)}welcome Bot`:
            case `${content.slice(0, 3)}Welcome Bot`:
            case `${content.slice(0, 3)}welcome bot`.toUpperCase():
            case `${content.slice(0, 3)}welcome bot`.toLowerCase():
            case `${content.slice(0, 3)}welcome bot.`:
            case `${content.slice(0, 3)}Welcome bot.`:
            case `${content.slice(0, 3)}welcome Bot.`:
            case `${content.slice(0, 3)}Welcome Bot.`:
            case `${content.slice(0, 3)}welcome bot.`.toUpperCase():
            case `${content.slice(0, 3)}welcome bot.`.toLowerCase():
            case `${content.slice(0, 3)}welcome bot!`:
            case `${content.slice(0, 3)}Welcome bot!`:
            case `${content.slice(0, 3)}welcome Bot!`:
            case `${content.slice(0, 3)}Welcome Bot!`:
            case `${content.slice(0, 3)}welcome bot!`.toUpperCase():
            case `${content.slice(0, 3)}welcome bot!`.toLowerCase():
            case `${content.slice(0, 3)}welcome bot !`:
            case `${content.slice(0, 3)}Welcome bot !`:
            case `${content.slice(0, 3)}welcome Bot !`:
            case `${content.slice(0, 3)}Welcome Bot !`:
            case `${content.slice(0, 3)}welcome bot !`.toUpperCase():
            case `${content.slice(0, 3)}welcome bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Welcome ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} hello`:
            case `${content.slice(0, 3)} Hello`:
            case `${content.slice(0, 3)} hello`.toUpperCase():
            case `${content.slice(0, 3)} hello`.toLowerCase():
            case `${content.slice(0, 3)} hello.`:
            case `${content.slice(0, 3)} Hello.`:
            case `${content.slice(0, 3)} hello.`.toUpperCase():
            case `${content.slice(0, 3)} hello.`.toLowerCase():
            case `${content.slice(0, 3)} hello!`:
            case `${content.slice(0, 3)} Hello!`:
            case `${content.slice(0, 3)} hello!`.toUpperCase():
            case `${content.slice(0, 3)} hello!`.toLowerCase():
            case `${content.slice(0, 3)} hello !`:
            case `${content.slice(0, 3)} Hello !`:
            case `${content.slice(0, 3)} hello !`.toUpperCase():
            case `${content.slice(0, 3)} hello !`.toLowerCase():
            case `${content.slice(0, 3)} hello there`:
            case `${content.slice(0, 3)} Hello there`:
            case `${content.slice(0, 3)} hello There`:
            case `${content.slice(0, 3)} Hello There`:
            case `${content.slice(0, 3)} hello there`.toUpperCase():
            case `${content.slice(0, 3)} hello there`.toLowerCase():
            case `${content.slice(0, 3)} hello there.`:
            case `${content.slice(0, 3)} Hello there.`:
            case `${content.slice(0, 3)} hello There.`:
            case `${content.slice(0, 3)} Hello There.`:
            case `${content.slice(0, 3)} hello there.`.toUpperCase():
            case `${content.slice(0, 3)} hello there.`.toLowerCase():
            case `${content.slice(0, 3)} hello there!`:
            case `${content.slice(0, 3)} Hello there!`:
            case `${content.slice(0, 3)} hello There!`:
            case `${content.slice(0, 3)} Hello There!`:
            case `${content.slice(0, 3)} hello there!`.toUpperCase():
            case `${content.slice(0, 3)} hello there!`.toLowerCase():
            case `${content.slice(0, 3)} hello there !`:
            case `${content.slice(0, 3)} Hello there !`:
            case `${content.slice(0, 3)} hello There !`:
            case `${content.slice(0, 3)} Hello There !`:
            case `${content.slice(0, 3)} hello there !`.toUpperCase():
            case `${content.slice(0, 3)} hello there !`.toLowerCase():
            case `${content.slice(0, 3)} hello bot`:
            case `${content.slice(0, 3)} Hello bot`:
            case `${content.slice(0, 3)} hello Bot`:
            case `${content.slice(0, 3)} Hello Bot`:
            case `${content.slice(0, 3)} hello bot`.toUpperCase():
            case `${content.slice(0, 3)} hello bot`.toLowerCase():
            case `${content.slice(0, 3)} hello bot.`:
            case `${content.slice(0, 3)} Hello bot.`:
            case `${content.slice(0, 3)} hello Bot.`:
            case `${content.slice(0, 3)} Hello Bot.`:
            case `${content.slice(0, 3)} hello bot.`.toUpperCase():
            case `${content.slice(0, 3)} hello bot.`.toLowerCase():
            case `${content.slice(0, 3)} hello bot!`:
            case `${content.slice(0, 3)} Hello bot!`:
            case `${content.slice(0, 3)} hello Bot!`:
            case `${content.slice(0, 3)} Hello Bot!`:
            case `${content.slice(0, 3)} hello bot!`.toUpperCase():
            case `${content.slice(0, 3)} hello bot!`.toLowerCase():
            case `${content.slice(0, 3)} hello bot !`:
            case `${content.slice(0, 3)} Hello bot !`:
            case `${content.slice(0, 3)} hello Bot !`:
            case `${content.slice(0, 3)} Hello Bot !`:
            case `${content.slice(0, 3)} hello bot !`.toUpperCase():
            case `${content.slice(0, 3)} hello bot !`.toLowerCase():
            case `${content.slice(0, 3)}hello`:
            case `${content.slice(0, 3)}Hello`:
            case `${content.slice(0, 3)}hello`.toUpperCase():
            case `${content.slice(0, 3)}hello`.toLowerCase():
            case `${content.slice(0, 3)}hello.`:
            case `${content.slice(0, 3)}Hello.`:
            case `${content.slice(0, 3)}hello.`.toUpperCase():
            case `${content.slice(0, 3)}hello.`.toLowerCase():
            case `${content.slice(0, 3)}hello!`:
            case `${content.slice(0, 3)}Hello!`:
            case `${content.slice(0, 3)}hello!`.toUpperCase():
            case `${content.slice(0, 3)}hello!`.toLowerCase():
            case `${content.slice(0, 3)}hello !`:
            case `${content.slice(0, 3)}Hello !`:
            case `${content.slice(0, 3)}hello !`.toUpperCase():
            case `${content.slice(0, 3)}hello !`.toLowerCase():
            case `${content.slice(0, 3)}hello there`:
            case `${content.slice(0, 3)}Hello there`:
            case `${content.slice(0, 3)}hello There`:
            case `${content.slice(0, 3)}Hello There`:
            case `${content.slice(0, 3)}hello there`.toUpperCase():
            case `${content.slice(0, 3)}hello there`.toLowerCase():
            case `${content.slice(0, 3)}hello there.`:
            case `${content.slice(0, 3)}Hello there.`:
            case `${content.slice(0, 3)}hello There.`:
            case `${content.slice(0, 3)}Hello There.`:
            case `${content.slice(0, 3)}hello there.`.toUpperCase():
            case `${content.slice(0, 3)}hello there.`.toLowerCase():
            case `${content.slice(0, 3)}hello there!`:
            case `${content.slice(0, 3)}Hello there!`:
            case `${content.slice(0, 3)}hello There!`:
            case `${content.slice(0, 3)}Hello There!`:
            case `${content.slice(0, 3)}hello there!`.toUpperCase():
            case `${content.slice(0, 3)}hello there!`.toLowerCase():
            case `${content.slice(0, 3)}hello there !`:
            case `${content.slice(0, 3)}Hello there !`:
            case `${content.slice(0, 3)}hello There !`:
            case `${content.slice(0, 3)}Hello There !`:
            case `${content.slice(0, 3)}hello there !`.toUpperCase():
            case `${content.slice(0, 3)}hello there !`.toLowerCase():
            case `${content.slice(0, 3)}hello bot`:
            case `${content.slice(0, 3)}Hello bot`:
            case `${content.slice(0, 3)}hello Bot`:
            case `${content.slice(0, 3)}Hello Bot`:
            case `${content.slice(0, 3)}hello bot`.toUpperCase():
            case `${content.slice(0, 3)}hello bot`.toLowerCase():
            case `${content.slice(0, 3)}hello bot.`:
            case `${content.slice(0, 3)}Hello bot.`:
            case `${content.slice(0, 3)}hello Bot.`:
            case `${content.slice(0, 3)}Hello Bot.`:
            case `${content.slice(0, 3)}hello bot.`.toUpperCase():
            case `${content.slice(0, 3)}hello bot.`.toLowerCase():
            case `${content.slice(0, 3)}hello bot!`:
            case `${content.slice(0, 3)}Hello bot!`:
            case `${content.slice(0, 3)}hello Bot!`:
            case `${content.slice(0, 3)}Hello Bot!`:
            case `${content.slice(0, 3)}hello bot!`.toUpperCase():
            case `${content.slice(0, 3)}hello bot!`.toLowerCase():
            case `${content.slice(0, 3)}hello bot !`:
            case `${content.slice(0, 3)}Hello bot !`:
            case `${content.slice(0, 3)}hello Bot !`:
            case `${content.slice(0, 3)}Hello Bot !`:
            case `${content.slice(0, 3)}hello bot !`.toUpperCase():
            case `${content.slice(0, 3)}hello bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Hello ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} hallo`:
            case `${content.slice(0, 3)} Hallo`:
            case `${content.slice(0, 3)} hallo`.toUpperCase():
            case `${content.slice(0, 3)} hallo`.toLowerCase():
            case `${content.slice(0, 3)} hallo.`:
            case `${content.slice(0, 3)} Hallo.`:
            case `${content.slice(0, 3)} hallo.`.toUpperCase():
            case `${content.slice(0, 3)} hallo.`.toLowerCase():
            case `${content.slice(0, 3)} hallo!`:
            case `${content.slice(0, 3)} Hallo!`:
            case `${content.slice(0, 3)} hallo!`.toUpperCase():
            case `${content.slice(0, 3)} hallo!`.toLowerCase():
            case `${content.slice(0, 3)} hallo !`:
            case `${content.slice(0, 3)} Hallo !`:
            case `${content.slice(0, 3)} hallo !`.toUpperCase():
            case `${content.slice(0, 3)} hallo !`.toLowerCase():
            case `${content.slice(0, 3)} hallo there`:
            case `${content.slice(0, 3)} Hallo there`:
            case `${content.slice(0, 3)} hallo There`:
            case `${content.slice(0, 3)} Hallo There`:
            case `${content.slice(0, 3)} hallo there`.toUpperCase():
            case `${content.slice(0, 3)} hallo there`.toLowerCase():
            case `${content.slice(0, 3)} hallo there.`:
            case `${content.slice(0, 3)} Hallo there.`:
            case `${content.slice(0, 3)} hallo There.`:
            case `${content.slice(0, 3)} Hallo There.`:
            case `${content.slice(0, 3)} hallo there.`.toUpperCase():
            case `${content.slice(0, 3)} hallo there.`.toLowerCase():
            case `${content.slice(0, 3)} hallo there!`:
            case `${content.slice(0, 3)} Hallo there!`:
            case `${content.slice(0, 3)} hallo There!`:
            case `${content.slice(0, 3)} Hallo There!`:
            case `${content.slice(0, 3)} hallo there!`.toUpperCase():
            case `${content.slice(0, 3)} hallo there!`.toLowerCase():
            case `${content.slice(0, 3)} hallo there !`:
            case `${content.slice(0, 3)} Hallo there !`:
            case `${content.slice(0, 3)} hallo There !`:
            case `${content.slice(0, 3)} Hallo There !`:
            case `${content.slice(0, 3)} hallo there !`.toUpperCase():
            case `${content.slice(0, 3)} hallo there !`.toLowerCase():
            case `${content.slice(0, 3)} hallo bot`:
            case `${content.slice(0, 3)} Hallo bot`:
            case `${content.slice(0, 3)} hallo Bot`:
            case `${content.slice(0, 3)} Hallo Bot`:
            case `${content.slice(0, 3)} hallo bot`.toUpperCase():
            case `${content.slice(0, 3)} hallo bot`.toLowerCase():
            case `${content.slice(0, 3)} hallo bot.`:
            case `${content.slice(0, 3)} Hallo bot.`:
            case `${content.slice(0, 3)} hallo Bot.`:
            case `${content.slice(0, 3)} Hallo Bot.`:
            case `${content.slice(0, 3)} hallo bot.`.toUpperCase():
            case `${content.slice(0, 3)} hallo bot.`.toLowerCase():
            case `${content.slice(0, 3)} hallo bot!`:
            case `${content.slice(0, 3)} Hallo bot!`:
            case `${content.slice(0, 3)} hallo Bot!`:
            case `${content.slice(0, 3)} Hallo Bot!`:
            case `${content.slice(0, 3)} hallo bot!`.toUpperCase():
            case `${content.slice(0, 3)} hallo bot!`.toLowerCase():
            case `${content.slice(0, 3)} hallo bot !`:
            case `${content.slice(0, 3)} Hallo bot !`:
            case `${content.slice(0, 3)} hallo Bot !`:
            case `${content.slice(0, 3)} Hallo Bot !`:
            case `${content.slice(0, 3)} hallo bot !`.toUpperCase():
            case `${content.slice(0, 3)} hallo bot !`.toLowerCase():
            case `${content.slice(0, 3)}hallo`:
            case `${content.slice(0, 3)}Hallo`:
            case `${content.slice(0, 3)}hallo`.toUpperCase():
            case `${content.slice(0, 3)}hallo`.toLowerCase():
            case `${content.slice(0, 3)}hallo.`:
            case `${content.slice(0, 3)}Hallo.`:
            case `${content.slice(0, 3)}hallo.`.toUpperCase():
            case `${content.slice(0, 3)}hallo.`.toLowerCase():
            case `${content.slice(0, 3)}hallo!`:
            case `${content.slice(0, 3)}Hallo!`:
            case `${content.slice(0, 3)}hallo!`.toUpperCase():
            case `${content.slice(0, 3)}hallo!`.toLowerCase():
            case `${content.slice(0, 3)}hallo !`:
            case `${content.slice(0, 3)}Hallo !`:
            case `${content.slice(0, 3)}hallo !`.toUpperCase():
            case `${content.slice(0, 3)}hallo !`.toLowerCase():
            case `${content.slice(0, 3)}hallo there`:
            case `${content.slice(0, 3)}Hallo there`:
            case `${content.slice(0, 3)}hallo There`:
            case `${content.slice(0, 3)}Hallo There`:
            case `${content.slice(0, 3)}hallo there`.toUpperCase():
            case `${content.slice(0, 3)}hallo there`.toLowerCase():
            case `${content.slice(0, 3)}hallo there.`:
            case `${content.slice(0, 3)}Hallo there.`:
            case `${content.slice(0, 3)}hallo There.`:
            case `${content.slice(0, 3)}Hallo There.`:
            case `${content.slice(0, 3)}hallo there.`.toUpperCase():
            case `${content.slice(0, 3)}hallo there.`.toLowerCase():
            case `${content.slice(0, 3)}hallo there!`:
            case `${content.slice(0, 3)}Hallo there!`:
            case `${content.slice(0, 3)}hallo There!`:
            case `${content.slice(0, 3)}Hallo There!`:
            case `${content.slice(0, 3)}hallo there!`.toUpperCase():
            case `${content.slice(0, 3)}hallo there!`.toLowerCase():
            case `${content.slice(0, 3)}hallo there !`:
            case `${content.slice(0, 3)}Hallo there !`:
            case `${content.slice(0, 3)}hallo There !`:
            case `${content.slice(0, 3)}Hallo There !`:
            case `${content.slice(0, 3)}hallo there !`.toUpperCase():
            case `${content.slice(0, 3)}hallo there !`.toLowerCase():
            case `${content.slice(0, 3)}hallo bot`:
            case `${content.slice(0, 3)}Hallo bot`:
            case `${content.slice(0, 3)}hallo Bot`:
            case `${content.slice(0, 3)}Hallo Bot`:
            case `${content.slice(0, 3)}hallo bot`.toUpperCase():
            case `${content.slice(0, 3)}hallo bot`.toLowerCase():
            case `${content.slice(0, 3)}hallo bot.`:
            case `${content.slice(0, 3)}Hallo bot.`:
            case `${content.slice(0, 3)}hallo Bot.`:
            case `${content.slice(0, 3)}Hallo Bot.`:
            case `${content.slice(0, 3)}hallo bot.`.toUpperCase():
            case `${content.slice(0, 3)}hallo bot.`.toLowerCase():
            case `${content.slice(0, 3)}hallo bot!`:
            case `${content.slice(0, 3)}Hallo bot!`:
            case `${content.slice(0, 3)}hallo Bot!`:
            case `${content.slice(0, 3)}Hallo Bot!`:
            case `${content.slice(0, 3)}hallo bot!`.toUpperCase():
            case `${content.slice(0, 3)}hallo bot!`.toLowerCase():
            case `${content.slice(0, 3)}hallo bot !`:
            case `${content.slice(0, 3)}Hallo bot !`:
            case `${content.slice(0, 3)}hallo Bot !`:
            case `${content.slice(0, 3)}Hallo Bot !`:
            case `${content.slice(0, 3)}hallo bot !`.toUpperCase():
            case `${content.slice(0, 3)}hallo bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Hallo ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} hi`:
            case `${content.slice(0, 3)} Hi`:
            case `${content.slice(0, 3)} hi`.toUpperCase():
            case `${content.slice(0, 3)} hi`.toLowerCase():
            case `${content.slice(0, 3)} hi.`:
            case `${content.slice(0, 3)} Hi.`:
            case `${content.slice(0, 3)} hi.`.toUpperCase():
            case `${content.slice(0, 3)} hi.`.toLowerCase():
            case `${content.slice(0, 3)} hi!`:
            case `${content.slice(0, 3)} Hi!`:
            case `${content.slice(0, 3)} hi!`.toUpperCase():
            case `${content.slice(0, 3)} hi!`.toLowerCase():
            case `${content.slice(0, 3)} hi !`:
            case `${content.slice(0, 3)} Hi !`:
            case `${content.slice(0, 3)} hi !`.toUpperCase():
            case `${content.slice(0, 3)} hi !`.toLowerCase():
            case `${content.slice(0, 3)} hi there`:
            case `${content.slice(0, 3)} Hi there`:
            case `${content.slice(0, 3)} hi There`:
            case `${content.slice(0, 3)} Hi There`:
            case `${content.slice(0, 3)} hi there`.toUpperCase():
            case `${content.slice(0, 3)} hi there`.toLowerCase():
            case `${content.slice(0, 3)} hi there.`:
            case `${content.slice(0, 3)} Hi there.`:
            case `${content.slice(0, 3)} hi There.`:
            case `${content.slice(0, 3)} Hi There.`:
            case `${content.slice(0, 3)} hi there.`.toUpperCase():
            case `${content.slice(0, 3)} hi there.`.toLowerCase():
            case `${content.slice(0, 3)} hi there!`:
            case `${content.slice(0, 3)} Hi there!`:
            case `${content.slice(0, 3)} hi There!`:
            case `${content.slice(0, 3)} Hi There!`:
            case `${content.slice(0, 3)} hi there!`.toUpperCase():
            case `${content.slice(0, 3)} hi there!`.toLowerCase():
            case `${content.slice(0, 3)} hi there !`:
            case `${content.slice(0, 3)} Hi there !`:
            case `${content.slice(0, 3)} hi There !`:
            case `${content.slice(0, 3)} Hi There !`:
            case `${content.slice(0, 3)} hi there !`.toUpperCase():
            case `${content.slice(0, 3)} hi there !`.toLowerCase():
            case `${content.slice(0, 3)} hi bot`:
            case `${content.slice(0, 3)} Hi bot`:
            case `${content.slice(0, 3)} hi Bot`:
            case `${content.slice(0, 3)} Hi Bot`:
            case `${content.slice(0, 3)} hi bot`.toUpperCase():
            case `${content.slice(0, 3)} hi bot`.toLowerCase():
            case `${content.slice(0, 3)} hi bot.`:
            case `${content.slice(0, 3)} Hi bot.`:
            case `${content.slice(0, 3)} hi Bot.`:
            case `${content.slice(0, 3)} Hi Bot.`:
            case `${content.slice(0, 3)} hi bot.`.toUpperCase():
            case `${content.slice(0, 3)} hi bot.`.toLowerCase():
            case `${content.slice(0, 3)} hi bot!`:
            case `${content.slice(0, 3)} Hi bot!`:
            case `${content.slice(0, 3)} hi Bot!`:
            case `${content.slice(0, 3)} Hi Bot!`:
            case `${content.slice(0, 3)} hi bot!`.toUpperCase():
            case `${content.slice(0, 3)} hi bot!`.toLowerCase():
            case `${content.slice(0, 3)} hi bot !`:
            case `${content.slice(0, 3)} Hi bot !`:
            case `${content.slice(0, 3)} hi Bot !`:
            case `${content.slice(0, 3)} Hi Bot !`:
            case `${content.slice(0, 3)} hi bot !`.toUpperCase():
            case `${content.slice(0, 3)} hi bot !`.toLowerCase():
            case `${content.slice(0, 3)}hi`:
            case `${content.slice(0, 3)}Hi`:
            case `${content.slice(0, 3)}hi`.toUpperCase():
            case `${content.slice(0, 3)}hi`.toLowerCase():
            case `${content.slice(0, 3)}hi.`:
            case `${content.slice(0, 3)}Hi.`:
            case `${content.slice(0, 3)}hi.`.toUpperCase():
            case `${content.slice(0, 3)}hi.`.toLowerCase():
            case `${content.slice(0, 3)}hi!`:
            case `${content.slice(0, 3)}Hi!`:
            case `${content.slice(0, 3)}hi!`.toUpperCase():
            case `${content.slice(0, 3)}hi!`.toLowerCase():
            case `${content.slice(0, 3)}hi !`:
            case `${content.slice(0, 3)}Hi !`:
            case `${content.slice(0, 3)}hi !`.toUpperCase():
            case `${content.slice(0, 3)}hi !`.toLowerCase():
            case `${content.slice(0, 3)}hi there`:
            case `${content.slice(0, 3)}Hi there`:
            case `${content.slice(0, 3)}hi There`:
            case `${content.slice(0, 3)}Hi There`:
            case `${content.slice(0, 3)}hi there`.toUpperCase():
            case `${content.slice(0, 3)}hi there`.toLowerCase():
            case `${content.slice(0, 3)}hi there.`:
            case `${content.slice(0, 3)}Hi there.`:
            case `${content.slice(0, 3)}hi There.`:
            case `${content.slice(0, 3)}Hi There.`:
            case `${content.slice(0, 3)}hi there.`.toUpperCase():
            case `${content.slice(0, 3)}hi there.`.toLowerCase():
            case `${content.slice(0, 3)}hi there!`:
            case `${content.slice(0, 3)}Hi there!`:
            case `${content.slice(0, 3)}hi There!`:
            case `${content.slice(0, 3)}Hi There!`:
            case `${content.slice(0, 3)}hi there!`.toUpperCase():
            case `${content.slice(0, 3)}hi there!`.toLowerCase():
            case `${content.slice(0, 3)}hi there !`:
            case `${content.slice(0, 3)}Hi there !`:
            case `${content.slice(0, 3)}hi There !`:
            case `${content.slice(0, 3)}Hi There !`:
            case `${content.slice(0, 3)}hi there !`.toUpperCase():
            case `${content.slice(0, 3)}hi there !`.toLowerCase():
            case `${content.slice(0, 3)}hi bot`:
            case `${content.slice(0, 3)}Hi bot`:
            case `${content.slice(0, 3)}hi Bot`:
            case `${content.slice(0, 3)}Hi Bot`:
            case `${content.slice(0, 3)}hi bot`.toUpperCase():
            case `${content.slice(0, 3)}hi bot`.toLowerCase():
            case `${content.slice(0, 3)}hi bot.`:
            case `${content.slice(0, 3)}Hi bot.`:
            case `${content.slice(0, 3)}hi Bot.`:
            case `${content.slice(0, 3)}Hi Bot.`:
            case `${content.slice(0, 3)}hi bot.`.toUpperCase():
            case `${content.slice(0, 3)}hi bot.`.toLowerCase():
            case `${content.slice(0, 3)}hi bot!`:
            case `${content.slice(0, 3)}Hi bot!`:
            case `${content.slice(0, 3)}hi Bot!`:
            case `${content.slice(0, 3)}Hi Bot!`:
            case `${content.slice(0, 3)}hi bot!`.toUpperCase():
            case `${content.slice(0, 3)}hi bot!`.toLowerCase():
            case `${content.slice(0, 3)}hi bot !`:
            case `${content.slice(0, 3)}Hi bot !`:
            case `${content.slice(0, 3)}hi Bot !`:
            case `${content.slice(0, 3)}Hi Bot !`:
            case `${content.slice(0, 3)}hi bot !`.toUpperCase():
            case `${content.slice(0, 3)}hi bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Hi ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} hey`:
            case `${content.slice(0, 3)} Hey`:
            case `${content.slice(0, 3)} hey`.toUpperCase():
            case `${content.slice(0, 3)} hey`.toLowerCase():
            case `${content.slice(0, 3)} hey.`:
            case `${content.slice(0, 3)} Hey.`:
            case `${content.slice(0, 3)} hey.`.toUpperCase():
            case `${content.slice(0, 3)} hey.`.toLowerCase():
            case `${content.slice(0, 3)} hey!`:
            case `${content.slice(0, 3)} Hey!`:
            case `${content.slice(0, 3)} hey!`.toUpperCase():
            case `${content.slice(0, 3)} hey!`.toLowerCase():
            case `${content.slice(0, 3)} hey !`:
            case `${content.slice(0, 3)} Hey !`:
            case `${content.slice(0, 3)} hey !`.toUpperCase():
            case `${content.slice(0, 3)} hey !`.toLowerCase():
            case `${content.slice(0, 3)} hey there`:
            case `${content.slice(0, 3)} Hey there`:
            case `${content.slice(0, 3)} hey There`:
            case `${content.slice(0, 3)} Hey There`:
            case `${content.slice(0, 3)} hey there`.toUpperCase():
            case `${content.slice(0, 3)} hey there`.toLowerCase():
            case `${content.slice(0, 3)} hey there.`:
            case `${content.slice(0, 3)} Hey there.`:
            case `${content.slice(0, 3)} hey There.`:
            case `${content.slice(0, 3)} Hey There.`:
            case `${content.slice(0, 3)} hey there.`.toUpperCase():
            case `${content.slice(0, 3)} hey there.`.toLowerCase():
            case `${content.slice(0, 3)} hey there!`:
            case `${content.slice(0, 3)} Hey there!`:
            case `${content.slice(0, 3)} hey There!`:
            case `${content.slice(0, 3)} Hey There!`:
            case `${content.slice(0, 3)} hey there!`.toUpperCase():
            case `${content.slice(0, 3)} hey there!`.toLowerCase():
            case `${content.slice(0, 3)} hey there !`:
            case `${content.slice(0, 3)} Hey there !`:
            case `${content.slice(0, 3)} hey There !`:
            case `${content.slice(0, 3)} Hey There !`:
            case `${content.slice(0, 3)} hey there !`.toUpperCase():
            case `${content.slice(0, 3)} hey there !`.toLowerCase():
            case `${content.slice(0, 3)} hey bot`:
            case `${content.slice(0, 3)} Hey bot`:
            case `${content.slice(0, 3)} hey Bot`:
            case `${content.slice(0, 3)} Hey Bot`:
            case `${content.slice(0, 3)} hey bot`.toUpperCase():
            case `${content.slice(0, 3)} hey bot`.toLowerCase():
            case `${content.slice(0, 3)} hey bot.`:
            case `${content.slice(0, 3)} Hey bot.`:
            case `${content.slice(0, 3)} hey Bot.`:
            case `${content.slice(0, 3)} Hey Bot.`:
            case `${content.slice(0, 3)} hey bot.`.toUpperCase():
            case `${content.slice(0, 3)} hey bot.`.toLowerCase():
            case `${content.slice(0, 3)} hey bot!`:
            case `${content.slice(0, 3)} Hey bot!`:
            case `${content.slice(0, 3)} hey Bot!`:
            case `${content.slice(0, 3)} Hey Bot!`:
            case `${content.slice(0, 3)} hey bot!`.toUpperCase():
            case `${content.slice(0, 3)} hey bot!`.toLowerCase():
            case `${content.slice(0, 3)} hey bot !`:
            case `${content.slice(0, 3)} Hey bot !`:
            case `${content.slice(0, 3)} hey Bot !`:
            case `${content.slice(0, 3)} Hey Bot !`:
            case `${content.slice(0, 3)} hey bot !`.toUpperCase():
            case `${content.slice(0, 3)} hey bot !`.toLowerCase():
            case `${content.slice(0, 3)}hey`:
            case `${content.slice(0, 3)}Hey`:
            case `${content.slice(0, 3)}hey`.toUpperCase():
            case `${content.slice(0, 3)}hey`.toLowerCase():
            case `${content.slice(0, 3)}hey.`:
            case `${content.slice(0, 3)}Hey.`:
            case `${content.slice(0, 3)}hey.`.toUpperCase():
            case `${content.slice(0, 3)}hey.`.toLowerCase():
            case `${content.slice(0, 3)}hey!`:
            case `${content.slice(0, 3)}Hey!`:
            case `${content.slice(0, 3)}hey!`.toUpperCase():
            case `${content.slice(0, 3)}hey!`.toLowerCase():
            case `${content.slice(0, 3)}hey !`:
            case `${content.slice(0, 3)}Hey !`:
            case `${content.slice(0, 3)}hey !`.toUpperCase():
            case `${content.slice(0, 3)}hey !`.toLowerCase():
            case `${content.slice(0, 3)}hey there`:
            case `${content.slice(0, 3)}Hey there`:
            case `${content.slice(0, 3)}hey There`:
            case `${content.slice(0, 3)}Hey There`:
            case `${content.slice(0, 3)}hey there`.toUpperCase():
            case `${content.slice(0, 3)}hey there`.toLowerCase():
            case `${content.slice(0, 3)}hey there.`:
            case `${content.slice(0, 3)}Hey there.`:
            case `${content.slice(0, 3)}hey There.`:
            case `${content.slice(0, 3)}Hey There.`:
            case `${content.slice(0, 3)}hey there.`.toUpperCase():
            case `${content.slice(0, 3)}hey there.`.toLowerCase():
            case `${content.slice(0, 3)}hey there!`:
            case `${content.slice(0, 3)}Hey there!`:
            case `${content.slice(0, 3)}hey There!`:
            case `${content.slice(0, 3)}Hey There!`:
            case `${content.slice(0, 3)}hey there!`.toUpperCase():
            case `${content.slice(0, 3)}hey there!`.toLowerCase():
            case `${content.slice(0, 3)}hey there !`:
            case `${content.slice(0, 3)}Hey there !`:
            case `${content.slice(0, 3)}hey There !`:
            case `${content.slice(0, 3)}Hey There !`:
            case `${content.slice(0, 3)}hey there !`.toUpperCase():
            case `${content.slice(0, 3)}hey there !`.toLowerCase():
            case `${content.slice(0, 3)}hey bot`:
            case `${content.slice(0, 3)}Hey bot`:
            case `${content.slice(0, 3)}hey Bot`:
            case `${content.slice(0, 3)}Hey Bot`:
            case `${content.slice(0, 3)}hey bot`.toUpperCase():
            case `${content.slice(0, 3)}hey bot`.toLowerCase():
            case `${content.slice(0, 3)}hey bot.`:
            case `${content.slice(0, 3)}Hey bot.`:
            case `${content.slice(0, 3)}hey Bot.`:
            case `${content.slice(0, 3)}Hey Bot.`:
            case `${content.slice(0, 3)}hey bot.`.toUpperCase():
            case `${content.slice(0, 3)}hey bot.`.toLowerCase():
            case `${content.slice(0, 3)}hey bot!`:
            case `${content.slice(0, 3)}Hey bot!`:
            case `${content.slice(0, 3)}hey Bot!`:
            case `${content.slice(0, 3)}Hey Bot!`:
            case `${content.slice(0, 3)}hey bot!`.toUpperCase():
            case `${content.slice(0, 3)}hey bot!`.toLowerCase():
            case `${content.slice(0, 3)}hey bot !`:
            case `${content.slice(0, 3)}Hey bot !`:
            case `${content.slice(0, 3)}hey Bot !`:
            case `${content.slice(0, 3)}Hey Bot !`:
            case `${content.slice(0, 3)}hey bot !`.toUpperCase():
            case `${content.slice(0, 3)}hey bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Hey ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} good morning`:
            case `${content.slice(0, 3)} Good morning`:
            case `${content.slice(0, 3)} good Morning`:
            case `${content.slice(0, 3)} Good Morning`:
            case `${content.slice(0, 3)} Good Morning`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning`.toLowerCase():
            case `${content.slice(0, 3)} good morning.`:
            case `${content.slice(0, 3)} Good morning.`:
            case `${content.slice(0, 3)} good Morning.`:
            case `${content.slice(0, 3)} Good Morning.`:
            case `${content.slice(0, 3)} Good Morning.`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning.`.toLowerCase():
            case `${content.slice(0, 3)} good morning!`:
            case `${content.slice(0, 3)} Good morning!`:
            case `${content.slice(0, 3)} good Morning!`:
            case `${content.slice(0, 3)} Good Morning!`:
            case `${content.slice(0, 3)} Good Morning!`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning!`.toLowerCase():
            case `${content.slice(0, 3)} good morning !`:
            case `${content.slice(0, 3)} Good morning !`:
            case `${content.slice(0, 3)} good Morning !`:
            case `${content.slice(0, 3)} Good Morning !`:
            case `${content.slice(0, 3)} Good Morning !`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning !`.toLowerCase():
            case `${content.slice(0, 3)} good morning there`:
            case `${content.slice(0, 3)} Good morning there`:
            case `${content.slice(0, 3)} good Morning there`:
            case `${content.slice(0, 3)} good morning There`:
            case `${content.slice(0, 3)} Good Morning There`:
            case `${content.slice(0, 3)} Good Morning there`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning there`.toLowerCase():
            case `${content.slice(0, 3)} good morning there.`:
            case `${content.slice(0, 3)} Good morning there.`:
            case `${content.slice(0, 3)} good Morning there.`:
            case `${content.slice(0, 3)} good morning There.`:
            case `${content.slice(0, 3)} Good Morning There.`:
            case `${content.slice(0, 3)} Good Morning there.`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning there.`.toLowerCase():
            case `${content.slice(0, 3)} good morning there!`:
            case `${content.slice(0, 3)} Good morning there!`:
            case `${content.slice(0, 3)} good Morning there!`:
            case `${content.slice(0, 3)} good morning There!`:
            case `${content.slice(0, 3)} Good Morning There!`:
            case `${content.slice(0, 3)} Good Morning there!`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning there!`.toLowerCase():
            case `${content.slice(0, 3)} good morning there !`:
            case `${content.slice(0, 3)} Good morning there !`:
            case `${content.slice(0, 3)} good Morning there !`:
            case `${content.slice(0, 3)} good morning There !`:
            case `${content.slice(0, 3)} Good Morning There !`:
            case `${content.slice(0, 3)} Good Morning there !`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning there !`.toLowerCase():
            case `${content.slice(0, 3)} good morning bot`:
            case `${content.slice(0, 3)} Good morning bot`:
            case `${content.slice(0, 3)} good Morning bot`:
            case `${content.slice(0, 3)} good morning Bot`:
            case `${content.slice(0, 3)} Good Morning Bot`:
            case `${content.slice(0, 3)} Good Morning bot`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning bot`.toLowerCase():
            case `${content.slice(0, 3)} good morning bot.`:
            case `${content.slice(0, 3)} Good morning bot.`:
            case `${content.slice(0, 3)} good Morning bot.`:
            case `${content.slice(0, 3)} good morning Bot.`:
            case `${content.slice(0, 3)} Good Morning Bot.`:
            case `${content.slice(0, 3)} Good Morning bot.`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning bot.`.toLowerCase():
            case `${content.slice(0, 3)} good morning bot!`:
            case `${content.slice(0, 3)} Good morning bot!`:
            case `${content.slice(0, 3)} good Morning bot!`:
            case `${content.slice(0, 3)} good morning Bot!`:
            case `${content.slice(0, 3)} Good Morning Bot!`:
            case `${content.slice(0, 3)} Good Morning bot!`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning bot!`.toLowerCase():
            case `${content.slice(0, 3)} good morning bot !`:
            case `${content.slice(0, 3)} Good morning bot !`:
            case `${content.slice(0, 3)} good Morning bot !`:
            case `${content.slice(0, 3)} good morning Bot !`:
            case `${content.slice(0, 3)} Good Morning Bot !`:
            case `${content.slice(0, 3)} Good Morning bot !`.toUpperCase():
            case `${content.slice(0, 3)} Good Morning bot !`.toLowerCase():
            case `${content.slice(0, 3)}good morning`:
            case `${content.slice(0, 3)}Good morning`:
            case `${content.slice(0, 3)}good Morning`:
            case `${content.slice(0, 3)}Good Morning`:
            case `${content.slice(0, 3)}Good Morning`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning`.toLowerCase():
            case `${content.slice(0, 3)}good morning.`:
            case `${content.slice(0, 3)}Good morning.`:
            case `${content.slice(0, 3)}good Morning.`:
            case `${content.slice(0, 3)}Good Morning.`:
            case `${content.slice(0, 3)}Good Morning.`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning.`.toLowerCase():
            case `${content.slice(0, 3)}good morning!`:
            case `${content.slice(0, 3)}Good morning!`:
            case `${content.slice(0, 3)}good Morning!`:
            case `${content.slice(0, 3)}Good Morning!`:
            case `${content.slice(0, 3)}Good Morning!`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning!`.toLowerCase():
            case `${content.slice(0, 3)}good morning !`:
            case `${content.slice(0, 3)}Good morning !`:
            case `${content.slice(0, 3)}good Morning !`:
            case `${content.slice(0, 3)}Good Morning !`:
            case `${content.slice(0, 3)}Good Morning !`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning !`.toLowerCase():
            case `${content.slice(0, 3)}good morning there`:
            case `${content.slice(0, 3)}Good morning there`:
            case `${content.slice(0, 3)}good Morning there`:
            case `${content.slice(0, 3)}good morning There`:
            case `${content.slice(0, 3)}Good Morning There`:
            case `${content.slice(0, 3)}Good Morning there`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning there`.toLowerCase():
            case `${content.slice(0, 3)}good morning there.`:
            case `${content.slice(0, 3)}Good morning there.`:
            case `${content.slice(0, 3)}good Morning there.`:
            case `${content.slice(0, 3)}good morning There.`:
            case `${content.slice(0, 3)}Good Morning There.`:
            case `${content.slice(0, 3)}Good Morning there.`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning there.`.toLowerCase():
            case `${content.slice(0, 3)}good morning there!`:
            case `${content.slice(0, 3)}Good morning there!`:
            case `${content.slice(0, 3)}good Morning there!`:
            case `${content.slice(0, 3)}good morning There!`:
            case `${content.slice(0, 3)}Good Morning There!`:
            case `${content.slice(0, 3)}Good Morning there!`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning there!`.toLowerCase():
            case `${content.slice(0, 3)}good morning there !`:
            case `${content.slice(0, 3)}Good morning there !`:
            case `${content.slice(0, 3)}good Morning there !`:
            case `${content.slice(0, 3)}good morning There !`:
            case `${content.slice(0, 3)}Good Morning There !`:
            case `${content.slice(0, 3)}Good Morning there !`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning there !`.toLowerCase():
            case `${content.slice(0, 3)}good morning bot`:
            case `${content.slice(0, 3)}Good morning bot`:
            case `${content.slice(0, 3)}good Morning bot`:
            case `${content.slice(0, 3)}good morning Bot`:
            case `${content.slice(0, 3)}Good Morning Bot`:
            case `${content.slice(0, 3)}Good Morning bot`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning bot`.toLowerCase():
            case `${content.slice(0, 3)}good morning bot.`:
            case `${content.slice(0, 3)}Good morning bot.`:
            case `${content.slice(0, 3)}good Morning bot.`:
            case `${content.slice(0, 3)}good morning Bot.`:
            case `${content.slice(0, 3)}Good Morning Bot.`:
            case `${content.slice(0, 3)}Good Morning bot.`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning bot.`.toLowerCase():
            case `${content.slice(0, 3)}good morning bot!`:
            case `${content.slice(0, 3)}Good morning bot!`:
            case `${content.slice(0, 3)}good Morning bot!`:
            case `${content.slice(0, 3)}good morning Bot!`:
            case `${content.slice(0, 3)}Good Morning Bot!`:
            case `${content.slice(0, 3)}Good Morning bot!`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning bot!`.toLowerCase():
            case `${content.slice(0, 3)}good morning bot !`:
            case `${content.slice(0, 3)}Good morning bot !`:
            case `${content.slice(0, 3)}good Morning bot !`:
            case `${content.slice(0, 3)}good morning Bot !`:
            case `${content.slice(0, 3)}Good Morning Bot !`:
            case `${content.slice(0, 3)}Good Morning bot !`.toUpperCase():
            case `${content.slice(0, 3)}Good Morning bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Good morning ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} good afternoon`:
            case `${content.slice(0, 3)} Good afternoon`:
            case `${content.slice(0, 3)} good Afternoon`:
            case `${content.slice(0, 3)} Good Afternoon`:
            case `${content.slice(0, 3)} Good Afternoon`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon.`:
            case `${content.slice(0, 3)} Good afternoon.`:
            case `${content.slice(0, 3)} good Afternoon.`:
            case `${content.slice(0, 3)} Good Afternoon.`:
            case `${content.slice(0, 3)} Good Afternoon.`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon.`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon!`:
            case `${content.slice(0, 3)} Good afternoon!`:
            case `${content.slice(0, 3)} good Afternoon!`:
            case `${content.slice(0, 3)} Good Afternoon!`:
            case `${content.slice(0, 3)} Good Afternoon!`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon!`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon !`:
            case `${content.slice(0, 3)} Good afternoon !`:
            case `${content.slice(0, 3)} good Afternoon !`:
            case `${content.slice(0, 3)} Good Afternoon !`:
            case `${content.slice(0, 3)} Good Afternoon !`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon !`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon there`:
            case `${content.slice(0, 3)} Good afternoon there`:
            case `${content.slice(0, 3)} good Afternoon there`:
            case `${content.slice(0, 3)} good afternoon There`:
            case `${content.slice(0, 3)} Good Afternoon There`:
            case `${content.slice(0, 3)} Good Afternoon there`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon there`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon there.`:
            case `${content.slice(0, 3)} Good afternoon there.`:
            case `${content.slice(0, 3)} good Afternoon there.`:
            case `${content.slice(0, 3)} good afternoon There.`:
            case `${content.slice(0, 3)} Good Afternoon There.`:
            case `${content.slice(0, 3)} Good Afternoon there.`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon there.`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon there!`:
            case `${content.slice(0, 3)} Good afternoon there!`:
            case `${content.slice(0, 3)} good Afternoon there!`:
            case `${content.slice(0, 3)} good afternoon There!`:
            case `${content.slice(0, 3)} Good Afternoon There!`:
            case `${content.slice(0, 3)} Good Afternoon there!`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon there!`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon there !`:
            case `${content.slice(0, 3)} Good afternoon there !`:
            case `${content.slice(0, 3)} good Afternoon there !`:
            case `${content.slice(0, 3)} good afternoon There !`:
            case `${content.slice(0, 3)} Good Afternoon There !`:
            case `${content.slice(0, 3)} Good Afternoon there !`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon there !`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon bot`:
            case `${content.slice(0, 3)} Good afternoon bot`:
            case `${content.slice(0, 3)} good Afternoon bot`:
            case `${content.slice(0, 3)} good afternoon Bot`:
            case `${content.slice(0, 3)} Good Afternoon Bot`:
            case `${content.slice(0, 3)} Good Afternoon bot`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon bot`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon bot.`:
            case `${content.slice(0, 3)} Good afternoon bot.`:
            case `${content.slice(0, 3)} good Afternoon bot.`:
            case `${content.slice(0, 3)} good afternoon Bot.`:
            case `${content.slice(0, 3)} Good Afternoon Bot.`:
            case `${content.slice(0, 3)} Good Afternoon bot.`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon bot.`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon bot!`:
            case `${content.slice(0, 3)} Good afternoon bot!`:
            case `${content.slice(0, 3)} good Afternoon bot!`:
            case `${content.slice(0, 3)} good afternoon Bot!`:
            case `${content.slice(0, 3)} Good Afternoon Bot!`:
            case `${content.slice(0, 3)} Good Afternoon bot!`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon bot!`.toLowerCase():
            case `${content.slice(0, 3)} good afternoon bot !`:
            case `${content.slice(0, 3)} Good afternoon bot !`:
            case `${content.slice(0, 3)} good Afternoon bot !`:
            case `${content.slice(0, 3)} good afternoon Bot !`:
            case `${content.slice(0, 3)} Good Afternoon Bot !`:
            case `${content.slice(0, 3)} Good Afternoon bot !`.toUpperCase():
            case `${content.slice(0, 3)} Good Afternoon bot !`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon`:
            case `${content.slice(0, 3)}Good afternoon`:
            case `${content.slice(0, 3)}good Afternoon`:
            case `${content.slice(0, 3)}Good Afternoon`:
            case `${content.slice(0, 3)}Good Afternoon`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon.`:
            case `${content.slice(0, 3)}Good afternoon.`:
            case `${content.slice(0, 3)}good Afternoon.`:
            case `${content.slice(0, 3)}Good Afternoon.`:
            case `${content.slice(0, 3)}Good Afternoon.`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon.`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon!`:
            case `${content.slice(0, 3)}Good afternoon!`:
            case `${content.slice(0, 3)}good Afternoon!`:
            case `${content.slice(0, 3)}Good Afternoon!`:
            case `${content.slice(0, 3)}Good Afternoon!`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon!`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon !`:
            case `${content.slice(0, 3)}Good afternoon !`:
            case `${content.slice(0, 3)}good Afternoon !`:
            case `${content.slice(0, 3)}Good Afternoon !`:
            case `${content.slice(0, 3)}Good Afternoon !`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon !`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon there`:
            case `${content.slice(0, 3)}Good afternoon there`:
            case `${content.slice(0, 3)}good Afternoon there`:
            case `${content.slice(0, 3)}good afternoon There`:
            case `${content.slice(0, 3)}Good Afternoon There`:
            case `${content.slice(0, 3)}Good Afternoon there`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon there`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon there.`:
            case `${content.slice(0, 3)}Good afternoon there.`:
            case `${content.slice(0, 3)}good Afternoon there.`:
            case `${content.slice(0, 3)}good afternoon There.`:
            case `${content.slice(0, 3)}Good Afternoon There.`:
            case `${content.slice(0, 3)}Good Afternoon there.`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon there.`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon there!`:
            case `${content.slice(0, 3)}Good afternoon there!`:
            case `${content.slice(0, 3)}good Afternoon there!`:
            case `${content.slice(0, 3)}good afternoon There!`:
            case `${content.slice(0, 3)}Good Afternoon There!`:
            case `${content.slice(0, 3)}Good Afternoon there!`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon there!`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon there !`:
            case `${content.slice(0, 3)}Good afternoon there !`:
            case `${content.slice(0, 3)}good Afternoon there !`:
            case `${content.slice(0, 3)}good afternoon There !`:
            case `${content.slice(0, 3)}Good Afternoon There !`:
            case `${content.slice(0, 3)}Good Afternoon there !`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon there !`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon bot`:
            case `${content.slice(0, 3)}Good afternoon bot`:
            case `${content.slice(0, 3)}good Afternoon bot`:
            case `${content.slice(0, 3)}good afternoon Bot`:
            case `${content.slice(0, 3)}Good Afternoon Bot`:
            case `${content.slice(0, 3)}Good Afternoon bot`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon bot`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon bot.`:
            case `${content.slice(0, 3)}Good afternoon bot.`:
            case `${content.slice(0, 3)}good Afternoon bot.`:
            case `${content.slice(0, 3)}good afternoon Bot.`:
            case `${content.slice(0, 3)}Good Afternoon Bot.`:
            case `${content.slice(0, 3)}Good Afternoon bot.`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon bot.`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon bot!`:
            case `${content.slice(0, 3)}Good afternoon bot!`:
            case `${content.slice(0, 3)}good Afternoon bot!`:
            case `${content.slice(0, 3)}good afternoon Bot!`:
            case `${content.slice(0, 3)}Good Afternoon Bot!`:
            case `${content.slice(0, 3)}Good Afternoon bot!`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon bot!`.toLowerCase():
            case `${content.slice(0, 3)}good afternoon bot !`:
            case `${content.slice(0, 3)}Good afternoon bot !`:
            case `${content.slice(0, 3)}good Afternoon bot !`:
            case `${content.slice(0, 3)}good afternoon Bot !`:
            case `${content.slice(0, 3)}Good Afternoon Bot !`:
            case `${content.slice(0, 3)}Good Afternoon bot !`.toUpperCase():
            case `${content.slice(0, 3)}Good Afternoon bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `Good afternoon ${state.generalInfo.firstName} how can i help you ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} thanks`:
            case `${content.slice(0, 3)} Thanks`:
            case `${content.slice(0, 3)} Thanks`.toUpperCase():
            case `${content.slice(0, 3)} Thanks`.toLowerCase():
            case `${content.slice(0, 3)} thanks.`:
            case `${content.slice(0, 3)} Thanks.`:
            case `${content.slice(0, 3)} Thanks.`.toUpperCase():
            case `${content.slice(0, 3)} Thanks.`.toLowerCase():
            case `${content.slice(0, 3)} thanks!`:
            case `${content.slice(0, 3)} Thanks!`:
            case `${content.slice(0, 3)} Thanks!`.toUpperCase():
            case `${content.slice(0, 3)} Thanks!`.toLowerCase():
            case `${content.slice(0, 3)} thanks !`:
            case `${content.slice(0, 3)} Thanks !`:
            case `${content.slice(0, 3)} Thanks !`.toUpperCase():
            case `${content.slice(0, 3)} Thanks !`.toLowerCase():
            case `${content.slice(0, 3)} Thx`:
            case `${content.slice(0, 3)} Thx`.toUpperCase():
            case `${content.slice(0, 3)} Thx`.toLowerCase():
            case `${content.slice(0, 3)} Thx.`:
            case `${content.slice(0, 3)} Thx.`.toUpperCase():
            case `${content.slice(0, 3)} Thx.`.toLowerCase():
            case `${content.slice(0, 3)} Thx!`:
            case `${content.slice(0, 3)} Thx!`.toUpperCase():
            case `${content.slice(0, 3)} Thx!`.toLowerCase():
            case `${content.slice(0, 3)} Thx !`:
            case `${content.slice(0, 3)} Thx !`.toUpperCase():
            case `${content.slice(0, 3)} Thx !`.toLowerCase():
            case `${content.slice(0, 3)} thanks there`:
            case `${content.slice(0, 3)} Thanks there`:
            case `${content.slice(0, 3)} thanks There`:
            case `${content.slice(0, 3)} Thanks There`:
            case `${content.slice(0, 3)} Thanks there`.toUpperCase():
            case `${content.slice(0, 3)} Thanks there`.toLowerCase():
            case `${content.slice(0, 3)} thanks there.`:
            case `${content.slice(0, 3)} Thanks there.`:
            case `${content.slice(0, 3)} thanks There.`:
            case `${content.slice(0, 3)} Thanks There.`:
            case `${content.slice(0, 3)} Thanks there.`.toUpperCase():
            case `${content.slice(0, 3)} Thanks there.`.toLowerCase():
            case `${content.slice(0, 3)} thanks there!`:
            case `${content.slice(0, 3)} Thanks there!`:
            case `${content.slice(0, 3)} thanks There!`:
            case `${content.slice(0, 3)} Thanks There!`:
            case `${content.slice(0, 3)} Thanks there!`.toUpperCase():
            case `${content.slice(0, 3)} Thanks there!`.toLowerCase():
            case `${content.slice(0, 3)} thanks there !`:
            case `${content.slice(0, 3)} Thanks there !`:
            case `${content.slice(0, 3)} thanks There !`:
            case `${content.slice(0, 3)} Thanks There !`:
            case `${content.slice(0, 3)} Thanks there !`.toUpperCase():
            case `${content.slice(0, 3)} Thanks there !`.toLowerCase():
            case `${content.slice(0, 3)} thanks bot`:
            case `${content.slice(0, 3)} Thanks bot`:
            case `${content.slice(0, 3)} thanks Bot`:
            case `${content.slice(0, 3)} Thanks Bot`:
            case `${content.slice(0, 3)} Thanks bot`.toUpperCase():
            case `${content.slice(0, 3)} Thanks bot`.toLowerCase():
            case `${content.slice(0, 3)} thanks bot.`:
            case `${content.slice(0, 3)} Thanks bot.`:
            case `${content.slice(0, 3)} thanks Bot.`:
            case `${content.slice(0, 3)} Thanks Bot.`:
            case `${content.slice(0, 3)} Thanks bot.`.toUpperCase():
            case `${content.slice(0, 3)} Thanks bot.`.toLowerCase():
            case `${content.slice(0, 3)} thanks bot!`:
            case `${content.slice(0, 3)} Thanks bot!`:
            case `${content.slice(0, 3)} thanks Bot!`:
            case `${content.slice(0, 3)} Thanks Bot!`:
            case `${content.slice(0, 3)} Thanks bot!`.toUpperCase():
            case `${content.slice(0, 3)} Thanks bot!`.toLowerCase():
            case `${content.slice(0, 3)} thanks bot !`:
            case `${content.slice(0, 3)} Thanks bot !`:
            case `${content.slice(0, 3)} thanks Bot !`:
            case `${content.slice(0, 3)} Thanks Bot !`:
            case `${content.slice(0, 3)} Thanks bot !`.toUpperCase():
            case `${content.slice(0, 3)} Thanks bot !`.toLowerCase():
            case `${content.slice(0, 3)}thanks`:
            case `${content.slice(0, 3)}Thanks`:
            case `${content.slice(0, 3)}Thanks`.toUpperCase():
            case `${content.slice(0, 3)}Thanks`.toLowerCase():
            case `${content.slice(0, 3)}thanks.`:
            case `${content.slice(0, 3)}Thanks.`:
            case `${content.slice(0, 3)}Thanks.`.toUpperCase():
            case `${content.slice(0, 3)}Thanks.`.toLowerCase():
            case `${content.slice(0, 3)}thanks!`:
            case `${content.slice(0, 3)}Thanks!`:
            case `${content.slice(0, 3)}Thanks!`.toUpperCase():
            case `${content.slice(0, 3)}Thanks!`.toLowerCase():
            case `${content.slice(0, 3)}thanks !`:
            case `${content.slice(0, 3)}Thanks !`:
            case `${content.slice(0, 3)}Thanks !`.toUpperCase():
            case `${content.slice(0, 3)}Thanks !`.toLowerCase():
            case `${content.slice(0, 3)}Thx`:
            case `${content.slice(0, 3)}Thx`.toUpperCase():
            case `${content.slice(0, 3)}Thx`.toLowerCase():
            case `${content.slice(0, 3)}Thx.`:
            case `${content.slice(0, 3)}Thx.`.toUpperCase():
            case `${content.slice(0, 3)}Thx.`.toLowerCase():
            case `${content.slice(0, 3)}Thx!`:
            case `${content.slice(0, 3)}Thx!`.toUpperCase():
            case `${content.slice(0, 3)}Thx!`.toLowerCase():
            case `${content.slice(0, 3)}Thx !`:
            case `${content.slice(0, 3)}Thx !`.toUpperCase():
            case `${content.slice(0, 3)}Thx !`.toLowerCase():
            case `${content.slice(0, 3)}thanks there`:
            case `${content.slice(0, 3)}Thanks there`:
            case `${content.slice(0, 3)}thanks There`:
            case `${content.slice(0, 3)}Thanks There`:
            case `${content.slice(0, 3)}Thanks there`.toUpperCase():
            case `${content.slice(0, 3)}Thanks there`.toLowerCase():
            case `${content.slice(0, 3)}thanks there.`:
            case `${content.slice(0, 3)}Thanks there.`:
            case `${content.slice(0, 3)}thanks There.`:
            case `${content.slice(0, 3)}Thanks There.`:
            case `${content.slice(0, 3)}Thanks there.`.toUpperCase():
            case `${content.slice(0, 3)}Thanks there.`.toLowerCase():
            case `${content.slice(0, 3)}thanks there!`:
            case `${content.slice(0, 3)}Thanks there!`:
            case `${content.slice(0, 3)}thanks There!`:
            case `${content.slice(0, 3)}Thanks There!`:
            case `${content.slice(0, 3)}Thanks there!`.toUpperCase():
            case `${content.slice(0, 3)}Thanks there!`.toLowerCase():
            case `${content.slice(0, 3)}thanks there !`:
            case `${content.slice(0, 3)}Thanks there !`:
            case `${content.slice(0, 3)}thanks There !`:
            case `${content.slice(0, 3)}Thanks There !`:
            case `${content.slice(0, 3)}Thanks there !`.toUpperCase():
            case `${content.slice(0, 3)}Thanks there !`.toLowerCase():
            case `${content.slice(0, 3)}thanks bot`:
            case `${content.slice(0, 3)}Thanks bot`:
            case `${content.slice(0, 3)}thanks Bot`:
            case `${content.slice(0, 3)}Thanks Bot`:
            case `${content.slice(0, 3)}Thanks bot`.toUpperCase():
            case `${content.slice(0, 3)}Thanks bot`.toLowerCase():
            case `${content.slice(0, 3)}thanks bot.`:
            case `${content.slice(0, 3)}Thanks bot.`:
            case `${content.slice(0, 3)}thanks Bot.`:
            case `${content.slice(0, 3)}Thanks Bot.`:
            case `${content.slice(0, 3)}Thanks bot.`.toUpperCase():
            case `${content.slice(0, 3)}Thanks bot.`.toLowerCase():
            case `${content.slice(0, 3)}thanks bot!`:
            case `${content.slice(0, 3)}Thanks bot!`:
            case `${content.slice(0, 3)}thanks Bot!`:
            case `${content.slice(0, 3)}Thanks Bot!`:
            case `${content.slice(0, 3)}Thanks bot!`.toUpperCase():
            case `${content.slice(0, 3)}Thanks bot!`.toLowerCase():
            case `${content.slice(0, 3)}thanks bot !`:
            case `${content.slice(0, 3)}Thanks bot !`:
            case `${content.slice(0, 3)}thanks Bot !`:
            case `${content.slice(0, 3)}Thanks Bot !`:
            case `${content.slice(0, 3)}Thanks bot !`.toUpperCase():
            case `${content.slice(0, 3)}Thanks bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `any time ${state.generalInfo.firstName}, Is there anything else I can help you with ?`,
                        isBotMessage: true,
                    })
                );
                break;

            case `${content.slice(0, 3)} bey`:
            case `${content.slice(0, 3)} Bey`:
            case `${content.slice(0, 3)} Bey`.toUpperCase():
            case `${content.slice(0, 3)} Bey`.toLowerCase():
            case `${content.slice(0, 3)} bey.`:
            case `${content.slice(0, 3)} Bey.`:
            case `${content.slice(0, 3)} Bey.`.toUpperCase():
            case `${content.slice(0, 3)} Bey.`.toLowerCase():
            case `${content.slice(0, 3)} bey!`:
            case `${content.slice(0, 3)} Bey!`:
            case `${content.slice(0, 3)} Bey!`.toUpperCase():
            case `${content.slice(0, 3)} Bey!`.toLowerCase():
            case `${content.slice(0, 3)} bey !`:
            case `${content.slice(0, 3)} Bey !`:
            case `${content.slice(0, 3)} Bey !`.toUpperCase():
            case `${content.slice(0, 3)} Bey !`.toLowerCase():
            case `${content.slice(0, 3)} bey there`:
            case `${content.slice(0, 3)} Bey there`:
            case `${content.slice(0, 3)} bey There`:
            case `${content.slice(0, 3)} Bey There`:
            case `${content.slice(0, 3)} Bey there`.toUpperCase():
            case `${content.slice(0, 3)} Bey there`.toLowerCase():
            case `${content.slice(0, 3)} bey there.`:
            case `${content.slice(0, 3)} Bey there.`:
            case `${content.slice(0, 3)} bey There.`:
            case `${content.slice(0, 3)} Bey There.`:
            case `${content.slice(0, 3)} Bey there.`.toUpperCase():
            case `${content.slice(0, 3)} Bey there.`.toLowerCase():
            case `${content.slice(0, 3)} bey there!`:
            case `${content.slice(0, 3)} Bey there!`:
            case `${content.slice(0, 3)} bey There!`:
            case `${content.slice(0, 3)} Bey There!`:
            case `${content.slice(0, 3)} Bey there!`.toUpperCase():
            case `${content.slice(0, 3)} Bey there!`.toLowerCase():
            case `${content.slice(0, 3)} bey there !`:
            case `${content.slice(0, 3)} Bey there !`:
            case `${content.slice(0, 3)} bey There !`:
            case `${content.slice(0, 3)} Bey There !`:
            case `${content.slice(0, 3)} Bey there !`.toUpperCase():
            case `${content.slice(0, 3)} Bey there !`.toLowerCase():
            case `${content.slice(0, 3)} bey bot`:
            case `${content.slice(0, 3)} Bey bot`:
            case `${content.slice(0, 3)} bey Bot`:
            case `${content.slice(0, 3)} Bey Bot`:
            case `${content.slice(0, 3)} Bey bot`.toUpperCase():
            case `${content.slice(0, 3)} Bey bot`.toLowerCase():
            case `${content.slice(0, 3)} bey bot.`:
            case `${content.slice(0, 3)} Bey bot.`:
            case `${content.slice(0, 3)} bey Bot.`:
            case `${content.slice(0, 3)} Bey Bot.`:
            case `${content.slice(0, 3)} Bey bot.`.toUpperCase():
            case `${content.slice(0, 3)} Bey bot.`.toLowerCase():
            case `${content.slice(0, 3)} bey bot!`:
            case `${content.slice(0, 3)} Bey bot!`:
            case `${content.slice(0, 3)} bey Bot!`:
            case `${content.slice(0, 3)} Bey Bot!`:
            case `${content.slice(0, 3)} Bey bot!`.toUpperCase():
            case `${content.slice(0, 3)} Bey bot!`.toLowerCase():
            case `${content.slice(0, 3)} bey bot !`:
            case `${content.slice(0, 3)} Bey bot !`:
            case `${content.slice(0, 3)} bey Bot !`:
            case `${content.slice(0, 3)} Bey Bot !`:
            case `${content.slice(0, 3)} Bey bot !`.toUpperCase():
            case `${content.slice(0, 3)} Bey bot !`.toLowerCase():
            case `${content.slice(0, 3)}bey`:
            case `${content.slice(0, 3)}Bey`:
            case `${content.slice(0, 3)}Bey`.toUpperCase():
            case `${content.slice(0, 3)}Bey`.toLowerCase():
            case `${content.slice(0, 3)}bey.`:
            case `${content.slice(0, 3)}Bey.`:
            case `${content.slice(0, 3)}Bey.`.toUpperCase():
            case `${content.slice(0, 3)}Bey.`.toLowerCase():
            case `${content.slice(0, 3)}bey!`:
            case `${content.slice(0, 3)}Bey!`:
            case `${content.slice(0, 3)}Bey!`.toUpperCase():
            case `${content.slice(0, 3)}Bey!`.toLowerCase():
            case `${content.slice(0, 3)}bey !`:
            case `${content.slice(0, 3)}Bey !`:
            case `${content.slice(0, 3)}Bey !`.toUpperCase():
            case `${content.slice(0, 3)}Bey !`.toLowerCase():
            case `${content.slice(0, 3)}bey there`:
            case `${content.slice(0, 3)}Bey there`:
            case `${content.slice(0, 3)}bey There`:
            case `${content.slice(0, 3)}Bey There`:
            case `${content.slice(0, 3)}Bey there`.toUpperCase():
            case `${content.slice(0, 3)}Bey there`.toLowerCase():
            case `${content.slice(0, 3)}bey there.`:
            case `${content.slice(0, 3)}Bey there.`:
            case `${content.slice(0, 3)}bey There.`:
            case `${content.slice(0, 3)}Bey There.`:
            case `${content.slice(0, 3)}Bey there.`.toUpperCase():
            case `${content.slice(0, 3)}Bey there.`.toLowerCase():
            case `${content.slice(0, 3)}bey there!`:
            case `${content.slice(0, 3)}Bey there!`:
            case `${content.slice(0, 3)}bey There!`:
            case `${content.slice(0, 3)}Bey There!`:
            case `${content.slice(0, 3)}Bey there!`.toUpperCase():
            case `${content.slice(0, 3)}Bey there!`.toLowerCase():
            case `${content.slice(0, 3)}bey there !`:
            case `${content.slice(0, 3)}Bey there !`:
            case `${content.slice(0, 3)}bey There !`:
            case `${content.slice(0, 3)}Bey There !`:
            case `${content.slice(0, 3)}Bey there !`.toUpperCase():
            case `${content.slice(0, 3)}Bey there !`.toLowerCase():
            case `${content.slice(0, 3)}bey bot`:
            case `${content.slice(0, 3)}Bey bot`:
            case `${content.slice(0, 3)}bey Bot`:
            case `${content.slice(0, 3)}Bey Bot`:
            case `${content.slice(0, 3)}Bey bot`.toUpperCase():
            case `${content.slice(0, 3)}Bey bot`.toLowerCase():
            case `${content.slice(0, 3)}bey bot.`:
            case `${content.slice(0, 3)}Bey bot.`:
            case `${content.slice(0, 3)}bey Bot.`:
            case `${content.slice(0, 3)}Bey Bot.`:
            case `${content.slice(0, 3)}Bey bot.`.toUpperCase():
            case `${content.slice(0, 3)}Bey bot.`.toLowerCase():
            case `${content.slice(0, 3)}bey bot!`:
            case `${content.slice(0, 3)}Bey bot!`:
            case `${content.slice(0, 3)}bey Bot!`:
            case `${content.slice(0, 3)}Bey Bot!`:
            case `${content.slice(0, 3)}Bey bot!`.toUpperCase():
            case `${content.slice(0, 3)}Bey bot!`.toLowerCase():
            case `${content.slice(0, 3)}bey bot !`:
            case `${content.slice(0, 3)}Bey bot !`:
            case `${content.slice(0, 3)}bey Bot !`:
            case `${content.slice(0, 3)}Bey Bot !`:
            case `${content.slice(0, 3)}Bey bot !`.toUpperCase():
            case `${content.slice(0, 3)}Bey bot !`.toLowerCase():
                dispatch(
                    sendChatBotMessageAction({
                        content: `see you ${state.generalInfo.firstName}, When you need me send a message.`,
                        isBotMessage: true,
                    })
                );
                break;

            default:
                dispatch(
                    sendChatBotMessageAction({
                        content: "Sorry but i didn't match your sayHello.",
                        isBotMessage: true,
                    })
                );
        }
        return messageType;
    }

    return messageType;
}
