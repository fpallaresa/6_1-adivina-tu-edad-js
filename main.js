let urlFinal;

function getName() {
  const inputElement = document.querySelector('.card__input');
  const inputValue = inputElement.value.trim();

  if (inputValue === '') {
    alert('Error: El input está vacío');
    return;
  }

  urlFinal = `https://api.agify.io/?name=${inputValue}`;

  sendName();
}

const getInfoButton = document.querySelector('.card__button');
getInfoButton.addEventListener('click', getName);

function sendName() {
  const URL = urlFinal;
  const showAge = document.querySelector('.card__age');

  fetch(URL)
    .then(respuesta => respuesta.json())
    .then(data => { 
        if (!data.age) {
            showAge.textContent = '-';
            console.log('Se ha producido un error');
        } else {
            showAge.textContent = data.age;
        }
    })

}
