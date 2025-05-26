let rating;

const card = document.querySelector('.card');

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