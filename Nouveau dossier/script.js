event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const university = document.getElementById('university').value;

  const cardContainer = document.getElementById('cardsContainer');
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <p><strong>Nom :</strong> ${fullName}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Université :</strong> ${university}</p>
  `;
  cardContainer.appendChild(card);

  document.getElementById('registrationForm').reset();
});