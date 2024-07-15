const apiUrl = 'http://127.0.0.1:5001';

function addGuest() {
  const name = document.getElementById('name').value;

  fetch(`${apiUrl}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      document.getElementById('name').value = '';
      fetchGuestList();
    })
    .catch(error => console.error('Erro ao adicionar convidado:', error));
}

function removeGuest() {
  const name = document.getElementById('removeName').value;

  fetch(`${apiUrl}/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      document.getElementById('removeName').value = '';
      fetchGuestList();
    })
    .catch(error => console.error('Erro ao remover convidado:', error));
}

function searchGuest() {
  const name = document.getElementById('searchName').value;

  fetch(`${apiUrl}/search?name=${name}`)
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      document.getElementById('searchName').value = '';
    })
    .catch(error => console.error('Erro ao pesquisar convidado:', error));
}

function fetchGuestList() {
  fetch(`${apiUrl}/list`)
    .then(response => response.json())
    .then(data => {
      const guestListElement = document.getElementById('guestList');
      guestListElement.innerHTML = '';

      for (const key in data) {
        const listItem = document.createElement('li');
        listItem.textContent = data[key]; // Mostra apenas o valor, não a chave
        guestListElement.appendChild(listItem);
      }
    })
    .catch(error => console.error('Erro ao obter lista de convidados:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  fetchGuestList();
});
