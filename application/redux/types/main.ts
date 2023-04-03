import { Skill } from "@/components/app/settings/skills_info/types/main";
import { LinkProps } from "@/components/helpers/nav/types/app";
import { Theme } from "./app";
import {
    Appearance,
    BusinessProjects,
    Comment,
    Components,
    Courses,
    DataListProps,
    Files,
    Friends,
    GeneralInfo,
    Posts,
    ProfileInfo,
    Projects,
    QuickDraft,
    Reminders,
    SubscribeControl,
    Subscription,
    SwitchBooleans,
    Tasks,
    UserInfo,
} from "./data";
import { ChatBotMessage, Message } from "@/components/app/friends/types/main";

export interface AppState {
    currentLink: LinkProps;
    theme: Theme;
    tasks: Tasks[];
    switchBooleans: SwitchBooleans;
    information: {
        generalInfo: GeneralInfo;
        userInfo: UserInfo;
        profileInfo: ProfileInfo;
    };
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
    courses: Courses[];
    subscription: Subscription;
    chatBotMessages: ChatBotMessage[];
}

export interface AppStateAction {
    type: string;
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
        courses?: Partial<Courses>;
        subscription?: Partial<Subscription>;
        subscribeControl?: Partial<SubscribeControl>;
        chatBotMessages?: Partial<ChatBotMessage>;
    };
}
