import { bodyRef } from "./HtmlRefs";
import { checkboxRef } from "./HtmlRefs";

export function checkTheme() {
    const localStorageTheme = localStorage.getItem('Theme');
    if (localStorageTheme) {
        bodyRef.classList.add(localStorageTheme);
        localStorageTheme === 'dark-theme' ? checkboxRef.checked = true : checkboxRef.checked = false;
    };
};