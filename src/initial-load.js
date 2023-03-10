import flagImage from './images/italy-flag.svg';
import heartImage from './images/heart.svg';

const createHeader = () => {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.classList.add('header');
  title.textContent = 'Cuore';
  header.appendChild(title);

  return header;
};

const createLogo = () => {
  const logo = document.createElement('div');
  const flag = document.createElement('img');
  const heart = document.createElement('img');

  logo.classList.add('logo');
  flag.src = flagImage;
  flag.alt = 'Anatomically correct drawn heart';
  heart.src = heartImage;
  heart.alt = "Italy's flag";
  logo.appendChild(flag);
  logo.appendChild(heart);

  return logo;
};

const createHome = () => {
  const home = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = 'Cucinato con il cuore';
  p2.textContent = 'Autentica pizza italiana';
  home.appendChild(p1);
  home.appendChild(createLogo());
  home.appendChild(p2);
  home.classList.add('home');

  return home;
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
  body.appendChild(createMain());
  body.appendChild(createFooter());
};

export default createElements;
