import menu from './menu.json';
import menuCard from './menu-card.hbs';

const menuLissn = document.querySelector('.js-menu');

const card = menuCard(menu);
menuLissn.insertAdjacentHTML('beforeend', card);

