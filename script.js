let selectedPlace = null;
let selectedFood = null;

function selectPlace(place) {
  selectedPlace = place;
  localStorage.setItem('chosenPlace', place);

  document.querySelectorAll('.option').forEach(option => {
    const optionText = option.querySelector('p').textContent.trim();
    option.classList.toggle('selected', optionText === place);
  });

  document.getElementById('nextButton').disabled = false;
}

function selectFood(food) {
  selectedFood = food;
  localStorage.setItem('chosenFood', food);

  document.querySelectorAll('.option').forEach(option => {
    const optionText = option.querySelector('p').textContent.trim();
    option.classList.toggle('selected', optionText === food);
  });

  document.getElementById('nextButton').disabled = false;
}

function redirectToFood() {
  if (selectedPlace) window.location.href = 'food.html';
}

function redirectToThankYou() {
  if (selectedFood) window.location.href = 'thankyou.html';
}

function loadThankYouPage() {
  const place = localStorage.getItem('chosenPlace');
  const food = localStorage.getItem('chosenFood');
  const container = document.querySelector('.container');

  if (place && food) {
    container.innerHTML = `
      <h1>Thank You! ❤️</h1>
      <p>I’m so excited for our date at the <strong>${place}</strong>, enjoying some <strong>${food}</strong>!</p>
      <p>THANKS FOR BEING MY GF 😊</p>
      <img src="her.jpeg" alt="Her Picture" class="her-picture">
    `;
  } else {
    container.innerHTML = `
      <h1>Oops! 😟</h1>
      <p>It seems like something went wrong. Please restart and make your selections again!</p>
    `;
  }
}

function handleNo() {
  alert("Oh no! Maybe next time. 💔");
}
