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
            isSearchBarShowed: true,
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
            isLastProjectProgressActive: false,
        },
        profileControl: {
            isGeneralInfoActive: false,
            isPersonalInfoActive: true,
            isJobInfoActive: false,
            isBillingInfoActive: false,
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
    profileInfo: {
        email: "slayaissabedr@gmail.com",
        phone: 213552328332,
        gender: "male",
        country: "Algeria",
        birthDay: "20/10/2005",
        programmingLanguage: "TypeScript",
        experience: 1,
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
    files: [],
    reminders: [],
    projects: [],
    quickDraft: {
        title: "Advice",
        content:
            "If You See Time Speeding Up, Then You Are Wrong Because It Is Constant And It Is At The Same Pace Every Day, But You May See It As Such Due To The Stupidity Of Your Use Of It !",
    },
    posts: [],
    businessProjects: [],
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

        case "toggleIsSearchBarShowed":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isSearchBarShowed: !state.switchBooleans.uiControl.isSearchBarShowed,
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

        case "toggleIsGeneralInfoActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    profileControl: {
                        ...state.switchBooleans.profileControl,
                        isGeneralInfoActive: !state.switchBooleans.profileControl.isGeneralInfoActive,
                    },
                },
            };

        case "toggleIsPersonalInfoActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    profileControl: {
                        ...state.switchBooleans.profileControl,
                        isPersonalInfoActive: !state.switchBooleans.profileControl.isPersonalInfoActive,
                    },
                },
            };

        case "toggleIsJobInfoActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    profileControl: {
                        ...state.switchBooleans.profileControl,
                        isJobInfoActive: !state.switchBooleans.profileControl.isJobInfoActive,
                    },
                },
            };

        case "toggleIsBillingInfoActive":
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    profileControl: {
                        ...state.switchBooleans.profileControl,
                        isBillingInfoActive: !state.switchBooleans.profileControl.isBillingInfoActive,
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

        case "changeProfileInfo":
            return {
                ...state,
                profileInfo: {
                    email: action.payload?.profileInfo?.email!,
                    phone: action.payload?.profileInfo?.phone!,
                    gender: action.payload?.profileInfo?.gender!,
                    country: action.payload?.profileInfo?.country!,
                    birthDay: action.payload?.profileInfo?.birthDay!,
                    programmingLanguage: action.payload?.profileInfo?.programmingLanguage!,
                    experience: action.payload?.profileInfo?.experience!,
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

        case "uploadFile":
            return {
                ...state,
                files: [
                    {
                        id: randomId(),
                        fileName: action.payload?.files?.fileName!,
                        fileType: action.payload?.files?.fileType!,
                        fileUploader: action.payload?.files?.fileUploader!,
                        fileSize: action.payload?.files?.fileSize!,
                        fileSizeType: action.payload?.files?.fileSizeType!,
                    },
                    ...state.files,
                ],
            };

        case "removeFile":
            return {
                ...state,
                files: [...state.files].filter((file) => file.id !== action.payload?.files?.id),
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

        case "addPost":
            return {
                ...state,
                posts: [
                    {
                        id: randomId(),
                        postOwner: action.payload?.posts?.postOwner!,
                        postTitle: action.payload?.posts?.postTitle!,
                        postDescription: action.payload?.posts?.postDescription!,
                        isLiked: false,
                        isCommentsActive: false,
                        comments: [],
                    },
                    ...state.posts,
                ],
            };

        case "removePost":
            return {
                ...state,
                posts: [...state.posts].filter((post) => post.id !== action.payload?.posts?.id),
            };

        case "toggleIsLikedPost":
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id ? { ...post, isLiked: !post.isLiked } : post
                ),
            };

        case "toggleIsCommentsActive":
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id ? { ...post, isCommentsActive: !post.isCommentsActive } : post
                ),
            };

        case "addComment":
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id
                        ? {
                              ...post,
                              comments: [
                                  ...post.comments,
                                  {
                                      id: randomId(),
                                      commentDescription: action.payload?.comments?.commentDescription!,
                                      isLiked: false,
                                  },
                              ],
                          }
                        : post
                ),
            };

        case "removeComment":
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id
                        ? {
                              ...post,
                              comments: [...post.comments].filter(
                                  (comment) => comment.id !== action.payload?.comments?.id
                              ),
                          }
                        : post
                ),
            };

        case "toggleIsLikedComment":
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id
                        ? {
                              ...post,
                              comments: [...post.comments].map((comment) =>
                                  comment.id === action.payload?.comments?.id
                                      ? { ...comment, isLiked: !comment.isLiked }
                                      : comment
                              ),
                          }
                        : post
                ),
            };

        case "addBusinessProject":
            return {
                ...state,
                businessProjects: [
                    {
                        id: randomId(),
                        name: action.payload?.businessProjects?.name!,
                        finishDate: action.payload?.businessProjects?.finishDate!,
                        description: action.payload?.businessProjects?.description!,
                        price: action.payload?.businessProjects?.price!,
                        team: action.payload?.businessProjects?.team!,
                        status: action.payload?.businessProjects?.status!,
                        keyWord: action.payload?.businessProjects?.keyWord!,
                    },
                    ...state.businessProjects,
                ],
            };

        case "removeBusinessProject":
            return {
                ...state,
                businessProjects: [...state.businessProjects].filter(
                    (project) => project.id !== action.payload?.businessProjects?.id
                ),
            };

        default:
            return state;
    }
}

export default reducer;
