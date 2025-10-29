import { useState, useEffect } from 'react';
import './App.css';

interface Guest {
  nombre: string;
  asientos: number;
  codigo: string;
}

function App() {
  const [guestName, setGuestName] = useState('');
  const [guestSeats, setGuestSeats] = useState(0);
  const [isValidGuest, setIsValidGuest] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestCode = urlParams.get('guest');

    if (guestCode) {
      fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQEpBrp4VMuMy9e9tf_NzbOQ_awlIpQJat5uZcrvozifEzKkynMUQW24htv7aL8pjjZ3cVAyRYeWkc/pub?gid=0&single=true&output=csv')
        .then(response => response.text())
        .then(csvText => {
          const lines = csvText.split('\n');
          const headers = lines[0].split(',').map(h => h.trim());
          const guests: Guest[] = [];
          for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            const guest: any = {};
            for (let j = 0; j < headers.length; j++) {
              guest[headers[j]] = values[j];
            }
            guests.push({
              ...guest,
              asientos: parseInt(guest.asientos, 10)
            } as Guest);
          }

          const guest = guests.find(g => g.codigo === guestCode);

          if (guest) {
            setGuestName(guest.nombre);
            setGuestSeats(guest.asientos);
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
        <p>Dispones de {guestSeats} asientos.</p>
        <h2>Natalia & Michael</h2>
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
