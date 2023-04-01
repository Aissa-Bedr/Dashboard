import { AppState } from "./types/main";

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
    friends: [],
    courses: [],
};
