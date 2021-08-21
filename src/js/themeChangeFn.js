import { checkboxRef } from './HtmlRefs';
import { bodyRef } from './HtmlRefs';

export function onCheckboxChange() {

    if (checkboxRef.checked) {
        bodyRef.classList.remove('light-theme');
        bodyRef.classList.add('dark-theme');
        localStorage.setItem('Theme', 'dark-theme');
    } else {
        bodyRef.classList.remove('dark-theme');
        bodyRef.classList.add('light-theme');
        localStorage.setItem('Theme', 'light-theme');
        checkboxRef.checked = false;
    };
};