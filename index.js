let rating;

const card = document.querySelector('.card');
const submitButton = document.querySelector('.js-submit-button');

/*handle submit button*/
submitButton.addEventListener('click', () => {
  const selectedRating = card.querySelector('.rating-selected');

  if (selectedRating !== null) {
    card.querySelector('.thank-you-section').classList.remove('hidden');
    card.querySelector('.rating-section').classList.add('hidden');

    card.querySelector('.rating-tag').innerText = `You selected ${rating} out of 5`;

    card.classList.toggle('thanks-section-padded');
  } else {
    submitButton.blur();
  }
});

/*handle rating selection*/
document.querySelectorAll('.rating-button').forEach((ratingButton, index) => {
  //click
  ratingButton.addEventListener('click', () => {
    chooseRating(ratingButton, index);
  });

  //enter
  ratingButton.addEventListener('keyup', (event) => {
    if (document.activeElement === ratingButton && event.key === 'Enter') {
      chooseRating(ratingButton, index);
    }
  });
});

/*function to call on click or keyup Enter*/
function chooseRating(ratingButton, index) {
  const isActive = ratingButton.classList.contains('rating-selected');

  if (!isActive) {
    const previousSelection = document.querySelector('.rating-selected');

    //remove previous selected
    if (previousSelection !== null) {
      previousSelection.classList.remove('rating-selected');
    }

    //select new one
    ratingButton.classList.toggle('rating-selected');
    rating = index + 1;
  }
}