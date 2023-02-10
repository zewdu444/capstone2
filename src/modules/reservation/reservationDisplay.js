import getReservation from './reservationGetAPI.js';

const displayReservation = async (id) => {
  const res = await getReservation(id);
  console.log(res)
  const reservedate = document.querySelector('.reservedate');
  reservedate.innerHTML = '';
  if (res.length === undefined) {
    return false;
  }
  res.forEach((reserve) => {
    reservedate.innerHTML += `<li>
     ${reserve.date_start} - ${reserve.date_end} - ${reserve.username}
   </li>`;
  });
  return res.length;
};

export default displayReservation;