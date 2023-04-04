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
import {
    ButtonComponentSwitchType,
    SwitchType,
} from "@/components/app/settings/components_shapes_control/controls/types/app";
import { LatestUploadsInfoItemProps } from "@/components/app/dashboard/latest_uploads/types/main";
import { BusinessProjectProps } from "@/components/app/business/types/main";
import { FriendProps } from "@/components/app/friends/types/main";
import { CourseProps } from "@/components/app/courses/types/main";
import { SubscribeType } from "@/components/app/plans/types/main";

export interface Tasks {
    id: string;
    content: string;
    isCompleted: boolean;
}

export interface SwitchBooleans {
    uiControl: UIControl;
    websiteControl: WebsiteControl;
    widgetsControl: WidgetsControl;
    profileControl: ProfileControl;
    subscribeControl: SubscribeControl;
}

export interface DataListProps {
    content?: string;
    id?: string;
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
    paymentMethod: "visa" | "paypal";
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

export interface Courses extends CourseProps {}

export interface QuickDraft {
    title: string;
    content: string;
}

export interface Posts {
    id?: string;
    postOwner: string;
    postTitle: string;
    postDescription: string;
    isLiked?: boolean;
    comments?: Comment[];
}

export interface LightApperanceType {
    theme: BackgroundColorTheme;
    backgroundColor: LightBackgroundColor;
    color: LightColor;
}

export interface DarkApperanceType {
    theme: BackgroundColorTheme;
    backgroundColor: DarkBackgroundColor;
    color: DarkColor;
}

export interface Logo {
    type: SrcType;
    src: string;
}

export interface UIControl {
    isUIControlActive: boolean;
    isThemeDark: boolean;
    isNavMinimized: boolean;
    isRounded: boolean;
    isNewSearchbar: boolean;
    isNavFixed: boolean;
    isNewNavbar: boolean;
    isNewNavInTheTop: boolean;
    isSearchBarShowed: boolean;
    isAutoSelect: boolean;
}

export interface WebsiteControl {
    isWebsiteControlActive: boolean;
    isNotificationActive: boolean;
    isZoomIn: boolean;
}

export interface WidgetsControl {
    isWidgetsControlActive: boolean;
    isQuickDraftActive: boolean;
    isYearlyTargetsActive: boolean;
    isTicketsStatisticsActive: boolean;
    isLatestNewsActive: boolean;
    isLastProjectProgressActive: boolean;
}

export interface ProfileControl {
    isGeneralInfoActive: boolean;
    isPersonalInfoActive: boolean;
    isJobInfoActive: boolean;
    isBillingInfoActive: boolean;
}

export interface SubscribeControl {
    isChangeGeneralAndUserInfoEnabled: boolean;
    isAccessWebsiteControlEnabled: boolean;
    isAccessWidgetsControlEnabled: boolean;
    isChangeDarkAppearanceColorEnabled: boolean;
    isChangeLogoTypeEnabled: boolean;
    isChangeComponentsShapesEnabled: boolean;
    isAutoSelectEnabled: boolean;
    isAchievementsEnabled: boolean;
    isUnlimitedDataEnabled: boolean;
    isChatBotEnabled: boolean;
}

export interface Comment {
    id?: string;
    commentDescription: string;
    isLiked: boolean;
}

export interface Subscription {
    isSubscribed: boolean;
    subscribeType: SubscribeType;
}
