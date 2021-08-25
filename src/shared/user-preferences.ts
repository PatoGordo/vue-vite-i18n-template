const userPreferencesStorageName = "APP:USER-PREFERENCES";

interface IUserPreferences {
  theme: "dark" | "light";
  lang: "en" | "pt";
}

const userPreferences = JSON.parse(
  localStorage.getItem(userPreferencesStorageName) ||
    '{ "theme": "light", "lang": "en" }'
) as IUserPreferences;

class changeUserPreferences {
  public changeThemeTo(theme: IUserPreferences["theme"]) {
    userPreferences.theme = theme;
    this.saveChanges();
  }

  public changeLangTo(lang: IUserPreferences["lang"]) {
    userPreferences.lang = lang;
    this.saveChanges();
  }

  private saveChanges() {
    localStorage.setItem(
      userPreferencesStorageName,
      JSON.stringify(userPreferences)
    );
  }
}

const ChangeUserPreferences = new changeUserPreferences();

export { userPreferences, ChangeUserPreferences, IUserPreferences };
