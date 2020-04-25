export const disableMaterializeCss = disabled => {
  let udStyles = document.getElementsByTagName("style");
  let udMaterializeCss = Object.values(udStyles).find(udStyle => {
    return udStyle.innerText.includes("materialize");
  });
  udMaterializeCss.disabled = disabled;
};

export default function disableUdTheme(){
  let udTheme = document.querySelectorAll(
    'link[href="/api/internal/dashboard/theme"]'
  );
  udTheme[0].disabled = true;
};

export const resetUdThemeTd = () => {
  let udTheme = document.querySelectorAll(
    'link[href="/api/internal/dashboard/theme"]'
  );
  udTheme[0].sheet.cssRules[9].style.padding = "unset";
  // udTheme[0].disabled = disabled
};

export const hideUdComponent = componentClassName => {
  let udComponent = document.getElementsByClassName(componentClassName);
  udComponent[0].style.display = "none";
};

export const setBodyBackground = backgroundColor => {
  let body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = backgroundColor;
};

export const setDashboardRTL = () => {
  let body = document.getElementsByTagName("body");
  body[0].style.direction = "rtl";
};
