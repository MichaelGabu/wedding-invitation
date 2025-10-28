import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guestName, setGuestName] = useState('');
  const [isValidGuest, setIsValidGuest] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guest = urlParams.get('guest');

    if (guest) {
      fetch('/wedding-invitation/guests.json')
        .then(response => response.json())
        .then(data => {
          if (data.guests.includes(guest)) {
            setGuestName(guest);
            setIsValidGuest(true);
          }
        });
    }
  }, []);

  if (!isValidGuest) {
    return (
      <div className="invitation">
        <h2>Invitación no encontrada</h2>
        <p>Por favor, verifica que el enlace que has utilizado es correcto.</p>
      </div>
    );
  }

  return (
    <div className="invitation">
      <header>
        <h1>¡Nos Casamos!</h1>
      </header>
      <main>
        <p className="guest-greeting">Hola, {guestName}!</p>
        <p>Tenemos el placer de invitarte a nuestra boda.</p>
        <h2>Maria & Juan</h2>
        <div className="event-details">
          <p><strong>Fecha:</strong> Sábado, 14 de Diciembre de 2024</p>
          <p><strong>Hora:</strong> 18:00</p>
          <p><strong>Lugar:</strong> Finca La Campana, Sevilla</p>
        </div>
        <p>Esperamos que puedas acompañarnos en este día tan especial.</p>
      </main>
      <footer>
        <p>Confirma tu asistencia antes del 1 de Diciembre de 2024.</p>
      </footer>
    </div>
  );
}

export default App;
