
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

async function displayUser(username) { /*Funcion asincrona para usar await*/ 

  try {
    $n.textContent = `cargando...`;
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  }
  catch (err) {
    handleError (err);
} 

}
displayUser('stolinski');