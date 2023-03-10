import createHome from './home';

const createHeader = () => {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.classList.add('header');
  title.textContent = 'Cuore';
  header.appendChild(title);

  return header;
};

const createNav = () => {
  const nav = document.createElement('nav');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');

  home.textContent = 'Home';
  home.setAttribute('data-index', '0');
  home.classList.add('selected');
  menu.textContent = 'Menu';
  menu.setAttribute('data-index', '1');
  contact.textContent = 'Contact';
  contact.setAttribute('data-index', '2');
  nav.classList.add('nav');
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
};

const createMain = () => {
  const main = document.createElement('main');

  main.classList.add('main');
  main.appendChild(createHome());

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const para = document.createElement('p');

  footer.classList.add('footer');
  para.textContent = 'Copyright © 2023 RogerEaux';
  footer.appendChild(para);

  return footer;
};

const createElements = () => {
  const body = document.querySelector('body');

  body.appendChild(createHeader());
  body.appendChild(createNav());
  body.appendChild(createMain());
  body.appendChild(createFooter());
};

export default createElements;
