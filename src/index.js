import './style.css';
import createElements from './initial-load';

const changeSelected = () => {
  const nav = document.querySelectorAll('nav > div');

  nav.forEach((tab) => {
    tab.addEventListener('click', () => {
      nav.forEach((navtab) => {
        navtab.classList.remove('selected');
      });
      tab.classList.add('selected');
    });
  });
};

createElements();
changeSelected();
