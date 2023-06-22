export const FORM_FIELDS_SPACING = 3;

export const PATH_NAMES = {
  home: "home",
  auth: {
    login: "login",
    signUp: "signup",
    logOut: "logout"
  },
  workspace: {
    create: "create-workspace"
  },
  team: {
    create: "create-team",
    addMembers: "add-members"
  },
  driver: {
    create: "create-driver",
    preview: "driver/preview"
  },
  okr: {
    create: "create-okr",
    edit: "okr/edit"
  },
  customer: {
    create: "create-customer"
  },
  product: {
    create: "create-product",
    welcome: "welcome-product"
  },
  profile: {
    create: "create-profile"
  },
  homeTabs: {
    backlog: "backlog",
    roadmap: "roadmap",
    settings: "settings",
    userActivity: "user-activity"
  },
  settingsTabs: {
    general: "general",
    product: "product",
    okr: "okr",
    teams: "teams",
    profile: "profile",
    drivers: "drivers"
  },
  general: {
    root: "root",
    myAccount: "myAccount"
  }
};

export enum HOME_TABS {
  SETTINGS = "settings",
  ROADMAP = "roadmap",
  BACKLOG = "backlog",
  MY_FOCUS = "myFocus"
}

export enum SETTING_TABS {
  GENERAL = "general",
  DRIVERS = "drivers",
  PRODUCTS = "products",
  OKR = "okr",
  TEAMS = "teams",
  PROFILES = "profiles"
}

export const RESPONSIVE_BREAKPOINT = "lg";
export const LAYOUT_CONTENT_PADDING_X = 24;
