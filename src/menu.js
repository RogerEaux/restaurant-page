import pizzaPicture from './images/pizza.jpg';

const createItem = (pizza) => {
  const item = document.createElement('div');
  const name = document.createElement('p');
  const picture = document.createElement('img');

  item.classList.add('item');
  name.textContent = pizza;
  picture.src = pizzaPicture;
  picture.alt = `A picture of a ${pizza.toLowerCase()} pizza`;
  item.appendChild(name);
  item.appendChild(picture);

  return item;
};

const createMenu = () => {
  const menu = document.createElement('div');
  const pizzas = [
    'Frutti di mare',
    'Napoletana',
    'Quattro formaggi',
    'Margherita',
    'Capricciosa',
    'Marinara',
  ];

  menu.classList.add('menu');

  for (let i = 0; i < pizzas.length; i += 1) {
    menu.appendChild(createItem(pizzas[i]));
  }

  return menu;
};

export default createMenu;
