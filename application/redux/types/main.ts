import { RemindersInfoItemProps } from "./../../components/app/dashboard/reminders/types/main";
import { ProjectsInfoItemProps } from "./../../components/app/dashboard/projects/types/main";
import {
    BackgroundColorTheme,
    DarkBackgroundColor,
    DarkColor,
    LightBackgroundColor,
    LightColor,
    SrcType,
} from "./../../components/app/settings/appearance_control/types/app";
import { Skill } from "@/components/app/settings/skills_info/types/main";
import { LinkProps } from "@/components/helpers/nav/types/app";
import { AppStateActionType, Theme } from "./app";
import {
    ButtonComponentSwitchType,
    SwitchType,
} from "@/components/app/settings/components_shapes_control/controls/types/app";
import { LatestUploadsInfoItemProps } from "@/components/app/dashboard/latest_uploads/types/main";
import { BusinessProjectProps } from "@/components/app/business/types/main";
import { FriendProps, Message } from "@/components/app/friends/types/main";

interface Tasks {
    id: number;
    content: string;
    isCompleted: boolean;
}

export interface AppState {
    currentLink: LinkProps;
    theme: Theme;
    tasks: Tasks[];
    switchBooleans: SwitchBooleans;
    generalInfo: GeneralInfo;
    userInfo: UserInfo;
    profileInfo: ProfileInfo;
    skills: Skill[];
    appearance: Appearance;
    components: Components;
    files: Files[];
    reminders: Reminders[];
    projects: Projects[];
    quickDraft: QuickDraft;
    posts: Posts[];
    businessProjects: BusinessProjects[];
    friends: Friends[];
}

export interface AppStateAction {
    type: AppStateActionType;
    payload?: {
        links?: {
            currentLinkValue?: LinkProps;
        };
        tasks?: DataListProps;
        generalInfo?: Partial<GeneralInfo>;
        userInfo?: Partial<UserInfo>;
        profileInfo?: Partial<ProfileInfo>;
        skills?: DataListProps;
        appearance?: Partial<Appearance>;
        components?: Partial<Components>;
        files?: Partial<Files>;
        reminders?: Partial<Reminders>;
        projects?: Partial<Projects>;
        quickDraft?: Partial<QuickDraft>;
        posts?: Partial<Posts>;
        comments?: Partial<Comment>;
        businessProjects?: Partial<BusinessProjects>;
        friends?: Partial<Friends>;
        messages?: Partial<Message>;
    };
}

export interface SwitchBooleans {
    uiControl: UIControl;
    websiteControl: WebsiteControl;
    widgetsControl: WidgetsControl;
    profileControl: ProfileControl;
}

interface DataListProps {
    content?: string;
    id?: number;
}

export interface GeneralInfo {
    firstName: string;
    lastName: string;
}

export interface UserInfo {
    designation: string;
    projects: number;
    earned: number;
}

export interface ProfileInfo {
    email: string;
    phone: number;
    gender: "male" | "female";
    country: string;
    birthDay: string;
    programmingLanguage: string;
    experience: number;
}

export interface Appearance {
    light: LightApperanceType;
    dark: DarkApperanceType;
    logo: Logo;
}

export interface Components {
    switchButton: {
        type?: SwitchType;
    };
    inputField: {
        type?: SwitchType;
    };
    button: {
        type?: ButtonComponentSwitchType;
    };
}

export interface Files extends LatestUploadsInfoItemProps {}

export interface Reminders extends RemindersInfoItemProps {}

export interface Projects extends ProjectsInfoItemProps {}

export interface BusinessProjects extends BusinessProjectProps {}

export interface Friends extends FriendProps {}

export interface QuickDraft {
    title: string;
    content: string;
}

export interface Posts {
    id?: number;
    postOwner: string;
    postTitle: string;
    postDescription: string;
    isLiked?: boolean;
    comments?: Comment[];
}

interface LightApperanceType {
    theme: BackgroundColorTheme;
    backgroundColor: LightBackgroundColor;
    color: LightColor;
}

interface DarkApperanceType {
    theme: BackgroundColorTheme;
    backgroundColor: DarkBackgroundColor;
    color: DarkColor;
}

interface Logo {
    type: SrcType;
    src: string;
}

interface UIControl {
    isUIControlActive: boolean;
    isThemeDark: boolean;
    isNavMinimized: boolean;
    isRounded: boolean;
    isNewSearchbar: boolean;
    isNavFixed: boolean;
    isNewNavbar: boolean;
    isNewNavInTheTop: boolean;
    isSearchBarShowed: boolean;
}

interface WebsiteControl {
    isWebsiteControlActive: boolean;
    isNotificationActive: boolean;
    isZoomIn: boolean;
}

interface WidgetsControl {
    isWidgetsControlActive: boolean;
    isQuickDraftActive: boolean;
    isYearlyTargetsActive: boolean;
    isTicketsStatisticsActive: boolean;
    isLatestNewsActive: boolean;
    isLastProjectProgressActive: boolean;
}

interface ProfileControl {
    isGeneralInfoActive: boolean;
    isPersonalInfoActive: boolean;
    isJobInfoActive: boolean;
    isBillingInfoActive: boolean;
}

export interface Comment {
    id?: number;
    commentDescription: string;
    isLiked: boolean;
}
