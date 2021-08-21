import template from './templates/menu-items.hbs';
import menu from './menu.json';
import { onCheckboxChange } from './js/themeChangeFn';
import { checkTheme } from './js/checkTheme';
import { checkboxRef } from './js/HtmlRefs';
import { menuRef } from './js/HtmlRefs';


const renderMenu = template(menu);

menuRef.insertAdjacentHTML('beforeend', renderMenu);

checkboxRef.addEventListener('change', onCheckboxChange);

checkTheme();


