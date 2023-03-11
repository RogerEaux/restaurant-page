import phoneIcon from './images/phone.svg';
import mapPicture from './images/map.png';

const createContact = () => {
  const contact = document.createElement('div');
  const address = document.createElement('p');
  const map = document.createElement('img');
  const hours = document.createElement('p');
  const reservation = document.createElement('p');
  const numberContainer = document.createElement('div');
  const phone = document.createElement('img');
  const number = document.createElement('p');

  contact.classList.add('contact');
  address.textContent = 'We are located in Real Street 42';
  map.src = mapPicture;
  map.alt = 'Picture of the location in a map';
  hours.textContent = 'Open Monday to Saturday from 1:00 p.m. to 1:00 a.m.';
  reservation.textContent =
    'If you want to make a reservation please call the number';
  phone.src = phoneIcon;
  phone.alt = 'Picture of a phone';
  number.textContent = '123 456 7890';
  numberContainer.appendChild(phone);
  numberContainer.appendChild(number);

  contact.appendChild(address);
  contact.appendChild(map);
  contact.appendChild(hours);
  contact.appendChild(reservation);
  contact.appendChild(numberContainer);

  return contact;
};

export default createContact;
