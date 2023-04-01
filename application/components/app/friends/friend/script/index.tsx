import { FriendMessage, MessageType } from "../../types/main";

export function friendMessage(
    messageDescription: string,
    delay: number,
    friendName: string,
    friendId: number,
    { state, dispatch }: FriendMessage
): MessageType {
    let messageType: MessageType = "sayHello";

    if (
        messageDescription === "Welcome" ||
        messageDescription === "Welcome".toUpperCase() ||
        messageDescription === "Welcome".toLowerCase() ||
        messageDescription.startsWith("h") ||
        messageDescription.startsWith("h".toUpperCase()) ||
        messageDescription.startsWith("g") ||
        messageDescription.startsWith("g".toUpperCase()) ||
        messageDescription.startsWith("b") ||
        messageDescription.startsWith("b".toUpperCase()) ||
        messageDescription.startsWith("t") ||
        messageDescription.startsWith("t".toUpperCase()) ||
        messageDescription.startsWith("f") ||
        messageDescription.startsWith("f".toUpperCase())
    )
        messageType = "sayHello";

    if (
        messageDescription.startsWith("Wh") ||
        messageDescription.startsWith("Wh".toUpperCase()) ||
        messageDescription.startsWith("Wh".toLowerCase()) ||
        messageDescription.startsWith("How") ||
        messageDescription.startsWith("How".toUpperCase()) ||
        messageDescription.startsWith("How".toLowerCase()) ||
        messageDescription.endsWith("?") ||
        messageDescription.endsWith("!")
    )
        messageType = "interrogativeQuestion";

    if (
        messageDescription === "Yes" ||
        messageDescription === "Yes".toUpperCase() ||
        messageDescription === "Yes".toLowerCase() ||
        messageDescription === "No" ||
        messageDescription === "No".toUpperCase() ||
        messageDescription === "No".toLowerCase() ||
        messageDescription === `${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}` ||
        messageDescription === friendName.toUpperCase() ||
        messageDescription === friendName.toLowerCase() ||
        messageDescription.startsWith("I") ||
        messageDescription.startsWith("i".toLowerCase()) ||
        messageDescription.startsWith("You") ||
        messageDescription.startsWith("You".toUpperCase()) ||
        messageDescription.startsWith("You".toLowerCase())
    )
        messageType = "rightOrWrong";

    if (messageType === "sayHello") {
        setTimeout(() => {
            switch (messageDescription) {
                case "Welcome":
                case "Welcome".toUpperCase():
                case "Welcome".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Welcome ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Good morning":
                case "Good morning".toUpperCase():
                case "Good morning".toLowerCase():
                case "good Morning":
                case "good Morning".toUpperCase():
                case "good Morning".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Good morning ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Good afternoon":
                case "Good afternoon".toUpperCase():
                case "Good afternoon".toLowerCase():
                case "good Afternoon":
                case "good Afternoon".toUpperCase():
                case "good Afternoon".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Good afternoon ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Bey":
                case "Bey".toUpperCase():
                case "Bey".toLowerCase():
                case "By":
                case "By".toUpperCase():
                case "By".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `see you ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Thanks":
                case "Thanks".toUpperCase():
                case "Thanks".toLowerCase():
                case "Thx":
                case "Thx".toUpperCase():
                case "Thx".toLowerCase():
                case "Thank you":
                case "thank You":
                case "Thank you".toUpperCase():
                case "Thank you".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `any time ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Hello":
                case "Hello".toUpperCase():
                case "Hello".toLowerCase():
                case "Hallo":
                case "Hallo".toUpperCase():
                case "Hallo".toLowerCase():
                case "Hi":
                case "Hi".toUpperCase():
                case "Hi".toLowerCase():
                case "Hey":
                case "Hey".toUpperCase():
                case "Hey".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `${messageDescription} ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Hello There":
                case "Hello there":
                case "Hello there".toUpperCase():
                case "Hello there".toLowerCase():
                case "Hello You":
                case "Hello you":
                case "hello You":
                case "Hello you".toUpperCase():
                case "Hello you".toLowerCase():
                case `Hello ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hello ${`${friendName.slice(0, 1).toLowerCase()}${friendName.slice(1)}`}`:
                case `hello ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hello ${friendName}`.toUpperCase():
                case `Hello ${friendName}`.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Hello ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Hallo There":
                case "Hallo there":
                case "Hallo there".toUpperCase():
                case "Hallo there".toLowerCase():
                case "Hallo You":
                case "Hallo you":
                case "hallo You":
                case "Hallo you".toUpperCase():
                case "Hallo you".toLowerCase():
                case `Hallo ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hallo ${`${friendName.slice(0, 1).toLowerCase()}${friendName.slice(1)}`}`:
                case `hallo ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hallo ${friendName}`.toUpperCase():
                case `Hallo ${friendName}`.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Hallo ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Hi There":
                case "Hi there":
                case "hi There":
                case "Hi there".toUpperCase():
                case "Hi there".toLowerCase():
                case "Hi You":
                case "Hi you":
                case "hi You":
                case "Hi you".toUpperCase():
                case "Hi you".toLowerCase():
                case `Hi ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hi ${`${friendName.slice(0, 1).toLowerCase()}${friendName.slice(1)}`}`:
                case `hi ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hi ${friendName}`.toUpperCase():
                case `Hi ${friendName}`.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Hi ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                case "Hey There":
                case "Hey there":
                case "hey There":
                case "Hey there".toUpperCase():
                case "Hey there".toLowerCase():
                case "Hey You":
                case "Hey you":
                case "hey You":
                case "Hey you".toUpperCase():
                case "Hey you".toLowerCase():
                case `Hey ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hey ${`${friendName.slice(0, 1).toLowerCase()}${friendName.slice(1)}`}`:
                case `hello ${`${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`}`:
                case `Hey ${friendName}`.toUpperCase():
                case `Hey ${friendName}`.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Hey ${state.generalInfo.firstName} !`,
                            },
                        },
                    });
                    break;

                default:
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Sorry i didn't understand ${messageDescription}.`,
                            },
                        },
                    });
            }
        }, delay);

        return messageType;
    }

    if (messageType === "interrogativeQuestion") {
        setTimeout(() => {
            switch (messageDescription) {
                case "What's your name":
                case "what's Your name":
                case "what's your Name":
                case "What's your name".toUpperCase():
                case "What's your name".toLowerCase():
                case "What's your name ?":
                case "what's Your name ?":
                case "what's your Name ?":
                case "What's your name ?".toUpperCase():
                case "What's your name ?".toLowerCase():
                case "What's your name?":
                case "what's Your name?":
                case "what's your Name?":
                case "What's your name?".toUpperCase():
                case "What's your name?".toLowerCase():
                case "What's your name !":
                case "what's Your name !":
                case "what's your Name !":
                case "What's your name !".toUpperCase():
                case "What's your name !".toLowerCase():
                case "What's your name!":
                case "what's Your name!":
                case "what's your Name!":
                case "What's your name!".toUpperCase():
                case "What's your name!".toLowerCase():
                case "What is your name":
                case "what Is your name":
                case "what is Your name":
                case "what is your Name":
                case "what is your Name".toUpperCase():
                case "what is your Name".toLowerCase():
                case "What is your name ?":
                case "what Is your name ?":
                case "what is Your name ?":
                case "what is your Name ?":
                case "what is your Name ?".toUpperCase():
                case "what is your Name ?".toLowerCase():
                case "What is your name?":
                case "what Is your name?":
                case "what is Your name?":
                case "what is your Name?":
                case "what is your Name?".toUpperCase():
                case "what is your Name?".toLowerCase():
                case "What is your name !":
                case "what Is your name !":
                case "what is Your name !":
                case "what is your Name !":
                case "what is your Name !".toUpperCase():
                case "what is your Name !".toLowerCase():
                case "What is your name!":
                case "what Is your name!":
                case "what is Your name!":
                case "what is your Name!":
                case "what is your Name!".toUpperCase():
                case "what is your Name!".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `My name is ${friendName}.`,
                            },
                        },
                    });
                    break;

                case "What's my name":
                case "what's My name":
                case "what's my Name":
                case "What's my name".toUpperCase():
                case "What's my name".toLowerCase():
                case "What's my name ?":
                case "what's My name ?":
                case "what's my Name ?":
                case "What's my name ?".toUpperCase():
                case "What's my name ?".toLowerCase():
                case "What's my name !":
                case "what's My name !":
                case "what's my Name !":
                case "What's my name !".toUpperCase():
                case "What's my name !".toLowerCase():
                case "What's my name?":
                case "what's My name?":
                case "what's my Name?":
                case "What's my name?".toUpperCase():
                case "What's my name?".toLowerCase():
                case "What's my name!":
                case "what's My name!":
                case "what's my Name!":
                case "What's my name!".toUpperCase():
                case "What's my name!".toLowerCase():
                case "What is my name":
                case "what Is my name":
                case "what is My name":
                case "what is my Name":
                case "what is my Name".toUpperCase():
                case "what is my Name".toLowerCase():
                case "What is my name ?":
                case "what Is my name ?":
                case "what is My name ?":
                case "what is my Name ?":
                case "what is my Name ?".toUpperCase():
                case "what is my Name ?".toLowerCase():
                case "What is my name !":
                case "what Is my name !":
                case "what is My name !":
                case "what is my Name !":
                case "what is my Name !".toUpperCase():
                case "what is my Name !".toLowerCase():
                case "What is my name?":
                case "what Is my name?":
                case "what is My name?":
                case "what is my Name?":
                case "what is my Name?".toUpperCase():
                case "what is my Name?".toLowerCase():
                case "What is my name !":
                case "what Is my name !":
                case "what is My name !":
                case "what is my Name !":
                case "what is my Name !".toUpperCase():
                case "what is my Name !".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Your name is ${state.generalInfo.firstName} ${state.generalInfo.lastName}.`,
                            },
                        },
                    });
                    break;

                case "Who are you":
                case "who Are you":
                case "who are You":
                case "Who are you".toUpperCase():
                case "Who are you".toLowerCase():
                case "Who are you ?":
                case "who Are you ?":
                case "who are You ?":
                case "Who are you ?".toUpperCase():
                case "Who are you ?".toLowerCase():
                case "Who are you !":
                case "who Are you !":
                case "who are You !":
                case "Who are you !".toUpperCase():
                case "Who are you !".toLowerCase():
                case "Who are you?":
                case "who Are you?":
                case "who are You?":
                case "Who are you?".toUpperCase():
                case "Who are you?".toLowerCase():
                case "Who are you!":
                case "who Are you!":
                case "who are You!":
                case "Who are you!".toUpperCase():
                case "Who are you!".toLowerCase():
                case "Who you are":
                case "who You are":
                case "who you Are":
                case "Who you are".toUpperCase():
                case "Who you are".toLowerCase():
                case "Who you are ?":
                case "who You are ?":
                case "who you Are ?":
                case "Who you are ?".toUpperCase():
                case "Who you are ?".toLowerCase():
                case "Who you are !":
                case "who You are !":
                case "who you Are !":
                case "Who you are !".toUpperCase():
                case "Who you are !".toLowerCase():
                case "Who you are?":
                case "who You are?":
                case "who you Are?":
                case "Who you are?".toUpperCase():
                case "Who you are?".toLowerCase():
                case "Who you are!":
                case "who You are!":
                case "who you Are!":
                case "Who you are!".toUpperCase():
                case "Who you are!".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `I'am ${friendName}.`,
                            },
                        },
                    });
                    break;

                case "Who made you":
                case "who Made you":
                case "who made You":
                case "Who made you".toUpperCase():
                case "Who made you".toLowerCase():
                case "Who made you ?":
                case "who Made you ?":
                case "who made You ?":
                case "Who made you ?".toUpperCase():
                case "Who made you ?".toLowerCase():
                case "Who made you?":
                case "who Made you?":
                case "who made You?":
                case "Who made you?".toUpperCase():
                case "Who made you?".toLowerCase():
                case "Who made you !":
                case "who Made you !":
                case "who made You !":
                case "Who made you !".toUpperCase():
                case "Who made you !".toLowerCase():
                case "Who made you!":
                case "who Made you!":
                case "who made You!":
                case "Who made you!".toUpperCase():
                case "Who made you!".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "@Aissa Bedr.",
                            },
                        },
                    });
                    break;

                case "How old are you":
                case "how Old are you":
                case "how old Are you":
                case "how old are You":
                case "How old are you".toUpperCase():
                case "How old are you".toLowerCase():
                case "How old are you ?":
                case "how Old are you ?":
                case "how old Are you ?":
                case "how old are You ?":
                case "How old are you ?".toUpperCase():
                case "How old are you ?".toLowerCase():
                case "How old are you?":
                case "how Old are you?":
                case "how old Are you?":
                case "how old are You?":
                case "How old are you?".toUpperCase():
                case "How old are you?".toLowerCase():
                case "How old are you !":
                case "how Old are you !":
                case "how old Are you !":
                case "how old are You !":
                case "How old are you !".toUpperCase():
                case "How old are you !".toLowerCase():
                case "How old are you!":
                case "how Old are you!":
                case "how old Are you!":
                case "how old are You!":
                case "How old are you!".toUpperCase():
                case "How old are you!".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "I don't know my age bro.",
                            },
                        },
                    });
                    break;

                case "How are you":
                case "how Are you":
                case "how are You":
                case "How are you".toUpperCase():
                case "How are you".toLowerCase():
                case "How are you ?":
                case "how Are you ?":
                case "how are You ?":
                case "How are you ?".toUpperCase():
                case "How are you ?".toLowerCase():
                case "How are you?":
                case "how Are you?":
                case "how are You?":
                case "How are you?".toUpperCase():
                case "How are you?".toLowerCase():
                case "How are you !":
                case "how Are you !":
                case "how are You !":
                case "How are you !".toUpperCase():
                case "How are you !".toLowerCase():
                case "How are you!":
                case "how Are you!":
                case "how are You!":
                case "How are you!".toUpperCase():
                case "How are you!".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "I'am fine.",
                            },
                        },
                    });
                    break;

                default:
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Sorry i didn't understand your question.`,
                            },
                        },
                    });
            }
        }, delay);

        return messageType;
    }

    if (messageType === "rightOrWrong") {
        setTimeout(() => {
            switch (messageDescription) {
                case "Yes":
                case "Yes".toUpperCase():
                case "Yes".toLowerCase():
                case "Yeah":
                case "Yeah".toUpperCase():
                case "Yeah".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "yeah",
                            },
                        },
                    });
                    break;

                case "No":
                case "No".toUpperCase():
                case "No".toLowerCase():
                case "Nah":
                case "Nah".toUpperCase():
                case "Nah".toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "yeah",
                            },
                        },
                    });
                    break;

                case `${friendName.slice(0, 1).toUpperCase()}${friendName.slice(1)}`:
                case friendName.toUpperCase():
                case friendName.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "yes",
                            },
                        },
                    });
                    break;

                case `I am ${state.generalInfo.firstName} ${state.generalInfo.lastName}`:
                case `i Am ${state.generalInfo.firstName} ${state.generalInfo.lastName}`:
                case `I am ${state.generalInfo.firstName}`:
                case `i Am ${state.generalInfo.firstName}`:
                case `${"I am".toUpperCase()} ${state.generalInfo.firstName} ${state.generalInfo.lastName}`:
                case `${"I am".toLowerCase()} ${state.generalInfo.firstName} ${state.generalInfo.lastName}`:
                case `${"I am".toUpperCase()} ${state.generalInfo.firstName}`:
                case `${"I am".toLowerCase()} ${state.generalInfo.firstName}`:
                case `I am ${state.generalInfo.firstName}`.toUpperCase():
                case `I am ${state.generalInfo.firstName}`.toLowerCase():
                case `I am ${state.generalInfo.firstName} ${state.generalInfo.lastName}`.toUpperCase():
                case `I am ${state.generalInfo.firstName} ${state.generalInfo.lastName}`.toLowerCase():
                case `I am ${state.generalInfo.firstName}`.toUpperCase():
                case `I am ${state.generalInfo.firstName}`.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "yes",
                            },
                        },
                    });
                    break;

                case `You am ${friendName}`:
                case `you Are ${friendName}`:
                case `You are ${friendName}`:
                case `you Are ${friendName}`:
                case `${"You are".toUpperCase()} ${friendName}`:
                case `${"You are".toLowerCase()} ${friendName}`:
                case `You are ${friendName}`.toUpperCase():
                case `You are ${friendName}`.toLowerCase():
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: "yes",
                            },
                        },
                    });
                    break;

                default:
                    dispatch({
                        type: "addMessage",
                        payload: {
                            friends: { id: friendId },
                            messages: {
                                isFriendMessage: true,
                                messageDescription: `Sorry i didn't understand ${messageDescription} question`,
                            },
                        },
                    });
            }
        }, delay);

        return messageType;
    }

    return messageType;
}
