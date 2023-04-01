export type AppStateActionType =
    | "changeLink"
    | "toggleTheme"
    | "addTask"
    | "removeTask"
    | "completeTask"
    | "recoverTask"
    | "toggleUIControl"
    | "toggleIsNavMinimized"
    | "toggleIsRounded"
    | "toggleIsNewSearchbar"
    | "toggleIsNavFixed"
    | "toggleIsNewNavbar"
    | "toggleWebsiteControl"
    | "toggleIsNotificationActive"
    | "toggleIsZoomIn"
    | "toggleIsNewNavInTheTop"
    | "toggleIsSearchBarShowed"
    | "toggleWidgetsControl"
    | "toggleIsQuickDraftActive"
    | "toggleIsYearlyTargetsActive"
    | "toggleIsTicketsStatisticsActive"
    | "toggleIsLatestNewsActive"
    | "toggleIsLastProjectProgressActive"
    | "toggleIsGeneralInfoActive"
    | "toggleIsPersonalInfoActive"
    | "toggleIsJobInfoActive"
    | "toggleIsBillingInfoActive"
    | "changeGeneralInfo"
    | "changeUserInfo"
    | "changeProfileInfo"
    | "addSkill"
    | "removeSkill"
    | "changeLightAppearance"
    | "changeDarkAppearance"
    | "changeSwitchButtonComponent"
    | "changeInputFieldComponent"
    | "changeButtonComponent"
    | "addProject"
    | "removeProject"
    | "addReminder"
    | "removeReminder"
    | "changeQuickDraft"
    | "changeLogoAppearance"
    | "uploadFile"
    | "removeFile"
    | "addPost"
    | "removePost"
    | "toggleIsLikedPost"
    | "addComment"
    | "removeComment"
    | "toggleIsLikedComment"
    | "addBusinessProject"
    | "removeBusinessProject"
    | "addFriend"
    | "removeFriend"
    | "toggleIsLikedFriend"
    | "addMessage"
    | "removeMessage"
    | "toggleIsLikedMessage"
    | "toggleIsFriendMessage"
    | "clearChat";

export type Theme = "light" | "dark";
