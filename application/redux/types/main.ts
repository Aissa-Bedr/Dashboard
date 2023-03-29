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
    skills: Skill[];
    appearance: Appearance;
    components: Components;
    files: Files[];
    reminders: Reminders[];
    projects: Projects[];
    quickDraft: QuickDraft;
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
        skills?: DataListProps;
        appearance?: Partial<Appearance>;
        components?: Partial<Components>;
        files?: Partial<Files>;
        reminders?: Partial<Reminders>;
        projects?: Partial<Projects>;
        quickDraft?: Partial<QuickDraft>;
    };
}

export interface SwitchBooleans {
    uiControl: UIControl;
    websiteControl: WebsiteControl;
    widgetsControl: WidgetsControl;
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

export interface QuickDraft {
    title: string;
    content: string;
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
