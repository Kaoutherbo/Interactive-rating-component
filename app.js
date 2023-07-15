
const submit_card = document.getElementById('submit-card');
const thanks_card = document.getElementById('thanks-card');
const submit = document.getElementById('btn');
const ratingDivs = document.querySelectorAll('.list div');
const count = document.getElementById('span');
let selectedRating;

ratingDivs.forEach((div) => {
  div.addEventListener('click', () => {
    selectedRating = div.textContent;
  });
});

submit.addEventListener('click', () => {
  submit_card.style.display = 'none';
  count.textContent = selectedRating;
  thanks_card.style.display = 'block';
});
