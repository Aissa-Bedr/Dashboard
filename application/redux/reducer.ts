import { nanoid } from "nanoid";
import { AppState, AppStateAction } from "./types/main";
import { initialState } from "./state";
import {
    CHANGE_BUTTON_COMPONENT,
    CHANGE_DARK_APPEARANCE,
    CHANGE_GENERAL_INFO,
    CHANGE_INPUT_FIELD_COMPONENT,
    CHANGE_LIGHT_APPEARANCE,
    CHANGE_LINK,
    CHANGE_LOGO_APPEARANCE,
    CHANGE_PROFILE_INFO,
    CHANGE_QUICK_DRAFT,
    CHANGE_SUBSCRIBE_CONTROL,
    CHANGE_SUBSCRIPTION,
    CHANGE_SWITCH_BUTTON_COMPONENT,
    CHANGE_USER_INFO,
} from "./constants/changeTypes";
import {
    TOGGLE_IS_AUTO_SELECT,
    TOGGLE_IS_BILLING_INFO_ACTIVE,
    TOGGLE_IS_FRIEND_MESSAGE,
    TOGGLE_IS_GENERAL_INFO_ACTIVE,
    TOGGLE_IS_JOB_INFO_ACTIVE,
    TOGGLE_IS_LAST_PROJECT_PROGRESS_ACTIVE,
    TOGGLE_IS_LATEST_NEWS_ACTIVE,
    TOGGLE_IS_LIKED_COMMENT,
    TOGGLE_IS_LIKED_COURSE,
    TOGGLE_IS_LIKED_FRIEND,
    TOGGLE_IS_LIKED_MESSAGE,
    TOGGLE_IS_LIKED_POST,
    TOGGLE_IS_NAV_FIXED,
    TOGGLE_IS_NAV_MINIMIZED,
    TOGGLE_IS_NEW_NAV_BAR,
    TOGGLE_IS_NEW_NAV_IN_THE_TOP,
    TOGGLE_IS_NEW_SEARCH_BAR,
    TOGGLE_IS_NOTIFICATION_ACTIVE,
    TOGGLE_IS_PERSONAL_INFO_ACTIVE,
    TOGGLE_IS_QUICK_DRAFT_ACTIVE,
    TOGGLE_IS_ROUNDED,
    TOGGLE_IS_SEARCH_BAR_SHOWED,
    TOGGLE_IS_TICKETS_STATISTICS_ACTIVE,
    TOGGLE_IS_YEARLY_TARGETS_ACTIVE,
    TOGGLE_IS_ZOOM_IN,
    TOGGLE_THEME,
    TOGGLE_UI_CONTROL,
    TOGGLE_WEBSITE_CONTROL,
    TOGGLE_WIDGETS_CONTROL,
} from "./constants/toggleTypes";
import {
    ADD_BUSINESS_PROJECT,
    ADD_COMMENT,
    ADD_FRIEND,
    SEND_MESSAGE,
    ADD_POST,
    ADD_PROJECT,
    ADD_REMINDER,
    ADD_SKILL,
    ADD_TASK,
    UPLOAD_FILE,
    ADD_COURSE,
    SEND_CHAT_BOT_MESSAGE,
} from "./constants/addTypes";
import {
    REMOVE_BUSINESS_PROJECT,
    REMOVE_COMMENT,
    REMOVE_COURSE,
    REMOVE_FILE,
    REMOVE_FRIEND,
    REMOVE_MESSAGE,
    REMOVE_POST,
    REMOVE_PROJECT,
    REMOVE_REMINDER,
    REMOVE_SKILL,
    REMOVE_TASK,
} from "./constants/removeTypes";
import {
    CLEAR_CHAT,
    CLEAR_CHAT_BOT,
    COMPLETE_TASK,
    DISABLE_ALL_SUBSCRIBE_CONTROL,
    ENABLE_ALL_SUBSCRIBE_CONTROL,
    RECOVER_TASK,
} from "./constants/mainTypes";

function reducer(state = initialState, action: AppStateAction): AppState {
    switch (action.type) {
        case CHANGE_LINK:
            return { ...state, currentLink: action.payload?.links?.currentLinkValue! };

        case TOGGLE_THEME:
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

        case ADD_TASK:
            return {
                ...state,
                tasks: [{ id: nanoid(), content: action.payload?.tasks?.content!, isCompleted: false }, ...state.tasks],
            };

        case REMOVE_TASK:
            return { ...state, tasks: [...state.tasks].filter((item) => item.id !== action.payload?.tasks?.id) };

        case COMPLETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks].map((item) =>
                    item.id === action.payload?.tasks?.id ? { ...item, isCompleted: true } : item
                ),
            };

        case RECOVER_TASK:
            return {
                ...state,
                tasks: [...state.tasks].map((item) =>
                    item.id === action.payload?.tasks?.id ? { ...item, isCompleted: false } : item
                ),
            };

        case TOGGLE_UI_CONTROL:
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

        case TOGGLE_IS_NAV_MINIMIZED:
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

        case TOGGLE_IS_ROUNDED:
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

        case TOGGLE_IS_NEW_SEARCH_BAR:
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

        case TOGGLE_IS_NAV_FIXED:
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

        case TOGGLE_IS_NEW_NAV_BAR:
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

        case TOGGLE_IS_NEW_NAV_IN_THE_TOP:
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

        case TOGGLE_IS_SEARCH_BAR_SHOWED:
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

        case TOGGLE_WEBSITE_CONTROL:
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

        case TOGGLE_IS_NOTIFICATION_ACTIVE:
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

        case TOGGLE_IS_ZOOM_IN:
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

        case TOGGLE_WIDGETS_CONTROL:
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

        case TOGGLE_IS_QUICK_DRAFT_ACTIVE:
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

        case TOGGLE_IS_YEARLY_TARGETS_ACTIVE:
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

        case TOGGLE_IS_TICKETS_STATISTICS_ACTIVE:
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

        case TOGGLE_IS_LATEST_NEWS_ACTIVE:
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

        case TOGGLE_IS_LAST_PROJECT_PROGRESS_ACTIVE:
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

        case TOGGLE_IS_GENERAL_INFO_ACTIVE:
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

        case TOGGLE_IS_PERSONAL_INFO_ACTIVE:
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

        case TOGGLE_IS_JOB_INFO_ACTIVE:
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

        case TOGGLE_IS_BILLING_INFO_ACTIVE:
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

        case CHANGE_GENERAL_INFO:
            return {
                ...state,
                generalInfo: {
                    firstName: action.payload?.generalInfo?.firstName!,
                    lastName: action.payload?.generalInfo?.lastName!,
                },
            };

        case CHANGE_USER_INFO:
            return {
                ...state,
                userInfo: {
                    designation: action.payload?.userInfo?.designation!,
                    projects: action.payload?.userInfo?.projects!,
                    earned: action.payload?.userInfo?.earned!,
                },
            };

        case CHANGE_PROFILE_INFO:
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

        case ADD_SKILL:
            return {
                ...state,
                skills: [{ id: nanoid(), content: action.payload?.skills?.content! }, ...state.skills],
            };

        case REMOVE_SKILL:
            return {
                ...state,
                skills: [...state.skills].filter((skill) => skill.id !== action.payload?.skills?.id),
            };

        case CHANGE_LIGHT_APPEARANCE:
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

        case CHANGE_DARK_APPEARANCE:
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

        case CHANGE_LOGO_APPEARANCE:
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

        case CHANGE_SWITCH_BUTTON_COMPONENT:
            return {
                ...state,
                components: {
                    ...state.components,
                    switchButton: {
                        type: action.payload?.components?.switchButton?.type,
                    },
                },
            };

        case CHANGE_INPUT_FIELD_COMPONENT:
            return {
                ...state,
                components: {
                    ...state.components,
                    inputField: {
                        type: action.payload?.components?.inputField?.type,
                    },
                },
            };

        case CHANGE_BUTTON_COMPONENT:
            return {
                ...state,
                components: {
                    ...state.components,
                    button: {
                        type: action.payload?.components?.button?.type,
                    },
                },
            };

        case UPLOAD_FILE:
            return {
                ...state,
                files: [
                    {
                        id: nanoid(),
                        fileName: action.payload?.files?.fileName!,
                        fileType: action.payload?.files?.fileType!,
                        fileUploader: action.payload?.files?.fileUploader!,
                        fileSize: action.payload?.files?.fileSize!,
                        fileSizeType: action.payload?.files?.fileSizeType!,
                    },
                    ...state.files,
                ],
            };

        case REMOVE_FILE:
            return {
                ...state,
                files: [...state.files].filter((file) => file.id !== action.payload?.files?.id),
            };

        case ADD_REMINDER:
            return {
                ...state,
                reminders: [
                    {
                        id: nanoid(),
                        title: action.payload?.reminders?.title!,
                        time: action.payload?.reminders?.time!,
                        theme: action.payload?.reminders?.theme!,
                    },
                    ...state.reminders,
                ],
            };

        case REMOVE_REMINDER:
            return {
                ...state,
                reminders: [...state.reminders].filter((reminder) => reminder.id !== action.payload?.reminders?.id),
            };

        case ADD_PROJECT:
            return {
                ...state,
                projects: [
                    {
                        id: nanoid(),
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

        case REMOVE_PROJECT:
            return {
                ...state,
                projects: [...state.projects].filter((project) => project.id !== action.payload?.projects?.id),
            };

        case CHANGE_QUICK_DRAFT:
            return {
                ...state,
                quickDraft: {
                    title: action.payload?.quickDraft?.title!,
                    content: action.payload?.quickDraft?.content!,
                },
            };

        case ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: nanoid(),
                        postOwner: action.payload?.posts?.postOwner!,
                        postTitle: action.payload?.posts?.postTitle!,
                        postDescription: action.payload?.posts?.postDescription!,
                        isLiked: false,
                        comments: [],
                    },
                    ...state.posts,
                ],
            };

        case REMOVE_POST:
            return {
                ...state,
                posts: [...state.posts].filter((post) => post.id !== action.payload?.posts?.id),
            };

        case TOGGLE_IS_LIKED_POST:
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id ? { ...post, isLiked: !post.isLiked } : post
                ),
            };

        case ADD_COMMENT:
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id
                        ? {
                              ...post,
                              comments: [
                                  ...post.comments!,
                                  {
                                      id: nanoid(),
                                      commentDescription: action.payload?.comments?.commentDescription!,
                                      isLiked: false,
                                  },
                              ],
                          }
                        : post
                ),
            };

        case REMOVE_COMMENT:
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id
                        ? {
                              ...post,
                              comments: [...post.comments!].filter(
                                  (comment) => comment.id !== action.payload?.comments?.id
                              ),
                          }
                        : post
                ),
            };

        case TOGGLE_IS_LIKED_COMMENT:
            return {
                ...state,
                posts: [...state.posts].map((post) =>
                    post.id === action.payload?.posts?.id
                        ? {
                              ...post,
                              comments: [...post.comments!].map((comment) =>
                                  comment.id === action.payload?.comments?.id
                                      ? { ...comment, isLiked: !comment.isLiked }
                                      : comment
                              ),
                          }
                        : post
                ),
            };

        case ADD_BUSINESS_PROJECT:
            return {
                ...state,
                businessProjects: [
                    {
                        id: nanoid(),
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

        case REMOVE_BUSINESS_PROJECT:
            return {
                ...state,
                businessProjects: [...state.businessProjects].filter(
                    (project) => project.id !== action.payload?.businessProjects?.id
                ),
            };

        case ADD_FRIEND:
            return {
                ...state,
                friends: [
                    {
                        id: nanoid(),
                        name: action.payload?.friends?.name!,
                        pictureSrc: action.payload?.friends?.pictureSrc!,
                        job: action.payload?.friends?.job!,
                        isLiked: false,
                        messages: [],
                    },
                    ...state.friends,
                ],
            };

        case REMOVE_FRIEND:
            return {
                ...state,
                friends: [...state.friends].filter((friend) => friend.id !== action.payload?.friends?.id),
            };

        case TOGGLE_IS_LIKED_FRIEND:
            return {
                ...state,
                friends: [...state.friends].map((friend) =>
                    friend.id === action.payload?.friends?.id ? { ...friend, isLiked: !friend.isLiked } : friend
                ),
            };

        case SEND_MESSAGE:
            return {
                ...state,
                friends: [...state.friends].map((friend) =>
                    friend.id === action.payload?.friends?.id
                        ? {
                              ...friend,
                              messages: [
                                  ...friend.messages!,
                                  {
                                      id: nanoid(),
                                      messageDescription: action.payload?.messages?.messageDescription!,
                                      isLiked: false,
                                      isFriendMessage: action.payload?.messages?.isFriendMessage!,
                                  },
                              ],
                          }
                        : friend
                ),
            };

        case REMOVE_MESSAGE:
            return {
                ...state,
                friends: [...state.friends].map((friend) =>
                    friend.id === action.payload?.friends?.id
                        ? {
                              ...friend,
                              messages: [...friend.messages!].filter(
                                  (message) => message.id !== action.payload?.messages?.id
                              ),
                          }
                        : friend
                ),
            };

        case TOGGLE_IS_LIKED_MESSAGE:
            return {
                ...state,
                friends: [...state.friends].map((friend) =>
                    friend.id === action.payload?.friends?.id
                        ? {
                              ...friend,
                              messages: [...friend.messages!].map((message) =>
                                  message.id === action.payload?.messages?.id
                                      ? { ...message, isLiked: !message.isLiked }
                                      : message
                              ),
                          }
                        : friend
                ),
            };

        case TOGGLE_IS_FRIEND_MESSAGE:
            return {
                ...state,
                friends: [...state.friends].map((friend) =>
                    friend.id === action.payload?.friends?.id
                        ? {
                              ...friend,
                              messages: [...friend.messages!].map((message) =>
                                  message.id === action.payload?.messages?.id
                                      ? { ...message, isFriendMessage: !message.isFriendMessage }
                                      : message
                              ),
                          }
                        : friend
                ),
            };

        case CLEAR_CHAT:
            return {
                ...state,
                friends: [...state.friends].map((friend) =>
                    friend.id === action.payload?.friends?.id
                        ? {
                              ...friend,
                              messages: [],
                          }
                        : friend
                ),
            };

        case ADD_COURSE:
            return {
                ...state,
                courses: [
                    {
                        id: nanoid(),
                        title: action.payload?.courses?.title!,
                        description: action.payload?.courses?.description!,
                        videoSrc: action.payload?.courses?.videoSrc!,
                        price: action.payload?.courses?.price!,
                        isLiked: false,
                    },
                    ...state.courses,
                ],
            };

        case REMOVE_COURSE:
            return {
                ...state,
                courses: [...state.courses].filter((course) => course.id !== action.payload?.courses?.id),
            };

        case TOGGLE_IS_LIKED_COURSE:
            return {
                ...state,
                courses: [...state.courses].map((course) =>
                    course.id === action.payload?.courses?.id ? { ...course, isLiked: !course.isLiked } : course
                ),
            };

        case TOGGLE_IS_AUTO_SELECT:
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    uiControl: {
                        ...state.switchBooleans.uiControl,
                        isAutoSelect: !state.switchBooleans.uiControl.isAutoSelect,
                    },
                },
            };

        case CHANGE_SUBSCRIPTION:
            return {
                ...state,
                subscription: {
                    ...state.subscription,
                    isSubscribed: action.payload?.subscription?.isSubscribed!,
                    subscribeType: action.payload?.subscription?.subscribeType!,
                },
            };

        case CHANGE_SUBSCRIBE_CONTROL:
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    subscribeControl: {
                        ...state.switchBooleans.subscribeControl,
                        isChangeGeneralAndUserInfoEnabled:
                            action.payload?.subscribeControl?.isChangeGeneralAndUserInfoEnabled!,
                        isAccessWebsiteControlEnabled: action.payload?.subscribeControl?.isAccessWebsiteControlEnabled!,
                        isAccessWidgetsControlEnabled: action.payload?.subscribeControl?.isAccessWidgetsControlEnabled!,
                        isChangeDarkAppearanceColorEnabled:
                            action.payload?.subscribeControl?.isChangeDarkAppearanceColorEnabled!,
                        isChangeLogoTypeEnabled: action.payload?.subscribeControl?.isChangeLogoTypeEnabled!,
                        isChangeComponentsShapesEnabled:
                            action.payload?.subscribeControl?.isChangeComponentsShapesEnabled!,
                        isAutoSelectEnabled: action.payload?.subscribeControl?.isAutoSelectEnabled!,
                        isAchievementsEnabled: action.payload?.subscribeControl?.isAchievementsEnabled!,
                        isUnlimitedDataEnabled: action.payload?.subscribeControl?.isUnlimitedDataEnabled!,
                        isChatBotEnabled: action.payload?.subscribeControl?.isChatBotEnabled!,
                    },
                },
            };

        case ENABLE_ALL_SUBSCRIBE_CONTROL:
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    subscribeControl: {
                        isChangeGeneralAndUserInfoEnabled: true,
                        isAccessWebsiteControlEnabled: true,
                        isAccessWidgetsControlEnabled: true,
                        isChangeDarkAppearanceColorEnabled: true,
                        isChangeLogoTypeEnabled: true,
                        isChangeComponentsShapesEnabled: true,
                        isAutoSelectEnabled: true,
                        isAchievementsEnabled: true,
                        isUnlimitedDataEnabled: true,
                        isChatBotEnabled: true,
                    },
                },
            };

        case DISABLE_ALL_SUBSCRIBE_CONTROL:
            return {
                ...state,
                switchBooleans: {
                    ...state.switchBooleans,
                    subscribeControl: {
                        isChangeGeneralAndUserInfoEnabled: false,
                        isAccessWebsiteControlEnabled: false,
                        isAccessWidgetsControlEnabled: false,
                        isChangeDarkAppearanceColorEnabled: false,
                        isChangeLogoTypeEnabled: false,
                        isChangeComponentsShapesEnabled: false,
                        isAutoSelectEnabled: false,
                        isAchievementsEnabled: false,
                        isUnlimitedDataEnabled: false,
                        isChatBotEnabled: false,
                    },
                },
            };

        case SEND_CHAT_BOT_MESSAGE:
            return {
                ...state,
                chatBotMessages: [
                    ...state.chatBotMessages,
                    {
                        id: nanoid(),
                        content: action.payload?.chatBotMessages?.content!,
                        isBotMessage: action.payload?.chatBotMessages?.isBotMessage!,
                    },
                ],
            };

        case CLEAR_CHAT_BOT:
            return {
                ...state,
                chatBotMessages: [],
            };

        default:
            return state;
    }
}

export default reducer;
