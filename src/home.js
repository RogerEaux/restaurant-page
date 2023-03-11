import flagImage from './images/italy-flag.svg';
import heartImage from './images/heart.svg';

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

  home.classList.add('home');
  p1.textContent = 'Cucinato con il cuore';
  p2.textContent = 'Autentica pizza italiana';
  home.appendChild(p1);
  home.appendChild(createLogo());
  home.appendChild(p2);

  return home;
};

export default createHome;
