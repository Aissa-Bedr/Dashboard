import { randomId } from "./../assests/logic/script";
import { AppState, AppStateAction } from "./types/main";

export const initialState: AppState = {
    currentLink: "dashboard",
    theme: "light",
    tasks: [],
    switchBooleans: {
        uiControl: {
            isUIControlActive: true,
            isThemeDark: false,
            isNavMinimized: false,
            isRounded: true,
            isNewSearchbar: false,
            isNavFixed: false,
            isNewNavbar: false,
            isNewNavInTheTop: false,
        },
        websiteControl: {
            isWebsiteControlActive: true,
            isNotificationActive: true,
            isZoomIn: false,
        },
        widgetsControl: {
            isWidgetsControlActive: true,
            isQuickDraftActive: false,
            isYearlyTargetsActive: false,
            isTicketsStatisticsActive: false,
            isLatestNewsActive: false,
            isLatestUploadsActive: false,
            isLastProjectProgressActive: false,
        },
    },
    generalInfo: {
        firstName: "Aissa",
        lastName: "Bedr",
    },
    userInfo: {
        designation: "Web Developer",
        projects: 80,
        earned: 8500,
    },
    skills: [],
    appearance: {
        light: {
            theme: "default",
            backgroundColor: "bg-blue-color hover:bg-blue-alt-color",
            color: "text-blue-color",
        },
        dark: {
            theme: "default",
            backgroundColor: "dark:bg-blue-dark-color dark:hover:bg-blue-dark-alt-color",
            color: "dark:text-blue-dark-color",
        },
        logo: {
            type: "default",
            src: "logos/favicon.ico",
        },
    },
    components: {
        switchButton: {
            type: "default",
        },
        inputField: {
            type: "default",
        },
        button: {
            type: "default",
        },
    },
    projects: [],
    reminders: [],
    quickDraft: {
        title: "Advice",
        content:
            "If You See Time Speeding Up, Then You Are Wrong Because It Is Constant And It Is At The Same Pace Every Day, But You May See It As Such Due To The Stupidity Of Your Use Of It !",
    },
};

function reducer(state = initialState, action: AppStateAction): AppState {
    switch (action.type) {
        case "changeLink":
            return { ...state, currentLink: action.payload?.links?.currentLinkValue! };

        case "toggleTheme":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isThemeDark: !state.switchBooleans.uiControl.isThemeDark,
                    },
                },
            };

        case "addTask":
            return {
                ...state,
                tasks: [
                    { id: randomId(), content: action.payload?.tasks?.content!, isCompleted: false },
                    ...state.tasks,
                ],
            };

        case "removeTask":
            return { ...state, tasks: [...state.tasks].filter((item) => item.id !== action.payload?.tasks?.id) };

        case "completeTask":
            return {
                ...state,
                tasks: [...state.tasks].map((item) =>
                    item.id === action.payload?.tasks?.id ? { ...item, isCompleted: true } : item
                ),
            };

        case "recoverTask":
            return {
                ...state,
                tasks: [...state.tasks].map((item) =>
                    item.id === action.payload?.tasks?.id ? { ...item, isCompleted: false } : item
                ),
            };

        case "toggleUIControl":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isUIControlActive: !state.switchBooleans.uiControl.isUIControlActive,
                    },
                },
            };

        case "toggleIsNavMinimized":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isNavMinimized: !state.switchBooleans.uiControl.isNavMinimized,
                    },
                },
            };

        case "toggleIsRounded":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isRounded: !state.switchBooleans.uiControl.isRounded,
                    },
                },
            };

        case "toggleIsNewSearchbar":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isNewSearchbar: !state.switchBooleans.uiControl.isNewSearchbar,
                    },
                },
            };

        case "toggleIsNavFixed":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isNavFixed: !state.switchBooleans.uiControl.isNavFixed,
                    },
                },
            };

        case "toggleIsNewNavbar":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isNewNavbar: !state.switchBooleans.uiControl.isNewNavbar,
                    },
                },
            };

        case "toggleIsNewNavInTheTop":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isNewNavInTheTop: !state.switchBooleans.uiControl.isNewNavInTheTop,
                    },
                },
            };

        case "toggleWebsiteControl":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    websiteControl: {
                        ...state.switchBooleans.websiteControl,
                        isWebsiteControlActive: !state.switchBooleans.websiteControl.isWebsiteControlActive,
                    },
                },
            };

        case "toggleIsNotificationActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    websiteControl: {
                        ...state.switchBooleans.websiteControl,
                        isNotificationActive: !state.switchBooleans.websiteControl.isNotificationActive,
                    },
                },
            };

        case "toggleIsZoomIn":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    websiteControl: {
                        ...state.switchBooleans.websiteControl,
                        isZoomIn: !state.switchBooleans.websiteControl.isZoomIn,
                    },
                },
            };

        case "toggleWidgetsControl":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isWidgetsControlActive: !state.switchBooleans.widgetsControl.isWidgetsControlActive,
                    },
                },
            };

        case "toggleIsQuickDraftActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isQuickDraftActive: !state.switchBooleans.widgetsControl.isQuickDraftActive,
                    },
                },
            };

        case "toggleIsYearlyTargetsActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isYearlyTargetsActive: !state.switchBooleans.widgetsControl.isYearlyTargetsActive,
                    },
                },
            };

        case "toggleIsTicketsStatisticsActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isTicketsStatisticsActive: !state.switchBooleans.widgetsControl.isTicketsStatisticsActive,
                    },
                },
            };

        case "toggleIsLatestNewsActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isLatestNewsActive: !state.switchBooleans.widgetsControl.isLatestNewsActive,
                    },
                },
            };

        case "toggleIsLatestUploadsActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isLatestUploadsActive: !state.switchBooleans.widgetsControl.isLatestUploadsActive,
                    },
                },
            };

        case "toggleIsLastProjectProgressActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    widgetsControl: {
                        ...state.switchBooleans.widgetsControl,
                        isLastProjectProgressActive: !state.switchBooleans.widgetsControl.isLastProjectProgressActive,
                    },
                },
            };

        case "changeGeneralInfo":
            return {
                ...state,
                generalInfo: {
                    firstName: action.payload?.generalInfo?.firstName!,
                    lastName: action.payload?.generalInfo?.lastName!,
                },
            };

        case "changeUserInfo":
            return {
                ...state,
                userInfo: {
                    designation: action.payload?.userInfo?.designation!,
                    projects: action.payload?.userInfo?.projects!,
                    earned: action.payload?.userInfo?.earned!,
                },
            };

        case "addSkill":
            return {
                ...state,
                skills: [{ id: randomId(), content: action.payload?.skills?.content! }, ...state.skills],
            };

        case "removeSkill":
            return {
                ...state,
                skills: [...state.skills].filter((skill) => skill.id !== action.payload?.skills?.id),
            };

        case "changeLightAppearance":
            return {
                ...state,
                appearance: {
                    ...state.appearance,
                    light: {
                        theme: action.payload?.appearance?.light?.theme!,
                        backgroundColor: action.payload?.appearance?.light?.backgroundColor!,
                        color: action.payload?.appearance?.light?.color!,
                    },
                },
            };

        case "changeDarkAppearance":
            return {
                ...state,
                appearance: {
                    ...state.appearance,
                    dark: {
                        theme: action.payload?.appearance?.dark?.theme!,
                        backgroundColor: action.payload?.appearance?.dark?.backgroundColor!,
                        color: action.payload?.appearance?.dark?.color!,
                    },
                },
            };

        case "changeSwitchButtonComponent":
            return {
                ...state,
                components: {
                    ...state.components,
                    switchButton: {
                        type: action.payload?.components?.switchButton?.type,
                    },
                },
            };

        case "changeInputFieldComponent":
            return {
                ...state,
                components: {
                    ...state.components,
                    inputField: {
                        type: action.payload?.components?.inputField?.type,
                    },
                },
            };

        case "changeButtonComponent":
            return {
                ...state,
                components: {
                    ...state.components,
                    button: {
                        type: action.payload?.components?.button?.type,
                    },
                },
            };

        case "addProject":
            return {
                ...state,
                projects: [
                    {
                        id: randomId(),
                        name: action.payload?.projects?.name!,
                        finishDate: action.payload?.projects?.finishDate!,
                        client: action.payload?.projects?.client!,
                        price: action.payload?.projects?.price!,
                        team: action.payload?.projects?.team!,
                        status: action.payload?.projects?.status!,
                    },
                    ...state.projects,
                ],
            };

        case "removeProject":
            return {
                ...state,
                projects: [...state.projects].filter((project) => project.id !== action.payload?.projects?.id),
            };

        case "addReminder":
            return {
                ...state,
                reminders: [
                    {
                        id: randomId(),
                        title: action.payload?.reminders?.title!,
                        time: action.payload?.reminders?.time!,
                        theme: action.payload?.reminders?.theme!,
                    },
                    ...state.reminders,
                ],
            };

        case "removeReminder":
            return {
                ...state,
                reminders: [...state.reminders].filter((reminder) => reminder.id !== action.payload?.reminders?.id),
            };

        case "changeQuickDraft":
            return {
                ...state,
                quickDraft: {
                    title: action.payload?.quickDraft?.title!,
                    content: action.payload?.quickDraft?.content!,
                },
            };

        case "changeLogoAppearance":
            return {
                ...state,
                appearance: {
                    ...state.appearance,
                    logo: {
                        type: action.payload?.appearance?.logo?.type!,
                        src: action.payload?.appearance?.logo?.src!,
                    },
                },
            };

        default:
            return state;
    }
}

export default reducer;
