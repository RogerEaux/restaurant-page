import './style.css';
import createElements from './initial-load';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const changeContent = (tab) => {
  const main = document.querySelector('.main');
  const currentContent = document.querySelector('.main > div');
  let newContent = document.createElement('div');

  currentContent.remove();
  if (tab.getAttribute('data-index') === '0') {
    newContent = createHome();
  } else if (tab.getAttribute('data-index') === '1') {
    newContent = createMenu();
  } else {
    newContent = createContact();
  }

  main.appendChild(newContent);
};

const changeSelected = () => {
  const nav = document.querySelectorAll('nav > div');

  nav.forEach((tab) => {
    tab.addEventListener('click', () => {
      nav.forEach((navtab) => {
        navtab.classList.remove('selected');
      });
      tab.classList.add('selected');
      changeContent(tab);
    });
  });
};

createElements();
changeSelected();
