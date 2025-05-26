let rating;

const card = document.querySelector('.card');

/*handle submit button*/
document.querySelector('.js-submit-button')
  .addEventListener('click', () => {
    card.removeChild(card.querySelector('.rating-section'));

    card.insertAdjacentHTML('beforeend', `
    <section class="thank-you-section">
      <img src="/images/illustration-thank-you.svg" alt="Thank You Image" class="thank-you-image">

      <p class="rating-tag">You selected ${rating} out of 5</p>
      
      <h1 class="thank-you-header">Thank you!</h1>

      <p class="thank-you-description">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </section>
    `);

    card.classList.toggle('thanks-section-padded');
  });

/*handle rating selection*/
document.querySelectorAll('.rating-button').forEach((ratingButton, index) => {
  ratingButton.addEventListener('click', () => {
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
      console.log(rating);
    }
  });
});