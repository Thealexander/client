const auth = {
  authStartScreen: "AuthStartScreen",
  loginScreen: "LoginsScreen",
  registerScreen: "RegisterScreen",
};
const global = {
  userProfileScreen: "UserProfileScreen",
  cameraScreen: "CameraScreen",
  imageFullScreen: "ImageFullScreen",
  chatScreen: "ChatScreen",
  groupScreen: "GroupScreen",
  groupProfileScreen: "GroupProfileScreen",
  addUserGroupScreen: "AddUserGroupScreen",
  changeNameGroupScreen: "ChangeNameGroupScreen",
};
const chats = {
  root: "ChatsRoot",
  chatScreen: "ChatScreen",
  createChatScreen: "CreateChatScreen",
};
const groups = {
  root: "GroupsRoot",
  groupsScreen: "GroupsScreen",
  createGroupScreen: "CreateGroupScreen",
};
const settings = {
  root: "SettingsRoot",
  settingScreen: "SettingScreen",
  changeFirstNameScreen: "ChangeFirstNameScreen",
  changeLastNameScreen: "ChangeLastNameScreen",
};

export const screens = {
  auth,
  global,
  tab: {
    root: "BottomTabRoot",
    chats,
    groups,
    settings,
  },
};
