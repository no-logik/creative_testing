export const URL_HOME = "/*";
export const URL_LOGIN = "login";
export const URL_ADMIN = "admin/:username";
export const URL_DASHBOARD = ":agencyname/:agency_id";
export const URL_DASHBOARDLISTING = `${URL_DASHBOARD}/listing/:brandName`; //`${URL_DASHBOARD}/listing/:brandName`
export const URL_SELECTCREATIVE = `${URL_DASHBOARDLISTING}/project/:projectname/edit`;
export const URL_ASSETS = `${URL_DASHBOARDLISTING}/project/:projectname`;
export const URL_PERFORMANCE = `${URL_ASSETS}/view`; // this also must have internal routing to switch between performance and insights tab.
